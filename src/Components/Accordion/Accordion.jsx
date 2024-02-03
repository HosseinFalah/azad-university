import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { VscLock } from "react-icons/vsc";
import { FaDownload } from "react-icons/fa6";

const Accordion = () => {
    return (
        <div className="w-full">
            <div className="mx-auto w-full rounded-2xl bg-white space-y-4">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 p-4 text-left text-xl font-semibold hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-300 ease-in-out">
                                <span>What is your refund policy?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-2">
                                <div className='p-4 space-y-6 transition-all duration-300 ease-in-out rounded-xl bg-primary text-white'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-x-4'>
                                            <p className='text-xl font-semibold'>ایجاد Credentials</p>
                                            <span className='block bg-gray-400 text-white p-2 rounded-md'>ویدیو</span>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <button className='bg-red-500 text-white p-2 rounded-md flex items-center gap-x-2'>
                                                خصوصی
                                                <VscLock/>
                                            </button>
                                            <button className='bg-gray-400 p-2 rounded-md'>
                                                <FaDownload className='w-6 h-6 text-white'/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 p-4 text-left text-xl font-semibold hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-300 ease-in-out">
                                <span>Do you offer technical support?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                No.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Accordion;