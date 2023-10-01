import React from 'react'
import logo from '../../assets/images/logo.webp'
import { BsHandbag } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className='h-auto bg-[#ffa601]'>
                <div className="inner-wrap grid grid-cols-12 container mx-auto items-center">
                    <div className='col-span-2'>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-span-8">
                        <nav className="navigation">
                            <ul className='flex justify-center'>
                                <li className='px-2 py-9'><a href="" className='font-semibold'>Demos</a></li>
                                <li className='px-2 py-9'><a href="" className='font-semibold'>LearnPress</a></li>
                                <li className='px-2 py-9'><a href="" className='font-semibold'>Premium Plugins</a></li>
                                <li className='px-2 py-9'><a href="" className='font-semibold'>Eduma Mobile</a></li>
                                <li className='px-2 py-9'><a href="" className='font-semibold'>Features</a></li>
                                <li className='px-2 py-9'><a href="" className='font-semibold'>Services</a></li>
                                <li className='px-2 py-9'><a href="" className='font-semibold'>What's New</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-span-2">
                        <div className="btn-cta flex items-center justify-end">
                            <a href="">
                                <BsHandbag className='h-10 w-10 px-1 transition-all duration-300 ease-linear hover:fill-[#FF5D2A] fill-[#ffffff]' />
                            </a>
                            <a href="">
                                <p className='px-1 transition-all duration-300 ease-linear hover:text-[#FF5D2A] text-[#ffffff]'>Buy Eduma Now</p>
                            </a>
                            <div className="price px-1 rounded-full bg-[#FF5D2A] h-[2.5rem] w-[2.5rem] p-2">
                                $69
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header