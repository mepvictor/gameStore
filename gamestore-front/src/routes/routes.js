import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginAdmin from "../admin/views/Login";
import AlterarAdmin from "../admin/views/Alterar";
import CadastrarAdmin from "../admin/views/Cadastrar";
import ListarAdmin from "../admin/views/ListarProdutos";
import LoginSite from '../site/views/Login'
import HomeSite from '../site/views/Home'

const router = createBrowserRouter([
    {
        path: "/admin/login",
        element: <LoginAdmin />
    },
    {
        path: "/admin/alterar/:id",
        element: <AlterarAdmin />
    },
    {
        path: "/admin/cadastrar",
        element: <CadastrarAdmin />
    },
    {
        path: "/admin/produtos",
        element: <ListarAdmin />
    },
    {
        path: "/login",
        element: <LoginSite /> 
    },
    {
        path: "/",
        element: <HomeSite /> 
    }
    
]);


const Rota = () => {
    return <RouterProvider router={router} />
}

export default Rota