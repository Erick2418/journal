import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { starSaveNote, startUploading } from '../actions/notes';

export const NotesAppBar = () => {

    const dispatch= useDispatch();
    const {active} = useSelector( state => state.notes );


    const handleSave=()=>{
        dispatch(starSaveNote(active))
    }

    const handlePictureClick=()=>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange=(e)=>{
        /**Para ver el archivo --- e,target,files */
       const file = e.target.files[0];
     // console.log(e.target.files);
       if(file){
           dispatch(startUploading(file));
       }
    }
    return (
        <div className="notes__appbar" >
            <span>28 de agosto 2020</span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{display:"none"}}
                onChange={handleFileChange}
            />


            <div>
                <button className="btn" onClick={handlePictureClick}>
                    Picture
                </button>

                <button className="btn" onClick={handleSave }>
                    Save
                </button>
            </div>
        </div>
    )
}
