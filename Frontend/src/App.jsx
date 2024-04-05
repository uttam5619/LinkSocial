import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import ProfilePage from './components/Profile/ProfilePage'
import HomePage from './components/Home/HomePage'
import Main from './components/Main'

function App() {
  
  const appRouter =createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children:[
        {
          path: '/login',
          element: <LoginPage/>
        },
        {
          path: '/home',
          element: <HomePage/>
        },
        {
          path: '/profile/:id',
          element: <ProfilePage/>
        }
      ]
    },
  ])

  return (
    <div className='min-h-[100vh]'>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
