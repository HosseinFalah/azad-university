import { FaGraduationCap } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="mt-8">
            <div className="bg-[#1B1C20] text-white py-8 px-4 xl:px-0">
                <div className="xl:max-w-screen-xl m-auto grid place-items-center xl:place-items-start grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-3">
                            <FaGraduationCap size={30}/>
                            <h5 className="text-lg xl:text-xl font-bold">دوره های با کیفیت</h5>
                        </div>
                        <p className="text-stone-500 text-base font-semibold">براساس جدیدترین مباحث</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-3">
                            <FaHeadset size={30}/>
                            <h5 className="text-lg xl:text-xl font-bold">پشتیبانی 24 ساعته</h5>
                        </div>
                        <p className="text-stone-500 text-base font-semibold">سیستم ارسال تیکت حرفه ای</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-3">
                            <LiaMoneyBillWaveAltSolid size={30}/>
                            <h5 className="text-lg xl:text-xl font-bold">کش بک محصولات</h5>
                        </div>
                        <p className="text-stone-500 text-base font-semibold">کش بک محصولات دارای تخفیف</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-3">
                            <FiShoppingCart size={30}/>
                            <h5 className="text-lg xl:text-xl font-bold">خرید آسان و امن</h5>
                        </div>
                        <p className="text-stone-500 text-base font-semibold">در کمترین زمان امن خرید کنید</p>
                    </div>
                </div>
            </div>
            <div className="xl:max-w-screen-xl m-auto px-4 xl:px-0 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-0">
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-2">
                            <HiOutlineViewGridAdd size={20}/>
                            <h6 className="text-lg font-medium text-stone-700">دسترسی سریع</h6>
                        </div>
                        <ul className="space-y-2 text-base font-medium text-stone-500">
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">صفحه اصلی</li>
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">دوره ها </li>
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">درباره ما</li>
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">مدرسین</li>
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">تماس با ما</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-2">
                            <HiOutlineViewGridAdd size={20}/>
                            <h6 className="text-lg font-medium text-stone-700">لیست مدرسان</h6>
                        </div>
                        <ul className="space-y-2 text-base font-medium text-stone-500">
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">محمد امین حق شناس</li>
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">میثم کلاهدوز</li>
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">مهرداد مهدوی</li>
                            <li className="transition-all duration-200 ease-in-out hover:text-green-800 cursor-pointer">سجاد مطهری</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-x-4 max-w-[18rem]">
                            <div className="p-2 rounded-xl bg-green-200">
                                <FaMapMarkedAlt className="text-green-800" size={20}/>
                            </div>
                            <p className="text-base font-medium text-stone-600">
                                آدرس انجمن : اصفهان-شهرضا -انتهای خیابان پاسداران-دانشگاه آزاد اسلامی شهرضا
                                ساختمان داروسازی-طبقه سوم-اتاق 407</p>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 rounded-xl bg-green-200">
                                <FaPhone className="text-green-800" size={20}/>
                            </div>
                            <p className="text-base font-medium text-stone-600">03153456789</p>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 rounded-xl bg-green-200">
                                <MdAttachEmail className="text-green-800" size={20}/>
                            </div>
                            <p className="text-base font-medium text-stone-600">Info@pishtaz-web.com</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h6 className="text-xl text-stone-700 font-bold">عضویت در خبرنامه</h6>
                        <div className="grid gap-y-4">
                            <input type="text" className="bg-[#D0D0D06B] rounded-lg px-4 py-2 focus:outline-none" placeholder="youremail@gmail.com"/>
                            <button className="bg-primary text-white font-medium py-2.5 rounded-xl">عضویت در خبرنامه</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer