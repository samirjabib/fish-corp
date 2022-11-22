import AppRouter from "../../routes/AppRouter";
import { Header } from "../views";

export const Layout = () => {
    return (
        <div className="relative">
            <Header/>
            <AppRouter/>
        </div>
    );
};

