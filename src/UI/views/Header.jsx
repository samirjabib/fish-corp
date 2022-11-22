import NavBar from "../components/NavBar";
import Promotion from "../components/Promotion";

export const Header = () => {
    return (
        <header className="absolute w-full z-50  ">
            {/* Promotion component */}
            <Promotion/>
            <NavBar/>

        </header>
    );
};

