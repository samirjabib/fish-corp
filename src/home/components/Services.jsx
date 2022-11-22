import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/fish-corp.mp4'

export const Services = () => {
    return (
        <div className= "h-80 w-full  bg-black relative">
            <video 
                src={backgroundVideo} autoPlay loop muted
                className='w-full h-full object-none'
            />
            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>               
                <h2 
                    className='text-8xl text-[#fdfffc] font-bold tracking-widest mb-10
                '
                >
                    Servicios
                </h2>

                <button className=" border-4 border-[#fdfffc] text-[#fdfffc] px-6 py-2 pointer z-50 w-40 rounded-md
                hover:bg-black hover:text-white hover:border-black">
                <Link>Tienda</Link>
                </button>
            </div>
            
        </div>
    );
};
