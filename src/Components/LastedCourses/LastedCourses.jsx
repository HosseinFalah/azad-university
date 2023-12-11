import { Card } from '../../Common';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const LastedCourses = () => {
    return (
        <div className="xl:max-w-screen-xl m-auto mt-8 px-4 xl:px-0">
            <div className='flex flex-col gap-10 w-full'>
                <h4 className="text-2xl lg:text-3xl font-extrabold text-center md:text-start mt-4 md:mt-8">جدید ترین دوره ها</h4>
                <div className='w-full'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                            1280: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            }
                        }}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default LastedCourses