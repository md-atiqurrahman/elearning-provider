import React from 'react';
import logo from '../../../assets/images/Navbar/Tutedude.png';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <header className="navbar h-[45px] lg:h-[73.04px] px-[3px] lg:px-[74px] py-[6px]">
            <div className="navbar-start">
                <img className='w-[160px] h-[45px] lg:h-[63px]' src={logo} alt="TuteDude logo" />
            </div>
            <div className="navbar-end  lg:flex">
                <ul className="flex items-center gap-[28px] p-0 text-primary text-[18px] font-medium leading-[22.23px]">
                    <li className='opacity-[0] lg:opacity-[25%]'>My Assignment</li>
                    <li className='opacity-[0] lg:opacity-[25%]'>Chat with Mentor</li>
                    <li tabIndex={0} className='flex items-center'>
                        <span className='text-[20px] leading-[20px] -mt-[2px] mr-[6px]'><CgProfile/></span>
                            ProfileName
                            <svg className="fill-current ml-[10px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;