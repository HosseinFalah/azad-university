import { MdPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Card } from '../../Common';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules


const Teacher = () => {
    return (
        <main className="xl:max-w-screen-xl m-auto px-4 xl:px-0">
            <section className="grid grid-cols-12 gap-x-4 place-items-center pt-10">
                <div className="col-span-12 lg:col-span-4">
                    <div className="max-w-full bg-white p-8 rounded-3xl drop-shadow-xl">
                        <img src="/image/m.k.png" className="w-full h-full object-cover" alt="تصویر مدرس" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <h1 className="text-2xl xl:text-4xl font-semibold text-zinc-800">میثم کلاهدوز</h1>
                    <div className="mt-8">
                        <p className="text-base text-zinc-700 text-justify font-medium leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-12">
                <div className='pt-12'>
                    <h2 className='text-2xl xl:text-4xl font-semibold text-zinc-800'>دوره های مدرس</h2>
                </div>
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
                    </Swiper>
                </div>
            </section>
            <section className='flex flex-col gap-12'>
                <div className='pt-12'>
                    <h2 className='text-2xl xl:text-4xl font-semibold text-zinc-700'>مهارت های مدرس</h2>
                </div>
                <div className='bg-white drop-shadow-xl p-4 rounded-2xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <p>Html</p>
                                <span>94%</span>
                            </div>
                            <div className='bg-red-400 w-full h-2 p-1 rounded-3xl'></div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <p>Css</p>
                                <span>94%</span>
                            </div>
                            <div className='bg-blue-500 w-full h-2 p-1 rounded-3xl'></div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <p>Js</p>
                                <span>94%</span>
                            </div>
                            <div className='bg-amber-500 w-full h-2 p-1 rounded-3xl'></div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <p>Nodejs</p>
                                <span>94%</span>
                            </div>
                            <div className='bg-green-800 w-full h-2 p-1 rounded-3xl'></div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-12'>
                <div className='pt-12'>
                    <h3 className='text-2xl xl:text-4xl font-semibold text-zinc-700'>ارتباط با مدرس</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-blue-700 p-3 rounded-full">
                            <MdPhone className="text-white" size={22}/>
                        </div>
                        <div>
                            <p className="text-base font-semibold text-zinc-600">شماره تماس با استاد:</p>
                            <span className="text-xl font-bold text-zinc-800">۴۳۱ ۵۴۴۵ (۰۹۲۵) +</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-blue-700 p-3 rounded-full">
                            <MdOutlineEmail className="text-white" size={22}/>
                        </div>
                        <div>
                            <p className="text-base font-semibold text-zinc-600">ارسال ایمیل به استاد:</p>
                            <span className="text-xl font-bold text-zinc-800">hirmarubunti@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-blue-700 p-3 rounded-full">
                            <FaTelegramPlane className="text-white" size={22}/>
                        </div>
                        <div>
                            <p className="text-base font-semibold text-zinc-600">ارسال پیام به تلگرام استاد:</p>
                            <span className="text-xl font-bold text-zinc-800">@TelegramTeacher</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-green-700 p-3 rounded-full">
                            <FaWhatsapp className="text-white" size={22}/>
                        </div>
                        <div>
                            <p className="text-base font-semibold text-zinc-600">ارسال پیام به واتساپ استاد:</p>
                            <span className="text-xl font-bold text-zinc-800">۴۳۱ ۵۴۴۵ (۰۹۲۵) +</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Teacher