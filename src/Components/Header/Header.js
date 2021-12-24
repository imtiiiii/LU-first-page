import { Container } from 'postcss';
import React from 'react';
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
const Header = () => {
    const FullNav =
        <>
            <div className=' grid grid-cols-8 gap-5 nav-parent' style={{ backgroundColor: "#455a64", width: "100%" }} >
                <div className=''>
                    <h1 className='text-xl  nav-bar  '>Home
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>

                    </h1>

                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>About us
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Admission
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>IQAC
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Faculty
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Student
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Library
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>

                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Login
                        <div className=' h-48 drop-down ' style={{ width: "300px" }}>
                            drop down
                        </div>

                    </h1>
                </div>

            </div >
        </>
    const SmallNav =
        <>

            < div className='w-full   grid gap-5 sm:grid-cols-12 small-nav-parent   ' >

                <div className=''>

                    <h1 className='text-xl small-nav'>Home
                        <div className=' h-48 drop-down drop-shadow-md' >
                            drop down
                        </div>

                    </h1>

                </div>
                <div>
                    <h1 className='text-xl  small-nav  '>About us
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  small-nav '>Admission
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  small-nav '>IQAC
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  small-nav '>Faculty
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl small-nav  '>Student
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  small-nav '>Library
                        <div className=' h-48 drop-down ' >
                            drop down
                        </div>

                    </h1>
                </div>
                <div>
                    <h1 className='text-xl small-nav '>Login
                        <div className=' h-48 drop-down ' style={{ width: "300px" }}>
                            drop down
                        </div>

                    </h1>
                </div>

            </div >
        </>


    return (
        <>
            <div className='w-full border-2 flex justify-center' >
                {FullNav}
                {SmallNav}

            </div>
        </>
    );
};

export default Header;