import { db } from "../../firebase/firebase-config";


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
        */
        const doc= await db.collection(`${uid}/journal/notes`).add(newNote)
        console.log(doc);


    }
}



