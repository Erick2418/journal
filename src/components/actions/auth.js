import {firebase, googleAuthProvider} from './../../firebase/firebase-config'
import { types } from '../types/types'
/* estas acciones sirven para hacer el distpach  */
export const startLoginEmailPasswod=(email,password)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch( login(123,'Pedro') );
        }, 3500);
    }
}

// export const startGoogleLogin=()=>{
//     return (dispatch)=>{
//         firebase.auth().signInWithPopup(googleAuthProvider)
//         .then(userCred =>{
    /**@userCred Extra los datos del usuario identificado
      lo importante es el 
      uid, displayname
     */
//             console.log(userCred);
//         } )
//     }
// }
/**Esto es la forma asincrona */
export const startGoogleLogin=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            dispatch(
                login( user.uid,user.displayName )
            )    
        } )
    }
}
/**Esto es para hacerlo de manera sincrona */
export const login = (uid,displayName) => ({
        type: types.login,
        payload:{
            uid,
            displayName
        }
})
