"use client"
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

const HeaderSearch = () => {

    const [showSearchModal, setShowSearchModal] = useState(true)
    function handleModal() {
        setShowSearchModal(!showSearchModal)
        return showSearchModal
    }
    return (
        <>
            <div
                onClick={() => true}
                className='flex max-h-[35px]  w-fit items-center justify-between rounded-2xl bg-gray-800 lg:w-[68%]'>
                <input
                    readOnly
                    className="hidden w-[80%] bg-transparent mx-4 placeholder:text-white md:block"
                    placeholder="Tìm truyện..."
                    onClick={handleModal}

                />
                <div className=" mx-3 flex gap-2 text-base">
                    <div className="hidden rounded-lg bg-tertiary px-2 font-semibold py-1 md:block">
                        Ctrl
                    </div>
                    <div className="hidden rounded-lg bg-tertiary px-2 font-semibold py-1 md:block">
                        K
                    </div>
                </div>

                <button
                    className="h-full w-fit rounded-2xl px-4 hover:cursor-pointer hover:opacity-60"
                >
                    <IoIosSearch className="h-8 w-8" />
                </button>
            </div>

            <Transition appear show={!showSearchModal} as={Fragment}>
                <Dialog as="div" className="relative z-[999]" onClose={handleModal} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                    </Transition.Child>
                    <div className="fixed top-[10%] left-0 right-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="max-h-[70vh] w-[85%] md:w-[75%] lg:max-h-[85vh] 
                             transform overflow-hidden rounded-2xl bg-blackground p-10 text-left align-middle shadow-xl transition-all">
                                    <div className="">
                                        <Dialog.Title
                                            as="h1"
                                            className="text-3xl font-semibold leading-6"
                                        >
                                            Tìm kiếm truyện
                                        </Dialog.Title>
                                    </div>

                                    <div className="my-10 flex h-[45px] items-center rounded-xl bg-secondary py-3 text-white ">
                                        <IoIosSearch className="mx-2 h-8 w-8 md:mx-6 md:h-12 md:w-14" />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default HeaderSearch