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
import MyAccount from "../site/views/MyAccount";
import ProductDetail from "../site/views/ProductDetail";
import HistoricoVendas from "../admin/views/HistoricoVendas";
import ShoppingCart from "../site/views/ShoppingCart";

const isAuth = () => {
    var isValid = sessionStorage.getItem("tokenAdmin");
    return !!isValid
}

const isAuthSite = () => {
    var isValid = sessionStorage.getItem("tokenSite");
    return !!isValid
}

const router = createBrowserRouter([
    {
        path: "/admin/login",
        element: <LoginAdmin />
    },
    {
        path: "/admin/alterar/:id",
        element: isAuth() ? <AlterarAdmin /> : 'Não é possível acessar aqui!'
    },
    {
        path: "/admin/cadastrar",
        element: isAuth() ? <CadastrarAdmin /> : 'Não é possível acessar aqui!'
    },
    {
        path: "/admin/produtos",
        element: isAuth() ? <ListarAdmin /> : 'Não é possível acessar aqui!'
    },
    {
        path: "/admin/historico-vendas",
        element: isAuth() ? <HistoricoVendas /> : 'Não é possível acessar aqui!'
    },
    {
        path: "/login",
        element: <LoginSite /> 
    },
    {
        path: "/",
        element: <HomeSite /> 
    },
    {
        path: "/myaccount",
        element: isAuthSite() ? <MyAccount /> : 'Faça login para acessar aqui!'
    },
    {
        path: "/product/:id",
        element: <ProductDetail />
    },
    {
        path: "/cart",
        element: isAuthSite() ? <ShoppingCart /> : 'Faça login para acessar aqui!'
    }
]);


const Rota = () => {
    return <RouterProvider router={router} />
}

export default Rota