import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import {Picker} from '@react-native-picker/picker';
import useCategories from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { productsContext } from '../context/ProductsContext';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{};

const ProductScreen = ({ navigation, route}: Props) => {
  
  const { id = '', name = '' } = route.params

  const [ tempUri, setTempUri ] = useState<string>()

  const { categories } = useCategories()

  const { loadProductById, addProducts, updateProducts, uploadImage } = useContext( productsContext )

  const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: ''
  })

  useEffect(()=>{
    navigation.setOptions({
      title: nombre ? nombre : 'Sin nombre de producto'
    })
  },[nombre])

  useEffect(()=>{
    loadProduct()
  },[])

  const loadProduct = async() => {
    if (id.length === 0) return
    const product = await loadProductById(id)
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre
    })
  }

  const saveOrUpdate = async() => {
    if (id.length > 0){
      updateProducts( categoriaId, nombre, id)
    } else {
      const tempCategoriaId = categoriaId || categories[0]._id
      const newProduct = await addProducts(tempCategoriaId, nombre)
      onChange(newProduct._id, '_id')

    }
  }
  
  const takePhoto = () => {
      launchCamera({
        mediaType: 'photo',
        quality: 0.5
      }, (resp) => {
        if ( resp.didCancel ) return 
        if ( !resp.assets![0].uri ) return 
        setTempUri( resp.assets![0].uri )
        uploadImage( resp, _id)

      });
      
  }
  const takePhotoFromGallery = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    }, (resp) => {
      if ( resp.didCancel ) return 
      if ( !resp.assets![0].uri ) return 
      setTempUri( resp.assets![0].uri )
      uploadImage( resp, _id)

    });
  }
  return (
    <View style={ styles.container}>
      <ScrollView>
        <Text style={ styles.label }>{ id } { name }</Text>
        <TextInput
          placeholder='producto'
          style={ styles.textInput } 
          value={nombre}
          onChangeText={( value ) => onChange(value, 'nombre')}
        />
        <Text style={ styles.label }>Categoría</Text>
        <Picker
          selectedValue={categoriaId}
          onValueChange={(itemValue ) => onChange(itemValue, 'categoriaId')}
          style={{ color: 'black' }}
        >
          {
          categories.map( c => (
            <Picker.Item label={c.nombre} value={c._id} key={c._id}/>
          ))
          }
        </Picker>
        <Button
          title="Guardar" 
          onPress={ saveOrUpdate }
          color="#5856D6"
        />
        {
          _id.length > 0 && (
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Button
              title="Cámara" 
              onPress={ takePhoto }
              color="#5856D6"
            />
            <View style={{ width: 10 }}/>
            <Button
            title="Galería" 
            onPress={ takePhotoFromGallery }
            color="#5856D6"
            />
          </View>
          )
        }
        
        {
          
          img.length > 0 && !tempUri && (<Image 
            source={{ uri: img }}
            style={{
              marginTop: 20,
              width: '100%',
              height: 300
            }}
            />
          )
        }
        
        {
          
          tempUri && (<Image 
            source={{ uri: tempUri }}
            style={{
              marginTop: 20,
              width: '100%',
              height: 300
            }}
            />
          )
        }
        
      </ScrollView>
    </View>
  )
}

export default ProductScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10
  },
  label: {
    fontSize: 18,
    color: 'black'
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
    color: 'black'
  }
})