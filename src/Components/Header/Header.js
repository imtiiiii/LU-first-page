
import React, { useState } from 'react';
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md';
import aboutUs, { admission, faculty, facultyMembers, studentsPortal } from './Navbar-drop-down-items/drop-down-items';
const Header = () => {

    const FullNav =
        <>
            <div className=' grid grid-cols-9 gap-10 nav-parent' style={{ backgroundColor: "#455a64", width: "100%" }} >
                <div className=''>
                    <h1 className='text-base  nav-bar  '>
                        Home
                    </h1>

                </div>
                <div>
                    <h1 className='text-base  nav-bar '>
                        About us
                        <div className=' h-48 drop-down  w-full' >
                            {aboutUs}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Admission
                        <div className=' h-48 drop-down ' >
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
                        <div className=' h-48 drop-down ' >
                            {facultyMembers}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Faculty
                        <div className=' h-48 drop-down ' >
                            {faculty}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  nav-bar '>Student Portal
                        <div className=' h-48 drop-down ' >
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
                        <div className=' h-48 drop-down ' >
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
                        <div className=' h-48 drop-down ' >
                            {facultyMembers}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base  small-nav '>Faculty
                        <div className=' h-48 drop-down ' >
                            {faculty}
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-base small-nav  '>Student Portal
                        <div className=' h-48 drop-down ' >
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
            <div className='my-5 hamburger'>
                <button type='button' style={{ fontSize: "20px" }} onClick={handleOpenClose}>
                    {
                        open ? <MdOutlineClose /> : <GiHamburgerMenu />
                    }

                </button>
            </div>
            <div className='w-full  border-2' >
                {FullNav}
                {
                    open && SmallNav
                }
            </div>

        </>
    );
};

export default Header;