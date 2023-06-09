import React, { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse } from "../interfaces/appInterfaces";
import cafeApi from "../api/cafeApi";
import { ImagePickerResponse } from "react-native-image-picker";
import { Platform } from "react-native";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProducts: ( categoryId: string, productName: string ) => Promise<Producto>;
    updateProducts: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
    deleteProducts: ( id: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<Producto>;
    uploadImage: ( data: any, id: string ) => Promise<void>; //TODO : Cambiar any
}

export const productsContext = createContext({} as ProductsContextProps)

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts ] = useState<Producto[]>([])

    useEffect(()=>{
        loadProducts()
    },[])

    const loadProducts = async() => {
        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50')
        setProducts([ ...resp.data.productos])
    }
    const addProducts = async( categoryId: string, productName: string ): Promise<Producto> => {
        const resp = await cafeApi.post<Producto>('/productos', {
            nombre: productName,
            categoria: categoryId
        })
        setProducts([...products, resp.data])
        return resp.data
    }
    const updateProducts = async( categoryId: string, productName: string, productId: string ) => {
        const resp = await cafeApi.put<Producto>(`/productos/${ productId }`, {
            nombre: productName,
            categoria: categoryId
    })
    setProducts(products.map( prod => {
        return (prod._id === productId)
                    ? resp.data
                    : prod
    }))


    }
    const deleteProducts = async( id: string ) => {

    }
    const loadProductById = async( id: string ): Promise<Producto> => {
        const resp = await cafeApi.get<Producto>(`/productos/${id}`)
        return resp.data
    }
    const uploadImage = async( data: ImagePickerResponse, id: string ) => {
        const params = {
            name: data.assets![0].fileName,
            type: data.assets![0].type,
            uri: Platform.OS === 'ios' ? data.assets![0].uri!.replace('file://','') : data.assets![0].uri! 
        }
        const fileToUpload = JSON.parse(JSON.stringify(params))

        const formData = new FormData();
        formData.append('archivo', fileToUpload)
       
        
        try{
            const resp = await cafeApi.put(`/uploads/productos/${ id }`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }, )
            

        } catch(error){
            
            console.log({ error })
        }
    }

    return (
        <productsContext.Provider value={{
            products,
            loadProducts,
            addProducts,
            updateProducts,
            deleteProducts,
            loadProductById,
            uploadImage,
        }}>
            { children }
        </productsContext.Provider>
    )
}