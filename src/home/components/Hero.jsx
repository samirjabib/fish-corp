import { Link } from 'react-router-dom';
import background from '../../assets/background.jpg'


export const Hero = () => {
    return (
        <div className=" w-full h-[50rem] ">

            <div className='relative bottom-[50%] top-[52%] z-50 h-full w-full mx-auto text-center p-4'>
                <h2 className='font-medium text-4xl mb-4'>PISCÍCOLA</h2>
                <h1 className='font-bold text-9xl'>FISH CORP</h1>
                <button className='relative top-20 border-2 border-black px-6 py-2 rounded-md
                    transition-all w-40
                     hover:bg-black hover:text-white'>
                    <Link to='/auth/register' className='font-light'>SUSCRIBETE</Link>
                </button>
            </div>

            {/* Background Hero */}
            <img 
            className='w-full h-[50rem] object-cover absolute top-0 left-0 shadow-md'
            src="https://static.wixstatic.com/media/1d9aeb_98a787d106cc4b7ca80c99ef428418dc~mv2_d_17959_6477_s_3.jpg/v1/fill/w_1920,h_777,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/1d9aeb_98a787d106cc4b7ca80c99ef428418dc~mv2_d_17959_6477_s_3.jpg"
            alt='venta de cachamas'  
            />
        </div>
    );
};

 