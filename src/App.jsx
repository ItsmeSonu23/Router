import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./component/Layout/Home"
import About from "./component/Layout/About"
import Contact from "./component/Layout/Contact"
import Service from "./component/Layout/Service"
import Header from "./component/UI/Header"
import Footer from "./component/UI/Footer"
import AppLayout from "./component/UI/AppLayout"
import LogIn from "./component/Layout/LogIn"
export const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/service",
          element: <Service />
        },
        {
          path: "/login",
          element: <LogIn />
        }
      ]
    }
  ])
  return <RouterProvider router={route} />
}