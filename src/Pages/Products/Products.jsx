import { CiSearch } from "react-icons/ci";
import { BsSortDown } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { Card } from "../../Common";

const Products = () => {
    return (
        <main className="xl:max-w-screen-xl m-auto px-4 xl:px-0">
            <div className="grid grid-cols-12 gap-x-4 pt-8">
                <aside className="col-span-12 md:col-span-4 lg:col-span-3">
                    <div className="relative bg-white drop-shadow-2xl rounded-xl p-4">
                        <input 
                            type="text"
                            className="outline-none w-full"
                            placeholder="دوره مورد نظر خود را جستجو کنید" 
                        />

                        <CiSearch size={22} className="absolute top-4 left-3"/>
                    </div>

                    <div className="mt-8 bg-white drop-shadow-2xl rounded-xl p-4">
                        <h3 className="mb-6 font-bold text-xl">دسته بندی دوره ها</h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="front" />
                                    <label htmlFor="front" className="font-medium">فرانت اند</label>
                                </div>
                                <div>
                                    <span>9</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="security" />
                                    <label htmlFor="security" className="font-medium">امنیت</label>
                                </div>
                                <div>
                                    <span>7</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="python" />
                                    <label htmlFor="python" className="font-medium">پایتون</label>
                                </div>
                                <div>
                                    <span>10</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="uiux" />
                                    <label htmlFor="uiux" className="font-medium">طراحی رابط کاربری</label>
                                </div>
                                <div>
                                    <span>23</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="design-pattern" />
                                    <label htmlFor="design-pattern" className="font-medium">دیزاین پترن</label>
                                </div>
                                <div>
                                    <span>19</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="backend" />
                                    <label htmlFor="backend" className="font-medium">بک اند</label>
                                </div>
                                <div>
                                    <span>12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-white drop-shadow-2xl rounded-xl p-4">
                        <div className="flex items-center gap-x-2 mb-4">
                            <BsSortDown size={22}/>
                            <span className="font-bold text-xl">مرتب سازی دوره ها</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center me-4">
                                <input id="all-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-700"/>
                                <label htmlFor="all-radio" className="ms-2 font-medium text-gray-900">همه دوره ها</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="Inexpensive-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-700"/>
                                <label htmlFor="Inexpensive-radio" className="ms-2 font-medium text-gray-900">ارزان ترین</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="expensive-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-700"/>
                                <label htmlFor="expensive-radio" className="ms-2 font-medium text-gray-900">گران ترین</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="free-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-700"/>
                                <label htmlFor="free-radio" className="ms-2 font-medium text-gray-900">رایگان</label>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="col-span-12 md:col-span-8 lg:col-span-9">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4">
                        {[0, 1, 2, 3, 4, 5].map(product => (
                            <Card key={crypto.randomUUID()}/>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="flex items-center gap-x-2 bg-primary text-white p-4 rounded-xl transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                            مشاهده بیشتر
                            <TiArrowSortedDown size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products