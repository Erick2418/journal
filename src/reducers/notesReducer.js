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

const initialState={
    notes:[],
    active:null
}
 export const noteReducer=(state=initialState,action)=>{
    switch (action.type) {
      
        default:
            return state;
    }
 }



