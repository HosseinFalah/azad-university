import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineLogin } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    return (
        <header className="bg-white">
            <nav className="">
                <div className="p-4 xl:px-0 xl:max-w-screen-xl m-auto flex items-center justify-between">
                    <div className="flex items-center gap-x-8">
                        <img className="max-w-[3.5rem] object-cover" src="/image/logo.png" alt="لوگو" />
                        <div className="hidden md:block relative w-full">
                            <input 
                                type="text" 
                                className="w-80 p-4 bg-[#f5f5f5] text-[#696969] transition-all duration-200 ease-in-out rounded-xl focus:border focus:border-primary outline-none" placeholder="جستجو..."/>
                            <CiSearch className="absolute top-4 left-2" size={25} />
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-x-6">
                        <button className="bg-primary rounded-full p-4 drop-shadow-lg">
                            <MdLightMode className="text-white" size={25}/>
                        </button>
                        <button className="relative bg-primary p-4 rounded-lg drop-shadow-lg">
                            <SlBasketLoaded className="text-white" size={25}/>
                            <span className="absolute -top-3.5 -right-3 bg-red-600 text-white flex items-center justify-center w-7 h-7 rounded-full">0</span>
                        </button>
                        <button className="bg-primary text-white p-4 flex items-center gap-x-3 rounded-lg drop-shadow-lg font-semibold">
                            <MdOutlineLogin className="text-white" size={25}/>
                            ورود و ثبت نام
                        </button>
                    </div>
                    <button 
                        className="lg:hidden bg-primary p-4 rounded-lg drop-shadow-lg text-white" 
                        onClick={() => setIsShowMenu(preve => !preve)}>
                        {isShowMenu === false ? <MdMenu size={25}/> : <CgMenuLeft size={25}/>}
                    </button>
                </div>
            </nav>
            <div className="hidden md:block bg-primary p-4">
                <div className="max-w-screen-xl m-auto flex items-center justify-between">
                    <ul className="flex items-center gap-x-4">
                        <li className="text-white font-medium cursor-pointer">خانه</li>
                        <li className="text-white font-medium cursor-pointer">دوره ها</li>
                        <li className="text-white font-medium cursor-pointer">
                            <Link to={`/teacher`}>
                                مدرسین
                            </Link>
                        </li>
                        <li className="text-white font-medium cursor-pointer">درباره انجمن</li>
                        <li className="text-white font-medium cursor-pointer">ارتباط با انجمن</li>
                    </ul>
                    <div className="flex items-center gap-x-4">
                        <div>
                            <p className="text-white">اتباط سریع با انجمن</p>
                            <span className="text-white">03153456789</span>
                        </div>
                        <div className="bg-white rounded-full p-4 drop-shadow-lg">
                            <FaHeadset size={25}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar