import { AuthState } from "./AuthContext";

type AuthAction = 
| { type: 'signIn' }
| { type: 'logOut'}
| { type: 'changeFavIcon',  payload: string }
| { type: 'changeUsername', payload: string }

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
//OJO nunca mutar el estado inicial, siempre devolver un nuevo estado
    switch (action.type){
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'not-username-yet'
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case "changeFavIcon":
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case "changeUsername":
            return {
                ...state,
                username: action.payload
            }
        default:
            return state
    }

}