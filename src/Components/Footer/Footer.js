import React from 'react';

const Footer = () => {
    return (
        <div className='w-[100%] border-2 border-solid border-[red] '>
            <div className='  h-[200px] bg-[#455a64]'>
                <div className=' w-[70%]  mx-auto '>
                    <h1 className='text-lg text-[#c3d136] '>Contact</h1>
                    <h5 className='text-base ' style={{ color: "rgba(255, 255, 255, 0.7)" }}>Leading University</h5>
                    <h5 className='text-base text-[#fff]' style={{ color: "rgba(255, 255, 255, 0.7)" }}>Ragibnagar, South Surma, Sylhet-3112</h5>
                    <h5 className='text-base text-[#fff]' style={{ color: "rgba(255, 255, 255, 0.7)" }}>Phone: 01313084499.</h5>
                    <h5 className='text-base text-[#fff]' style={{ color: "rgba(255, 255, 255, 0.7)" }}>Email: info@lus.ac.bd</h5>

                </div>
            </div>
            <div className='bg-[#3d5059] flex flex-col items-center justify-center h-[150px]'>
                <h1 className='text-lg text-[#fff]'>Copyright 2022 Leading University, all rights reserved. Developed by <span className='text-[#c3d136]'> DeviserWeb.</span></h1>
                <p className='text-base text-[#fff]'>This site is maintained by CSE & IT Department.</p>
            </div>
        </div>
    );
};

export default Footer;