import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="xl:max-w-screen-xl m-auto px-4 xl:px-0 relative">
            <div className="absolute top-0 bottom-0 left-0 right-0">
                <img src="/image/login-backdrop.png" className="w-full h-full" alt="" />
            </div>
            <div className="py-16">
                <form className="max-w-xl w-full bg-white drop-shadow-2xl rounded-2xl p-6 m-auto" autoComplete="off">
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-2xl xl:text-3xl font-semibold text-zinc-800">ورود</h2>
                        <Link to={`/auth/register`} className="font-medium text-zinc-600">حساب کاربری ندارید؟ <span className="text-primary font-semibold">ثبت نام</span></Link>
                    </div>
                    <div className="flex flex-col gap-y-4 pt-5">
                        <label htmlFor="email" className="text-zinc-700 font-semibold text-lg">آدرس ایمیل:</label>
                        <input type="text" id="email" className="bg-[#F2F4F7] rounded-2xl focus:outline-none p-2.5" />
                    </div>
                    <div className="flex flex-col gap-y-4 pt-5">
                        <label htmlFor="password" className="text-zinc-700 font-semibold text-lg">کلمه عبور:</label>
                        <input type="password" id="password" className="bg-[#F2F4F7] rounded-2xl focus:outline-none p-2.5" />
                    </div>
                    <div className="grid gap-y-4 mt-10">
                        <button className="bg-primary rounded-2xl font-semibold p-2 text-white cursor-pointer">ورود</button>
                        <Link to={`/`} className="text-center text-base text-primary font-bold">فراموشی رمز عبور</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login