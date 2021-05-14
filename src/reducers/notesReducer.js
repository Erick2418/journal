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
        default:
            return state;
    }
 }



