import { Hero, Services } from "../components";
import {Information} from "../components/Information";

export const Home = () => {
    return (
        <div>
            <Hero/>
            <Information/>
            <Services/>
            <div className=" w-full h-[22rem] p-4 flex items-center justify-center flex-col">
                <div className=" font-extralight text-[#a0a09f] placeholder:h-40 w-96 text-center">
                    <p className="text-4xl">EXELENTES PROCESOS QUE GARANTIZAN LA CALIDAD DEL PRODUCTO</p>
                    <span>___</span>
                </div>
            </div>
        </div>
    );
};

