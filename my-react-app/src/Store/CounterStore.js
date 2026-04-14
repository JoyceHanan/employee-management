import {create} from 'zustand'

//create store
export const useCounterStore=create((set)=>({ // 'use' represents hook
    //state
    newCounter:0,
    newCounter1:100,
    //add user
    user:{name:"ravi",email:"ravi@mail.com",age:21},
   //functions to modify 
   //we use set whenever w need to pass the state
   incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
   incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
   decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
   reset:()=>set({newCounter:0}), //here we didnt use 'state' because it doesnt need previous state to change 
   //func to decrement counter1 by 20
   decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-20})),
   //func to change newCounter to 500
   change:()=>set({newCounter:500}),
   //func to change  email
   changeEmail:()=>set({...user,email:'test@MediaList.com'}),
   changeNameage:()=>set({...user,name:"test",age:20})
})) //to return obj 
