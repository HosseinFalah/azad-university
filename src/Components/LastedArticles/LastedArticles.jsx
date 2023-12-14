import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Article from '../Article/Article';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './LastedArticles.css';


const LastedArticles = () => {
    return (
        <div className="xl:max-w-screen-xl m-auto px-4 xl:px-0">
            <div className="flex flex-col gap-10 w-full">
                <h4 className="text-2xl lg:text-3xl font-extrabold text-center md:text-start mt-4 md:mt-8">جدید ترین مقاله ها</h4>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="artcle-aside bg-blue-500 h-full p-4 rounded-s-xl rounded-e-3xl flex items-center justify-center">
                            <div className="flex flex-col gap-4">
                                <div className="text-center text-white space-y-2">
                                    <h5 className="text-3xl font-thin">مطالب خواندنی</h5>
                                    <p className="text-2xl font-extrabold">داشنگاه آزاد</p>
                                </div>
                                <Link to={`/`} className="flex items-center gap-x-2 bg-white py-3.5 px-8 rounded-xl text-primary font-semibold transition-transform duration-200 ease-in-out hover:rotate-3 hover:scale-110">مشاهده بیشتر <IoIosArrowBack/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
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
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                }
                            }}
                            modules={[Pagination]}
                            className="mySwiper p-1"
                        >
                            {Array(6).fill(0).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <Article/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastedArticles