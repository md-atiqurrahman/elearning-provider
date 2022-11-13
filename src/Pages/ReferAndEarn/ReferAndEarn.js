import React from 'react';
import { Link } from 'react-router-dom';
import './ReferAndEarn.css';
import { IoIosPeople, IoMdWallet } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";


const ReferAndEarn = () => {
    return (
        <section className='ml-[35px] lg:ml-[187px]'>
            <div className='mt-[30px]'>
                <div className='flex flex-col lg:flex lg:flex-row justify-start'>
                    <div className="card w-[358px] lg:w-[486px] h-[198] lg:h-[188px]
                   shadow-[0_3px_100px_rgba(0,0,0,0.1)]">
                        <div className="card-body  p-[20px]">
                            <div className='flex justify-between'>
                                <div>
                                    <h4 className="text-primary text-[14px] font-normal leading-[21px]">Referral Earning</h4>
                                    <h1 className='text-black font-medium text-[32px] leading-[48px]'>₹ 2,500</h1>
                                </div>
                                <div>
                                    <h4 className="text-primary text-[14px] font-normal leading-[21px]">Total Referrals</h4>
                                    <h1 className='text-black font-medium text-[32px] leading-[48px]'>7</h1>
                                </div>
                                <div>
                                    <h4 className="text-primary text-[14px] font-normal leading-[21px]">Wallet Balance</h4>
                                    <h1 className='text-black font-medium text-[32px] leading-[48px]'>₹ 500</h1>
                                </div>
                            </div>
                            <div className="flex justify-center mt-[21px]">
                                <button className="bg-primary w-[180px] h-[40px] px-[16px] py-[8px] rounded-[20px] text-white text-[16px] leading-[24px] font-medium ">Withdraw Balance</button>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[0] lg:ml-[93px] text-primary'>
                        <h1 className='text-[24px] leading-[36px] font-semibold 
                        mb-[9px] mt-[30px] lg:mt-0'>Your Referral Code</h1>
                        <div className='code-box flex justify-center items-center w-[357px] h-[60px] text-center'>
                            <h2 className='text-[20px] leading-[30px] font-medium tracking-[1.5em] text-center ml-[31px]'>EDCH54</h2>
                        </div>
                    </div>
                </div>
                <div className='mt-[40px]'>
                    <h1 className='text-primary text-[24px] font-semibold 
                    leading-[36px] mb-[22px]'>How does it work?</h1>
                    <div className='flex flex-col lg:flex lg:flex-row justify-start items-start gap-[38px] 
                    mb-[63px]'>
                        <div>
                            <div className='flex items-start gap-[20px] mb-[37px]'>
                                <div className='flex justify-center items-center bg-[#d9d9d940] w-[65px] h-[65px] 
                        rounded-[50%]'>
                                    <span className='text-[#FF864C] text-[32px] leading-[16px]'><IoIosPeople /></span>
                                </div>
                                <div className='w-[274px]'>
                                    <h5 className='text-black text-[16px] leading-[24px] font-medium'>Invite your Friends</h5>
                                    <p className='text-secondary text-[16px] leading-[24px] font-normal'>Share the link tutedude.com with your friends</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[20px] mb-[37px]'>
                                <div className='flex justify-center items-center bg-[#d9d9d940] w-[65px] h-[65px] 
                        rounded-[50%]'>
                                    <span className='text-[#FF864C] text-[32px] leading-[16px]'><FaRupeeSign /></span>
                                </div>
                                <div className='w-[274px]'>
                                    <h5 className='text-black text-[16px] leading-[24px] font-medium'>You get ₹ 200 as referral money</h5>
                                    <p className='text-secondary text-[16px] leading-[24px] font-normal'>On total purchase the friend makes, into your wallet</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[20px]'>
                                <div className='flex justify-center items-center bg-[#d9d9d940] w-[65px] h-[65px] 
                        rounded-[50%]'>
                                    <span className='text-[#FF864C] text-[32px] leading-[16px]'><IoMdWallet /></span>
                                </div>
                                <div className='w-[274px]'>
                                    <h5 className='text-black text-[16px] leading-[24px] font-medium'>Transfer money from wallet</h5>
                                    <p className='text-secondary text-[16px] leading-[24px] font-normal'>When the wallet balance reaches
                                        ₹200 or more, you can withdraw it</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-start gap-[20px] mb-[37px]'>
                                <div className='flex justify-center items-center bg-[#d9d9d940] w-[65px] h-[65px] 
                        rounded-[50%]'>
                                    <span className='text-[#FF864C] text-[32px] leading-[16px]'><BsFillTagFill /></span>
                                </div>
                                <div className='w-[274px]'>
                                    <h5 className='text-black text-[16px] leading-[24px] font-medium'>Friend purchases any course</h5>
                                    <p className='text-secondary text-[16px] leading-[24px] font-normal'>Using your REFERRAL CODE in the payments page</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[20px]'>
                                <div className='flex justify-center items-center bg-[#d9d9d940] w-[65px] h-[65px] 
                        rounded-[50%]'>
                                    <span className='text-[#FF864C] text-[32px] leading-[16px]'><TbDiscount2 /></span>
                                </div>
                                <div className='w-[274px]'>
                                    <h5 className='text-black text-[16px] leading-[24px] font-medium'>Your Friend gets ₹ 200 Off </h5>
                                    <p className='text-secondary text-[16px] leading-[24px] font-normal'>On his overall fee on successful purchase using your referral code </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/friendsReferred'>
                    <h2 className='text-primary text-[16px] font-medium 
                    leading-[24px] mb-[20px]'>Friends Who Enrolled</h2>
                </Link>
                <h2 className='text-primary text-[16px] font-medium 
                    leading-[24px] mb-[80px]'>Terms & Conditions</h2>
            </div>
        </section>
    );
};

export default ReferAndEarn;