
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageBase from "./Pages/PageBase";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contatos from "./Pages/Contatos";
import NotFound from "./Pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase/>}>
                    <Route index element={ <Home/>}/>
                    <Route path="/sobre" element={ <Sobre/>}/>
                    <Route path="/contatos" element={ <Contatos/>}/>
                    <Route path="*" element={ <NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

