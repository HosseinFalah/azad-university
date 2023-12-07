import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true
            }}
            navigation={{
                nextEl: '.button-next',
                prevEl: '.button-prev',
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper relative"
        >
            <SwiperSlide className="h-48 sm:h-64 md:h-80 xl:h-96">
                <img src="/image/banner.jpg" className='w-full h-full object-cover' alt="بنر" />
            </SwiperSlide>
            <SwiperSlide className="h-48 sm:h-64 md:h-auto xl:h-96">
                <img src="/image/banner.jpg" className='w-full h-full object-cover' alt="بنر" />
            </SwiperSlide>
            <SwiperSlide className="h-48 sm:h-64 md:h-auto xl:h-96">
                <img src="/image/banner.jpg" className='w-full h-full object-cover' alt="بنر" />
            </SwiperSlide>
            <SwiperSlide className="h-48 sm:h-64 md:h-auto xl:h-96">
                <img src="/image/banner.jpg" className='w-full h-full object-cover' alt="بنر" />
            </SwiperSlide>
            <SwiperSlide className="h-48 sm:h-64 md:h-auto xl:h-96">
                <img src="/image/banner.jpg" className='w-full h-full object-cover' alt="بنر" />
            </SwiperSlide>
            <SwiperSlide className="h-48 sm:h-64 md:h-auto xl:h-96">
                <img src="/image/banner.jpg" className='w-full h-full object-cover' alt="بنر" />
            </SwiperSlide>
            <div className="absolute bottom-5 right-10 z-10 flex items-center gap-x-2">
                <button className='button-prev bg-white text-primary rounded-full drop-shadow-lg p-3.5 disabled:opacity-80'>
                    <IoIosArrowForward size={25}/>
                </button>
                <button className='button-next bg-white text-primary rounded-full drop-shadow-lg p-3.5 disabled:opacity-80'>
                    <IoIosArrowBack size={25}/>
                </button>
            </div>
        </Swiper>
    )
}

export default Banner