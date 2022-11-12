import React from 'react';
import logo from '../../../assets/images/Navbar/Tutedude.png';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="navbar h-[73.04px] px-[74px] py-[6px] bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img className='w-[160px] h-[63px]' src={logo} alt="TuteDude logo" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex items-center gap-[28px] p-0 text-primary text-[18px] font-medium leading-[22.23px]">
                    <li className='opacity-[25%]'>My Assignment</li>
                    <li className='opacity-[25%]'>Chat with Mentor</li>
                    <li tabIndex={0} className='flex items-center'>
                        <span className='text-[20px] leading-[20px] -mt-[2px] mr-[6px]'><CgProfile/></span>
                            ProfileName
                            <svg className="fill-current ml-[10px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;