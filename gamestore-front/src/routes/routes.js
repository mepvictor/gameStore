import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Login from "../admin/login";
  import Principal from '../admin/principal'
  import Cadastro from '../admin/cadastro'
  import Alteracao from '../admin/alteracao'

  const router = createBrowserRouter([
    {
        path: "/admin/login",
        element: <Login />
    },
    {
        path: "/admin/principal",
        element: <Principal />
    },
    {
        path: "/admin/cadastro",
        element: <Cadastro />
    },
    {
        path: "/admin/alteracao",
        element: <Alteracao />
    },
    {
        path: "/",
        element: 'Aqui vai ser o site principal, onde irá comprar'
    }
  ]);

  const Rota = () => {
    return (
        <RouterProvider router={router} />
    )
  }

  export default Rota