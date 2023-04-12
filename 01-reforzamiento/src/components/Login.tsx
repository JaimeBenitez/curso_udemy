import { useReducer, useEffect } from "react"

//El esquema del estado inicial
interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}
//Esto seria el estado inicial que se le pasa al reducer
const initialState : AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}
// El esquema de parametros que le pasaremos a la acción
type LoginPayload = {
    username: string;
    nombre: string;
}
//La accion que vamos a pasarle al reducer, es algo similar a los Enum pero realmente controla que los valores tengan un tipo determinado
//En algunos valores se le pueden pasar parametros (payload)
type AuthAction = 
    | { type: 'logout'}
    | { type: 'login', payload: LoginPayload }

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
//El reducer necesita un estado inicial y un acción y consiste en el switch de como transformará el estado segun la acción
    switch (action.type){
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
        return {
            validando: false,
            token: 'ABC123',
            nombre: action.payload.nombre,
            username: action.payload.username
        }
        default:
            return state;
    }

}

export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);
    //Los timeOut hay que usarlos en el useEffect para que funcionen correctamente
    useEffect(() => {
        setTimeout(()=>{
            dispatch({type: 'logout'})
        }, 1500)
    },[])
    //La manera de usar el reducer es llamandolo con una funcion, el dispatch contiene la accion y los parametros que necesite la accion
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'admin',
                nombre: 'Administrador'
            }
        })
    }
    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }
    if(validando){
        return(
            <>
            <h3>Login</h3>

            <div className="alert alert-info">
               Validando...
            </div>
            </>
        )
    }

  return (
    <>
        <h3>Login</h3>

        {
            (token)
            ? <div className="alert alert-success"> Autenticado como {nombre} </div>
            : <div className="alert alert-danger"> Error de autenticación </div>
        }
        {
            (token)
          ? <button className="btn btn-danger" onClick={logout}>Logout</button>
          : <button className="btn btn-primary" onClick={login}>Login</button>
        }
        

        
    </>
  )
}


