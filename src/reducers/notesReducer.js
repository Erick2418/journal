/**
 {
     notes: [],
     active:null,
     active:{
         id:'qwewe21e2eqweqweqwe2eq'
         title:'',
         body:'',
         imageURL:'',
         date:13456789,
         
     }
 }
 */

import { types } from "../components/types/types";

const initialState={
    notes:[],
    active:null
}
 export const noteReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note=>note.id===action.payload.id
                    ? action.payload.note
                    : note
                )
            }
        case types.notesDelete:
                return {
                    ...state,
                    active:null,
                    notes: state.notes.filter(note=>note.id !== action.payload)
                }
        case types.notesLogoutCleaning:
                return {
                   notes:[]
                }
    //notesAddNew
        case types.notesAddNew:
            return {
                ...state,
                notes:[action.payload,...state.notes]
            }


        default:
            return state;
    }
 }



