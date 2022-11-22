import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs'

const navLinks = [
    { path:'/', display:'Inicio', id:1},
    { path:'/', display:'Servicios', id:2},
    { path:'/', display:'Sobre nosotros', id:3},
    { path:'/', display:'Tienda', id:4},
    { path:'/', display:'Contáctanos', id:5}
]



export const NavBar = () => {
    return (
        <div 
        className="
        container relative  top-5 h-20  mx-auto flex 
        items-center justify-between
        md:justify-around p-10
    
        
        ">
            {/* DESKTOP NAV */}
            <ul className="flex w-[30rem] justify-between font-semibold text-lg">
                {
                    navLinks.map( ({display, id, path }) => {
                        return(
                            <li key={id}>
                                <NavLink to={path}>
                                    {display}
                                </NavLink>
                            </li>
                        )
                    } )
                }
            </ul>

            <div className="flex gap-4 p-4">
                
                    <div className="flex w-full items-center">
                        <FaUserCircle size={30}/>
                        <span className="ml-2">Iniciar Sesion</span>
                    </div>
                    <BsBag size={30}/>

            </div>
            
        </div>
    );
};

export default NavBar;