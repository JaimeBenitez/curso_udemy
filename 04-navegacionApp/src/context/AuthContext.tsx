import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";


//Definir como se ve, que información tendré aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}
// Lo usaremos para decirle a React como se ve y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    changeUsername: (name: string) => void;
}

//Crear el contexto, le pasamos asi el parametro para que ts no se queje
export const AuthContext = createContext({} as AuthContextProps)


//Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type:'signIn'})
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type:'changeFavIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type:'logOut'})
    }

    const changeUsername = ( name: string ) => {
        dispatch({ type:'changeUsername', payload: name })
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUsername
        }}>
            { children}
        </AuthContext.Provider>
    )
}