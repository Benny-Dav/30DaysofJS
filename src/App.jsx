
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Factorial from './pages/Factorial'
import LeapYear from './pages/LeapYear'
import HomePage from './pages/HomePage'
import TutorialsLayout from './layouts/TutorialsLayout'
import RandomNumber from './pages/RandomNumber'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/tutorials",
      element:<TutorialsLayout/>,
      children:[
        {
          path:"factorial",
          element:<Factorial/>
        },
        {
          path:"leap-year",
          element:<LeapYear/>
        },
        {
          path:"random-number",
          element:<RandomNumber/>
        }
      ]
    },

    
  ])

  return(
    <RouterProvider router={router}/>
  )
}

export default App
