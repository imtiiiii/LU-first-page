
import React, { useState } from 'react';
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import aboutUs, { admission, faculty, facultyMembers, studentsPortal } from './Navbar-drop-down-items/drop-down-items';
import logo from '../../img/lulogo.png'
import label from '../../img/lulabelwhite.png'
const Header = () => {

    const FullNav =
        <>
            <div className=' grid grid-cols-9 gap-5 nav-parent  ' style={{ backgroundColor: "", width: "100%" }} >
                <div className=''>
                    <h1 className='text-base  nav-bar  '>
                        Home
                    </h1>

                </div>
                <div>
                    <h1 className='text-base  nav-bar'>
                        About us
                        {/* <AiOutlineDown /> */}
                        <div className='drop-down  my-4' >
                            {aboutUs}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Admission
                        <div className='drop-down my-4' >
                            {admission}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>
                        IQAC
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Faculty Members
                        <div className='drop-down my-4' >
                            {facultyMembers}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Faculty
                        <div className=' drop-down my-4' >
                            {faculty}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Student Portal
                        <div className='drop-down my-4' >
                            {studentsPortal}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Library
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Login
                    </h1>
                </div>

            </div >
        </>
    const SmallNav =
        <>

            < div className='w-full   grid gap-5 sm:grid-cols-12 small-nav-parent   ' >

                <div className=''>

                    <h1 className='text-base small-nav'>
                        Home
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  small-nav  '>About us
                        <div className='  drop-down shadow-lg my-2 py-3' >
                            {aboutUs}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  small-nav '>Admission
                        <div className=' drop-down shadow-lg my-2 py-3 ' >
                            {admission}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  small-nav '>
                        IQAC
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  small-nav '>Faculty Members
                        <div className='drop-down shadow-lg my-2 py-3 ' >
                            {facultyMembers}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  small-nav '>Faculty
                        <div className=' drop-down shadow-lg my-2 py-3 ' >
                            {faculty}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base small-nav  '>Student Portal
                        <div className=' drop-down shadow-lg my-2 py-3 ' >
                            {studentsPortal}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  small-nav '>Library
                    </h1>
                </div>
                <div>
                    <h1 className='text-base small-nav '>Login
                    </h1>
                </div>

            </div >
        </>

    const [open, setOpen] = useState(false);
    // console.log(open)
    const handleOpenClose = () => {
        setOpen(!open);

    }

    return (
        <>
            <div className='w-full border-b border-slate-900 ' style={{ backgroundColor: "#455a64" }}>
                <div className='lg:w-4/5 mx-auto sm:w-full ' >
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2   grid-cols-3   '>
                        <div className="lg:flex  sm:flex-column md:flex-column  lg:col-span-2  my-8  col-span-2 ">
                            <div className=' lg:w-1/4 flex justify-center items-center'>
                                <img src={logo} alt="logo" style={{ width: "150px" }}></img>
                            </div>
                            <div className=' lg:w-full flex justify-start items-center  '>
                                <img src={label} alt="label" className=' label' ></img>
                            </div>
                        </div>
                        <div className='  hamburger lg:flex lg:justify-end  lg:items-start sm:flex sm:justify-end  sm:items-start  '>
                            <button type='button' className='lg:pt-3 lg:mt-8' style={{ fontSize: "24px" }} onClick={handleOpenClose}>
                                {
                                    open ? <MdOutlineClose /> : <GiHamburgerMenu />
                                }

                            </button>
                        </div>
                    </div >
                </div>
            </div>
            <div className='w-full  ' style={{ backgroundColor: "#455a64" }}>
                <div className='lg:w-4/5 mx-auto sm:w-full py-4 '>
                    {FullNav}
                    {
                        open && SmallNav
                    }
                </div>

            </div>





        </>
    );
};

export default Header;