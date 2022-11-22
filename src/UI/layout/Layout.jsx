import AppRouter from "../../routes/AppRouter";
import { Header } from "../components";

export const Layout = () => {
    return (
        <div>
            <Header/>
            <AppRouter/>
        </div>
    );
};

