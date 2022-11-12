import React from 'react';
import { Link } from 'react-router-dom';

const ReferAndEarn = () => {
    return (
        <main className='ml-[187px]'>
            <div className='pt-[30px] pb-[25px]'>
                <div className="text-black text-[14px] leading-[21px] font-normal breadcrumbs">
                    <ul>
                        <li>UI/UX</li>
                        <li><Link to='/'>Refer & Earn</Link></li>
                    </ul>
                </div>
            </div>
            <section className='mt-[30px]'>
                <div className="card w-[486px] h-[188px]
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
            </section>
        </main>
    );
};

export default ReferAndEarn;