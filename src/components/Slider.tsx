import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/styles.css';

// import required modules
import { Pagination, Mousewheel } from 'swiper/modules';


const sliderInfo = [
    {
        id: 1,
        title: 'PARADOX',
        src: '/slider/paradox_homepage_slider.webp',
        description: 'Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc.',
    },
    {
        id: 2,
        title: 'RITUAL GARDEN',
        src: '/slider/ritual_homepage_slider.webp',
        description: 'Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc.',
    },
    {
        id: 3,
        title: 'SOLOSEGUNDOS',
        src: '/slider/solosegundos_homepage_slider.webp',
        description: 'Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc.',
    },
    {
        id: 4,
        title: 'EL PRINCIPIO',
        src: '/slider/Principio_HomePage.webp',
        description: 'Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc.',
    },
    {
        id: 5,
        title: 'INSIDE',
        src: '/slider/inside_homepage_slider.webp',
        description: 'Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc.',
    }
]

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                mousewheel={true}
                cssMode={true}
                modules={[Pagination, Mousewheel]}
                className="mySwiper"

            >
                {sliderInfo.map(slider => (
                    <SwiperSlide key={slider.id} className=' pb-12'>
                        <article>
                            <div className='h-[350px]'>
                                <img src={slider.src} alt=""
                                    className='w-full h-full object-cover object-top' />
                                {/* eliminar el object-top */}
                            </div>
                            <div className='w-[95%] mx-auto m-4'>
                                <h3 className='text-clementine-500 text-3xl font-bold my-8'>{slider.title}</h3>
                                <p className='leading-8'>{slider.description}</p>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}