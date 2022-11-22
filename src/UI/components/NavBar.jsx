import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs'
import { useState } from "react";

const navLinks = [
    { path:'/', display:'Inicio', id:1},
    { path:'/', display:'Servicios', id:2},
    { path:'/', display:'Sobre nosotros', id:3},
    { path:'/', display:'Tienda', id:4},
    { path:'/', display:'Contáctanos', id:5}
]



export const NavBar = () => {


    const [ open, setOpen ] = useState(false);

    const onToggle = (toggle) => {
        if(toggle){
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    


    return (
        <div 
        className="
        container relative  top-5 h-20  mx-auto flex 
        items-center justify-between
        md:justify-around px-4 py-8 
    
        
        ">
            {/* DESKTOP NAV */}
            <ul className="flex w-[30rem] justify-between  text-lg">
                {
                    navLinks.map( ({display, id, path }) => {
                        return(
                            <li key={id} className='relative group'>
                                <NavLink to={path} className='text-[##2f2e2e] font-medium'>
                                    {display}
                                    <span className="absolute -bottom-1 left-0 w-0 h-2 bg-[#2EC4B6] transition-all group-hover:w-full"></span>
                                </NavLink>
                            </li>
                        )
                    } )
                }
            </ul>

            <div className="flex gap-4 p-4">
                
                    <div className="flex w-full items-center ">
                        <FaUserCircle size={30}/>
                        <span className="ml-2">Iniciar Sesion</span>
                    </div>
                    <BsBag size={30}/>

            </div>
            
        </div>
    );
};

export default NavBar;