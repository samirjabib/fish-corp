import { Link } from "react-router-dom";

export const Information = () => {
    return (
        <section className=" w-full h-[22rem] p-4 flex items-center justify-center flex-col  ">
            <h2 className="text-4xl text-[#a0a09f] mt-20">VENTA DE ALEVINOS </h2>
            <span className="font-bold text-[#a0a09f]">_____</span>
            <div className="my-8 text-[##dededd] relative w-[40rem] mx-auto text-center  ">
                <p className="text-[#a0a09f]">
                Poseemos ejemplares puros NILÒTICUS STIRILING provenientes
                del lago de Manzala.
                Nuestro programa de genética completa la evaluación y el comportamiento de los peces en aspectos relacionados con velocidad de crecimiento, conversión alimenticia y presencia de patología
                </p>
            </div>
            <button className="relative border-2 border-[#a0a09f] text-[#a0a09f] px-6 py-2 pointer z-50 
            mb-10 w-40 rounded-md
            hover:bg-black hover:text-white">
                <Link>Tienda</Link>
            </button>
        </section>
    );
};

