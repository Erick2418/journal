import { useState } from "react"

export const useForm = (initialState={}) => {
    
    const [values, setvalues] = useState(initialState);


    /*Reinicia el input y lo deja vacio */
    const reset=( newFormState= initialState)=>{
        setvalues(newFormState);
    }

    const handleInputChange=( {target} )=>{
        setvalues({...values,
            [target.name]:target.value
        });
    }
    return [values,handleInputChange,reset];
    
}


