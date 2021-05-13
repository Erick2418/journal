import {firebase, googleAuthProvider} from './../../firebase/firebase-config'
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui';
/* estas acciones sirven para hacer el distpach  */


export const startLoginEmailPasswod=(email,password)=>{
    return (dispatch)=>{
        /**Aqui disparar el start loading */
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=>{
            // console.log(user.uid, user.displayName)
            dispatch(
                login(user.uid,  user.displayName)
            )
            dispatch(finishLoading())  
        }
        ).catch(e=>{
            dispatch(finishLoading())
            console.log(e)
        })
    }
}






/**En esta funcion grande lo que hacemos es enviar email y el password
 * pero como tambien queremos enviar el nombre. se lo hace conl a funcion
 * updateProfile, y le enviamos el parametro y el valor del objeto user
 */
export const startRegisterWithEmailPasswordName=(email,password,name)=>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( async ({user})=>{
            await user.updateProfile({displayName:name});
            dispatch(
                login( user.uid,user.displayName )
            ) 
        } ).catch(e=>{console.log(e)})
    }
}


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
