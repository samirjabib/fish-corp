import { Link } from 'react-router-dom';
import background from '../../assets/background.jpg'


export const Hero = () => {
    return (
        <div className="relative top-12 w-full h-96 ">

            <div className='relative bottom-[50%] top-[80%] z-50 h-full w-full mx-auto text-center p-4'>
                <h2 className='font-medium text-4xl mb-4'>PISCÍCOLA</h2>
                <h1 className='font-bold text-9xl'>FISH CORP</h1>
                <button className='relative top-20 border-2 border-black px-4 py-2'>
                    <Link>Suscribete</Link>
                </button>
            </div>

            {/* Background Hero */}
            <img 
            className='w-full h-[45rem] object-cover absolute top-0 left-0'
            src="https://static.wixstatic.com/media/1d9aeb_98a787d106cc4b7ca80c99ef428418dc~mv2_d_17959_6477_s_3.jpg/v1/fill/w_1920,h_777,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/1d9aeb_98a787d106cc4b7ca80c99ef428418dc~mv2_d_17959_6477_s_3.jpg"
            alt='venta de cachamas'  
            />
        </div>
    );
};

 