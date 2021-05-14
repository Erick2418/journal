import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid)=>{
    /**Esto nos devuelve la coleccion de las notas, con el get() */
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes=[];
    notesSnap.forEach(snapHijo=>{
        notes.push({
            id:snapHijo.id,
            ...snapHijo.data()
        })

    });
    console.log(notes)

    return notes;
}










