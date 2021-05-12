import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
/*Permite tener varios midleware, uno es del thunk y el otro es del
store */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/**Este permite tener mas de 1 redurcer */
const reducers= combineReducers({
    auth: authReducer,
    ui:uiReducer/**importamos el reducer aqui */
});

/**El estore solo recibe un reducer por defecto pero se le añade mas con
 * el combine reducers
 */
export const store= createStore(
    reducers,
    /**  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

