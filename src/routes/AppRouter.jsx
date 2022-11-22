import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../home";
import { AuthRoutes } from '../auth'

const AppRouter = () => {
    return (
        <Routes> 
            
            {/* Rutas Publicas  */}
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/*" element={<AuthRoutes/>}/>

        </Routes>
    );
};

export default AppRouter;