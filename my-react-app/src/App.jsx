import React from 'react'
import './App.css'
import RootLayout from './components/RootLayout.jsx'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import CreateEmp from './components/CreateEmp'
import ListOfEmployee from './components/ListOfEmployee'
import Employee from './components/Employee.jsx'
import EditEmployee from './components/EditEmployee.jsx'

function App() {

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,   
          element: <Home />
        },
        {
          path: "create-emp",
          element: <CreateEmp />
        },
        {
          path: "list-emp",
          element: <ListOfEmployee />
        },
        {
          path:"employee",
          element:<Employee />
        },
        {
          path:"edit-emp",
          element:<EditEmployee/>
        }
      ]
    }
  ])

  return <RouterProvider router={routerObj} />
}

export default App