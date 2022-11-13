import React from 'react';

const ReferredCard = ({ name, date, courses, amount, extra }) => {
    return (
        <div className="card referred-card w-[358px] h-[228px]
                   shadow-[0_3px_100px_rgba(0,0,0,0.1)]">
            <div className="card-body text-white p-[20px]">
                <div className='flex justify-between items-center'>
                    <h3 className="text-[16px] font-bold leading-[24px]">{name}</h3>
                    <h5 className=' font-normal text-[14px] leading-[21px]'>{date}</h5>
                </div>
                <div>
                    <h4 className='font-medium text-[14px] leading-[21px] mb-[14px]'>
                        Courses Enrolled({courses})
                    </h4>
                    <div className='mb-[19px]'>
                        <div className='mb-[15px]'>
                            <span className='border border-white rounded-[20px] px-[10px] py-[4px] font-normal text-[14px] leading-[21px] mr-[11px]'>UI/UX</span>
                            <span className='border border-white rounded-[20px] px-[10px] py-[4px] font-normal text-[14px] leading-[21px] mr-[11px]'>Photoshop</span>
                            <span className='border border-white rounded-[20px] px-[10px] py-[4px] font-normal text-[14px] leading-[21px]'>Illustrator</span>
                        </div>
                        <div>
                            <span className='border border-white rounded-[20px] px-[10px] py-[4px] font-normal text-[14px] leading-[21px]
                                        mr-[11px]'>Python</span>
                            <span className='border border-white rounded-[20px] px-[10px] py-[4px] font-normal text-[14px] leading-[21px] 
                                        mr-[11px]'>MERN</span>
                            <span className='border border-white rounded-[20px] px-[10px] py-[4px] font-normal text-[14px] leading-[21px]'>Java</span>
                            {
                                extra
                                    ?
                                    <span className='border border-white rounded-[20px] px-[10px] py-[4px] font-normal text-[14px] leading-[21px] ml-[11px]'>{extra}</span>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-[16px] font-normal leading-[24px]">Referral Amount<span className='text-[24px] font-semibold leading-[36px] ml-[10px]'>₹{amount}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default ReferredCard;