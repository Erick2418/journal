import { types } from '../components/types/types';

const initialState={
    loading:false,
    msgError:null
}
/**Este reducer es llamado en las action para luego ser llamado en el Register */
export const uiReducer = (state=initialState, action)=>{
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError:action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError:null
            }
                 
    
        default:
            return state;
    }
}

