import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../types/types";


export const startNewNote=()=>{
    return async(dispatch,getState)=>{
        const uid= getState().auth.uid;
        const newNote={
            title:'',
            body:'',
            date:new Date().getTime()
        }
        /*Espera a que se aga la insersion y el doc tiene 
        la ref al documento en firebase 
        No te dejara amenos que edites las reglas en firebase
         ********allow read, write: if true;
       allow read, write: if request.auth != null(tenemos que tener un usuario para editar?)
        */
        const doc= await db.collection(`${uid}/journal/notes`).add(newNote)
        dispatch(ActiveNote(doc.id,newNote));
    }
}

export const ActiveNote=(id,note)=>({
    type:types.notesActive,
    payload:{
            id,
        ...note
    }
})

export const startLoadingNotes = (uid)=>{
    return async(dispatch)=>{
        const notes= await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}


export const setNotes =(notes)=>({
    type: types.notesLoad,
    payload: notes
})
