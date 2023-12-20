import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Card = () => {
    return (
        <div className="w-full h-full pb-5 pt-14 lg:pb-7">
            <div className="relative flex flex-col h-full rounded-xl bg-gradient-to-tr from-purple-700 to-purple-400">
                <Link
                    to={`/courses`}
                    className="flex w-full h-full flex-col px-4 lg:px-5"
                >
                    <div className="relative -mt-14 flex w-full">
                        <img
                            src="/image/next-course.png"
                            className="block w-full object-cover rounded-xl"
                            alt="بنر"
                        />
                    </div>
                    <h3 className="mt-5 w-full text-base lg:text-xl font-bold text-white">
                        دوره متخصص NextJS
                    </h3>
                    <div className="mt-5 flex items-center text-white gap-2">
                        <img
                            src="/image/profile.jpg"
                            className="block w-10 h-10 object-cover rounded-full"
                            alt="پروفایل مدرس"
                        />
                        <div className="flex flex-col font-medium justify-center gap-1">
                            <span className="text-sm">مدرس:</span>
                            <p className="text-sm lg:text-base">حسین فلاح</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mb-6 mt-4 lg:mb-8">
                        <span className="text-white text-sm lg:text-base">قیمت دوره:</span>
                            <div className="flex gap-5">
                            <span className="flex items-center justify-center gap-2">
                                <span className="text-base lg:text-lg font-bold text-white">
                                688,000
                                </span>
                                <span className="text-white text-sm font-bold">تومان</span>
                            </span>
                        </div>
                    </div>
                    <div className="grid mb-5">
                        <button className="flex items-center justify-center gap-x-2.5 bg-primary transition-all duration-300 ease-in-out py-3 px-8 rounded-xl drop-shadow-2xl text-white hover:ring-4 ring-blue-400">
                        مشاهده و خرید
                            <FiShoppingCart size={20}/>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;
