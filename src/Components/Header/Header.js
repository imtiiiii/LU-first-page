import { Container } from 'postcss';
import React from 'react';
import './Header.css'
const Header = () => {
    const FullNav =
        <>
            < div className='w-full  h-64 grid gap-2 grid-cols-8  ' >
                <div className=''>
                    <h1 className='text-xl  nav-bar  '>Home
                        <div className=' h-48 drop-down bg-red-50' >
                            drop down
                        </div>

                    </h1>

                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>About us
                        <div className=' h-48 drop-down bg-red-50' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Admission
                        <div className=' h-48 drop-down bg-red-50' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>IQAC
                        <div className=' h-48 drop-down bg-red-50' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Faculty
                        <div className=' h-48 drop-down bg-red-50' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Student
                        <div className=' h-48 drop-down bg-red-50' >
                            drop down
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Library
                        <div className=' h-48 drop-down bg-red-50' >
                            drop down
                        </div>

                    </h1>
                </div>
                <div>
                    <h1 className='text-xl  nav-bar '>Login
                        <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                            drop down
                        </div>

                    </h1>
                </div>

            </div >
        </>


    return (
        <>
            <div className='w-full flex justify-center' style={{ backgroundColor: "#455a64" }}>
                {FullNav}
            </div>
        </>
    );
};

export default Header;