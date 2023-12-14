import { Link } from 'react-router-dom'

import { FaRegComments } from 'react-icons/fa6'
import { IoMdArrowDropleftCircle } from 'react-icons/io'

const Article = () => {
    return (
        <div className='w-full h-full ring-1 ring-zinc-300 rounded-lg overflow-hidden'>
            <div className='w-full relative'>
                <div className='block overflow-hidden h-40'>
                    <img className='block w-full h-full object-cover' src="/image/article.jpg" alt="" />
                </div>
                <Link to={`/`} className='w-10 h-10 overflow-hidden rounded-full absolute left-4 top-32 transition-transform duration-200 ease-in-out hover:scale-125'>
                    <img src="/image/profile.jpg" className='block w-full h-full object-cover' alt="" />
                </Link>
            </div>
            <div className='p-4 space-y-3'>
                <Link to={`/`} className='block text-base font-semibold text-zinc-600 transition-colors duration-200 ease-in-out hover:text-green-700'>برای جذب فالوور بیشتر، پیج‌تان را بهینه کنید</Link>
                <p className='text-sm font-light leading-7'>
                    چطور مشتری پیدا کنم؟ از کجا میشه مشتری پیدا کرد؟ چرا هر کاری می‌کنم مشتری پیدا نمی‌شه؟ اگر همین الان یک کسب و کار دارید  .
                </p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2 font-light text-sm text-zinc-600'>
                        <FaRegComments className='text-gray-600' size={18}/>
                        فاقد دیدگاه
                    </div>
                    <div className='flex items-center gap-x-1.5 text-green-700'>
                        مشاهده مطلب
                        <IoMdArrowDropleftCircle/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article