import React from 'react'
import HomePage from './pages/HomePage'
import AccountPage from './pages/AccountPage'
import MainLayout from'./layouts/MainLayout'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<MainLayout />}>
      <Route index element = {< HomePage />}/> 
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App