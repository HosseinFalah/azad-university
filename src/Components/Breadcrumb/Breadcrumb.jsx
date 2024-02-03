import { IoIosArrowBack } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const Breadcrumb = () => {
    return (
        <div className="bg-primary w-full p-4 rounded-xl mt-8 flex items-center gap-x-4">
            <div className="flex items-center gap-x-4">
                <IoHomeOutline className="w-6 h-6 text-white"/>
                <IoIosArrowBack className="w-6 h-6 text-white"/>
            </div>
            <div className="flex items-center gap-x-4">
                <span className="text-gray-100 font-medium">دوره ها</span>
                <IoIosArrowBack className="w-6 h-6 text-white"/>
            </div>
            <div>
                <span className="text-lg text-white font-semibold">دوره متخصص Nextjs</span>
            </div>
        </div>
    )
}

export default Breadcrumb