import Plyr from "plyr-react";
import "plyr-react/plyr.css"

import Breadcrumb from "src/Components/Breadcrumb/Breadcrumb"

import { SlBasketLoaded } from "react-icons/sl";
import Accordion from "src/Components/Accordion/Accordion";

const ProductDetails = () => {
      return (
        <main className="xl:max-w-screen-xl m-auto px-4 xl:px-0">
            <Breadcrumb/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-8">
                <div className="bg-white p-6 py-8 rounded-xl">
                    <div className="space-y-8">
                        <h1 className="text-3xl font-medium">آموزش Next.js بصورت پروژه محور</h1>
                        <p className="leading-8 text-sm font-medium">NEXT.Js یا NEXT طی چندسال اخیر برای تکمیل و تقویت تکنولوژی React وارد میدون شد و سعی کرد تمام نواقص یا محدودیت های اون رو پوشش بده تا هیچ شک و شبهه ای در قدرت ری اکت برای طراحی صفحات وب باقی نمونه. به عبارتی اومده تا با ویژگی فول استک بودن، React رو فراتر از یک تکنولوژی فرانت اند جا بندازه و از طریق ترکیب اون با Node Js در بک اند، به شما کمک کنه یک پروژه کامل و صفر تا صد وب رو به بهترین شکل طراحی و پیاده سازی کنید.</p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <div className="bg-zinc-700 p-4 rounded-xl">
                            <span className="text-white font-medium">قیمت : رایگان</span>
                        </div>
                        
                        <button className="bg-primary text-white flex items-center gap-x-4 font-medium p-4 rounded-xl">
                            شرکت در دوره
                            <SlBasketLoaded className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden">
                    <Plyr
                        source={{
                            type: 'video',
                            poster: 'https://ultraamooz.com/wp-content/uploads/2024/01/sec573.jpg',
                            sources: [{ src: 'https://dl.ultraamooz.com/free/Pouya.Rahju/Sans%2D%35%37%33/%30%30%20%2D%20Intro%2DSans%2DSec%35%37%33.mp%34' }]
                        }}
                    />
                </div>
            </div>
            <section className="grid grid-cols-12 py-8 gap-10">
                <div className="col-span-12 lg:col-span-9 order-last lg:order-first space-y-8">
                    <div className="bg-white p-8 rounded-xl">
                        <h3 className="text-2xl font-black">توضیحات</h3>
                        <div className="my-8">
                            <p className="text-lg font-medium leading-8">NEXT.Js یا NEXT طی چندسال اخیر برای تکمیل و تقویت تکنولوژی React وارد میدون شد و سعی کرد تمام نواقص یا محدودیت های اون رو پوشش بده تا هیچ شک و شبهه ای در قدرت ری اکت برای طراحی صفحات وب باقی نمونه. به عبارتی اومده تا با ویژگی فول استک بودن، React رو فراتر از یک تکنولوژی فرانت اند جا بندازه و از طریق ترکیب اون با Node Js در بک اند، به شما کمک کنه یک پروژه کامل و صفر تا صد وب رو به بهترین شکل طراحی و پیاده سازی کنید.</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-xl">
                        <h3 className="text-2xl font-black">سرفصل های دوره</h3>
                        <div className="py-6">
                            <Accordion/>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-xl">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-black">سرفصل های دوره</h3>
                            <button className="bg-primary p-3 rounded-xl text-white font-medium">ثبت نظر</button>
                        </div>
                        <div className="py-8">
                            <div className="ring-1 ring-zinc-400 rounded-xl p-6 space-y-4">
                                <div className="flex items-center gap-x-4">
                                    <img 
                                        src="/image/profile.jpg" 
                                        className="block w-20 h-20 rounded-full object-cover" 
                                        alt="profile" 
                                    />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-600">حسین فلاح</p>
                                        <span className="text-sm font-medium text-gray-800">{new Date().toLocaleDateString('fa-IR')}</span>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold text-zinc-700">درود من دوره رو خرید کردم و توی اسپات پلیر لایسنس رو زدم. اما وقتی وارد دوره میشم هیچ ویدئویی برای نمایش موجود نیست . ممنون میشم بررسی بفرمائید. با سپاس</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="bg-white rounded-xl p-6">
                        <div className="space-y-2">
                            <img 
                                src="/image/profile.jpg" 
                                className="block m-auto w-24 h-24 rounded-full object-cover" 
                                alt="profile" 
                            />
                            <p className="text-xl font-bold text-center">حسین فلاح</p>
                            <p className="text-sm font-medium text-gray-500 text-center">مدرس دوره</p>
                        </div>
                        <div className="my-2">
                            <p className="text-sm font-medium text-justify m-auto leading-7">
                                توسعه دهنده End-Front و با انگیزه و پر تلاش در این حوزه با و با اشتیاق فراوان در حل مسئله و کاوش
                                مشتاقانه در اوفق های چالش بر انگیز و دنیای بی نهایت جاوااسکریپت.من مشتاقانه در پی یادگیری
                                مطالب جدید هستم و در تالشم بهترین نسخه از خودم را به عنوان یک توسعه دهنده نشان دهم
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductDetails