import { Container } from 'postcss';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='w-full flex justify-center' style={{ backgroundColor: "#455a64" }}>
                <div className='w-4/5  h-64 grid gap-2 grid-cols-8  '>
                    {/* <div></div> */}
                    <div className=''>
                        <p className='text-xl  nav-bar  '>Home
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "200px" }}>
                                drop down
                            </div>

                        </p>

                    </div>
                    <div>
                        <p className='text-xl  nav-bar '>About us
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                                drop down
                            </div>

                        </p>
                    </div>
                    <div>
                        <p className='text-xl  nav-bar '>Admission
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                                drop down
                            </div>

                        </p>
                    </div>
                    <div>
                        <p className='text-xl  nav-bar '>IQAC
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                                drop down
                            </div>

                        </p>
                    </div>
                    <div>
                        <p className='text-xl  nav-bar '>Faculty
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                                drop down
                            </div>

                        </p>
                    </div>
                    <div>
                        <p className='text-xl  nav-bar '>Student
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                                drop down
                            </div>

                        </p>
                    </div>
                    <div>
                        <p className='text-xl  nav-bar '>Library
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                                drop down
                            </div>

                        </p>
                    </div>
                    <div>
                        <p className='text-xl  nav-bar '>Login
                            <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                                drop down
                            </div>

                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;