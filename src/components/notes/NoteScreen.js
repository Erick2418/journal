import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { ActiveNote } from '../actions/notes';
import { NotesAppBar } from './NotesAppBar'
import {startDeleting} from './../actions/notes'
export const NoteScreen = () => {

    const dispatch= useDispatch();
    const {active:note} = useSelector( state => state.notes );

    const [formValues,handleInputChange,reset]= useForm(note);
    
    const {body,title,id}=formValues;
    /**Permite almacenar una variable mutable que no va
     * y no redibujara todo el componente si cambia
     */
    const activeId= useRef(note.id)
/**EL PROBLEMA AQUI ES EL SIGUIENTE
 Cuando actualizamos el id del active note, este no realiza cambios
 directamente en el dom, debido a que este componente se ejecuta 1 sola
 vez.. entonces lo que queremos es que cada que cambia el id del active
 se vuelva a ejecutar el componente, para ello usamos el useRef
 que capta la mutacion del state o variable y la podemos comparar
 con su estado inicial o su estado dibujado en el dom
 Ahora 
 Al guardarlo en el activeId comparamos el note.id con el note.id actual
 luego reiniciamos la nota con los valores actuales del active.note
 y le asignamos el cambio al activeId osea 
 le damos el nuevo cambio al useRef.. y hacemos que el reset
 ( que enrealidad no va a resetear si no mas bien va a actualizar el state)
 * 
 */
    useEffect(() => {

         if(note.id!== activeId.current){
            reset(note);
            activeId.current= note.id;
         }
    }, [note,reset])
/**Este use Effect se disparara cundo cambie el titulo o el body */
    useEffect(() => {
        
       dispatch(ActiveNote(formValues.id,{...formValues}))
         
    }, [formValues,dispatch])

    const handleDelete=()=>{
        dispatch(startDeleting (id))
    }


    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    name="title"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                 name="body"
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url)
                    &&
                    (
                        <div className="notes__image">
                            <img 
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                    )
                }


            </div>
            <button className="btn btn-danger" 
                onClick={handleDelete}
            >
                hola
            </button>
        </div>
    )
}
