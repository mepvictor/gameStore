import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "../admin/Login";
import Principal from "../admin//Home";
import Alterar from "../admin//Alterar";
import Cadastrar from "../admin/Cadastrar";
import Listar from "../admin/ListarProdutos";

const router = createBrowserRouter([
    {
        path: "/admin/login",
        element: <Login />
    },
    {
        path: "/admin/alterar/:id",
        element: <Alterar />
    },
    {
        path: "/admin/cadastrar",
        element: <Cadastrar />
    },
    {
        path: "/admin/produtos",
        element: <Listar />
    }
]);


const Rota = () => {
    return <RouterProvider router={router} />
}

export default Rota