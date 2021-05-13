import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import {firebase} from '../firebase/firebase-config'
import { login } from '../components/actions/auth';
export const AppRouter = () => {

    const dispatch= useDispatch();
   /**Verifica que se este checkeando las variables de logueo */
    const [checking, setCheking] = useState(true);
/**verifica que el usuario se logueo correctamente */
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    /**Recordaremos el uid del usuario que se loguea
     * no lo guardamos en el localStorage por que es info sensible
    queremos que se dispare 1 vez asi que usaremos useEffect
    */

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( 
            (user)=>{
                if(user?.uid){
                    dispatch(login(user.uid,user.displayName));
                    setIsLoggedIn(true);
                }else{
                    setIsLoggedIn(false)
                }

                setCheking(false);

            } 
        )
        
    }, [dispatch,setCheking,setIsLoggedIn]);


    if(checking){
        return(
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
