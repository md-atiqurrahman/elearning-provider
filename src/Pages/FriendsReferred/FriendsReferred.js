import React from 'react';
import ReferredCard from '../ReferredCard/ReferredCard';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FriendsReferred = () => {
    return (
        <section className='mx-[35px] lg:mx-[187px] '>
            <Link to='/'>
                <div className='flex flex-start lg:hidden text-primary mt-0'>
                    <span className='mr-[10px] mt-[4px]'><AiOutlineArrowLeft size='15px' /></span>
                    <h1 className='text-[16px] leading-[24px] font-medium mb-[20px]'>go back</h1>
                </div>
            </Link>
            <div className='flex justify-between items-start mb-[56px]'>
                <div className='-mt-[5px]'>
                    <h1 className='text-primary text-[16px] leading-[24px] font-normal 
                        mb-[6px]'>Your Referral Code</h1>
                    <div className='flex justify-center items-center w-[152px] 
                h-[50px]  border border-[#E5E5E5] rounded-[10px]'>
                        <h2 className='text-black text-[16px] leading-[24px] font-medium tracking-[.7em] text-center ml-[12px]'>EDCH54</h2>
                    </div>
                </div>
                <div className="card w-[145px] h-[85px]
                   shadow-[0_3px_100px_rgba(0,0,0,0.1)]">
                    <div className="card-body p-[20px]">
                        <div>
                            <h4 className="text-primary text-[14px] font-normal leading-[21px]">Wallet Balance</h4>
                            <h1 className='text-black font-medium text-[16px] leading-[24px]'>₹ 500</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-primary text-[20px] leading-[30px] font-semibold mb-[20px]'>Friends who enrolled<span className='text-[#626262]'>(3)</span></h1>
                <div className='flex flex-col lg:flex lg:flex-row gap-[20px] mb-[60px]'>
                    <ReferredCard name='Dhiraj Saxsena' date='14 Sep, 2022' courses='6' amount='185' />
                    <ReferredCard name='Subhash Mishra' date='15 Sep, 2022' courses='23' amount='485' extra='C++' />
                    <ReferredCard name='Prafull Kumar' date='16 Sep, 2022' courses='23' amount='485' extra='C++' />
                </div>
                <h1 className='text-primary text-[16px] leading-[24px] font-medium mb-[72px]'>Terms & Conditions</h1>
            </div>
        </section>
    );
};

export default FriendsReferred;