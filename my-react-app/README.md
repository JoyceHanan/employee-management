# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


### Client-side Routing
  - Decide root layout
      header
      placeholder
      footer

  - Install react router  

  - decide paths 
  http://localhost:5173/ - for Home
 http://localhost:5173/Login - for Login [etc..]

 - config routing (connecting components with paths)

 ### CLIENT-SIDE ---> SERVER-SIDE
 AXIOS IS EASY COMPARED TO FETCH
 - Client-side application and server side appplication can interact with each other over http       protocol by making http req and recieving res 
 - To make http req fron client-side one can use either fetch function or axios module
 - The following are the htttp req types 
    GET - to read all resources
    POST - to create new resource
    PUT -to update entire resource
    DELETE -to del a resource
    PATCH - to update a resource partially 
 -The POST PUT & PATCH can have body property which can hold json data whereas GET & DELETE req dont have body prop and send data through URL


## fetch
GET 
fetch(endpoint,{method:GET})

POST 
fetch(endpoint,{method:GET,headers:{"Content-Type":app/json}
                 body:JSON.strigify(resource)})

PUT
fetch(endpoint,{method:PUT,headers:{"Conteent-Type":app/json}
                 body:JSON.strigify(resource)})           

## AXIOS
//it is not directly available we need to install import and use
GET
axios.get(endpoint)

POST
axios.post(endpoint,resource)  //content will be automatically set 

PUT
axios.post(endpoint,resource)

# State management 
   sharing state + keeping state async across 
   sharing a state has prop drilling isssue
   func A(){
    return(
      func B(){

      }
    )
   }
## props drilling issue
    parent component only knows its child 
    only pass to its direct child which causes unnecessary rendering when we have to pass it to far v
    duplication 
## [solution for props drilling]
When used globally 
   ### context API[pipeline]
   for small apps
  we use context 
  context provider - it stores state and can directly pass it to any component
  when the value is change it should broadcast immediately
  ### Redux / zustand
  redux - old, zustand- new 
  these are advanced state management libraries 
  used for large apps
  zustand has less code and recent edition [popular]

  ## Create context API
   - create context obj
   - Add state to context obj
   - Set this context provider to a parent 
   - Consume context from component
    [Drawback]
    context with useState hook is a best and simple state managment mechanism for small applications
    but it creates unnc=ecessary re-rendering issues whrn multiple states are part of context.
    To overcome this create multiple context and make sure each context has single state .

    When the application size is huge maintainance of multiple context will become an issue for such large applications advance state management tools redux and zustand can be used

### Advanced state management with zustand
 - install zustand
     npm i zustand
- create a global store and keep state functions that modify state     