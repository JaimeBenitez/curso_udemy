import { useEffect, useRef, useState } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const useUsuarios = () => {
    const paginaRef = useRef(1);

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    //UseEffect se renderiza 2 veces lo que en este caso da problemas, la solucion es usar el return del useEffect de la siguiente manera
    useEffect(() => {return() => {
       cargarUsuarios();
    }}, [])

    const cargarUsuarios = async() => {
         // llamado a la API
         const resp = await reqResApi.get<ReqResListado>('/users', {
            
            params: {
                    page: paginaRef.current
                }
            });
            console.log(resp.data.data)
            if( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
            } else {
                paginaRef.current --;
                alert("No hay mas usuarios");
            }
         
    }
    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }
    const paginaAnterior = () => {
        if( paginaRef.current > 1 ) {
        paginaRef.current--;
        cargarUsuarios();
        }
    }
  return {usuarios, paginaAnterior, paginaSiguiente};
}


