import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/landingPage'
import './App.css'
import Login from './components/login'
import SignIn from './components/signin'
import UserInterface from './components/userinterface'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:'/signin',
      element: <SignIn/>
    },
    {
      path: "/home",
      element: <UserInterface/>
    },
    {
      path: "/logout",
      element: <></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
