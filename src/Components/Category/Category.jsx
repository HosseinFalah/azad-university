import { FaFigma } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Category = () => {
    return (
        <div className="xl:max-w-screen-xl m-auto px-4 xl:px-0 py-5">
            <h4 className="text-2xl md:text-4xl text-center font-bold mt-2 md:mt-5">دسته بندی های برتر</h4>
            <p className="text-sm md:text-lg text-center mt-2 md:mt-4">دوره های فراوان در دسته بندی های مختلف</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
                <div className="bg-gradient-to-tr to-blue-600 from-blue-400 p-5 space-y-4 rounded-md text-center">
                    <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center drop-shadow-md justify-center m-auto">
                        <TbBrandNextjs size={25} className="text-black"/>
                    </div>
                    <p className="text-white text-xl">فرانت اند</p>
                    <span className="text-white text-sm">6+ دوره</span>
                </div>
                <div className="bg-gradient-to-tr to-blue-600 from-blue-400 p-5 space-y-4 rounded-md text-center">
                    <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center drop-shadow-md justify-center m-auto">
                        <FaUserSecret size={25} className="text-orange-800"/>
                    </div>
                    <p className="text-white text-xl">امنیت</p>
                    <span className="text-white text-sm">5+ دوره</span>
                </div>
                <div className="bg-gradient-to-tr to-blue-600 from-blue-400 p-5 space-y-4 rounded-md text-center">
                    <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center drop-shadow-md justify-center m-auto">
                        <FaPython size={25} className="text-amber-600"/>
                    </div>
                    <p className="text-white text-xl">پایتون</p>
                    <span className="text-white text-sm">8+ دوره</span>
                </div>
                <div className="bg-gradient-to-tr to-blue-600 from-blue-400 p-5 space-y-4 rounded-md text-center">
                    <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center drop-shadow-md justify-center m-auto">
                        <FaFigma size={25} className="text-purple-800"/>
                    </div>
                    <p className="text-white text-xl">طراحی رابط کاربری</p>
                    <span className="text-white text-sm">4+ دوره</span>
                </div>
                <div className="bg-gradient-to-tr to-blue-600 from-blue-400 p-5 space-y-4 rounded-md text-center">
                    <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center drop-shadow-md justify-center m-auto">
                        <FaReact size={25} className="text-primary"/>
                    </div>
                    <p className="text-white text-xl">دوره متخصص ریکت و ریداکس</p>
                    <span className="text-white text-sm">9+ دوره</span>
                </div>
                <div className="bg-gradient-to-tr to-blue-600 from-blue-400 p-5 space-y-4 rounded-md text-center">
                    <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center drop-shadow-md justify-center m-auto">
                        <SiTypescript size={25} className="text-primary"/>
                    </div>
                    <p className="text-white text-xl">دیزاین پترن</p>
                    <span className="text-white text-sm">7+ دوره</span>
                </div>
            </div>
        </div>
    )
}

export default Category