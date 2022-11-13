import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    return (
        <section className='pt-[30px] pb-[25px] ml-[35px] lg:ml-[187px]'>
                <div className="text-black text-[14px] leading-[21px] font-normal breadcrumbs">
                    <ul>
                        <li>UI/UX</li>
                        <li><Link to='/'>Refer & Earn</Link></li>
                        <li><Link to='/friendsReferred'>Friends Referred</Link></li>
                    </ul>
                </div>
            </section>
    );
};

export default Breadcrumbs;