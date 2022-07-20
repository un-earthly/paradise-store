import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function Navbar({ children }) {
    const menu = <>
        <li className='font-semibold'><Link href='/'>Home</Link></li>
        <li className='font-semibold'><Link href='/about'>About</Link></li>
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost rounded-btn">Products</label>
            <ul tabIndex="0" className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><Link href='/tshirts'>T Shirts</Link></li>
                <li><Link href='/mugs'>Mugs</Link></li>
                <li><Link href='/hoodies'>Hoodies</Link></li>
                <li><Link href='/stickers'>Stickers</Link></li>
            </ul>
        </div>
        <li className='font-semibold'><Link href='/contact'>Contact</Link></li>
        <li className='font-semibold'><Link href='/login'>Login</Link></li>
        <li className='font-semibold text-white'><AiOutlineShoppingCart /></li>
    </>
    return (
        <div className="drawer bg-center bg-black/60 bg-blend-multiply">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar duration-300 sticky bg-neutral -top-3 z-50" >
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"><Image src="/apple-touch-icon.png" alt="" height="50px" width="50px" /></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal uppercase">
                            {menu}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 uppercase">
                    {menu}
                    <label htmlFor="my-drawer-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                </ul>

            </div>
        </div>
    )
}
