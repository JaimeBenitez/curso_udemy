import { useState } from 'react'
//Lo de la T es para decir que usamos el tipo genérico que se le pase
export const useForm = <T extends Object >( formulario: T) => {
  
    const [state, setState] = useState( formulario )
    //El keyof T nos permite establecer que el campo que le pasamos debe ser uno de los del formulario que estamos usando
    const onChange = (value:string, campo: keyof T) => {
        setState({
          ...state,
            [campo]: value
        })
    }
  
  
  
    return {
        ...state,
        onChange,
        formulario: state
    }
}
