import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import PrivateRoutes from './PrivateRoutes'
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        },
        {
          path : "/browse",
          element : (
            <PrivateRoutes>
             <Browse/>
          </PrivateRoutes>
        )
        }
    ])


  return (
    <>
     <RouterProvider router={appRouter} />
    </>
  )
}

export default Body