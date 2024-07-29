import React from 'react'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element/> 
  )
)

const App = () => {
  return (
    <div>algoArchive</div>
  )
}

export default App