
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Factorial from './pages/Factorial'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Factorial/>
    }
  ])

  return(
    <RouterProvider router={router}/>
  )
}

export default App
