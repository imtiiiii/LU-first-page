import { Container } from 'postcss';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='w-full bg-sky-500 h-64 grid gap-2 grid-cols-8'>
                <div className=''>
                    <p className='text-xl  nav-bar '>Home
                        <div className=' h-48 drop-down bg-red-50' style={{ width: "300px" }}>
                            heklehrl
                        </div>

                    </p>

                </div>
                <div>
                    <p className='text-xl'>About us</p>
                </div>
                <div>
                    <p className='text-xl'>Admission</p>
                </div>
                <div>
                    <p className="text-xl">IQAC</p>
                </div>
                <div>
                    <p className='text-xl'>Facaulty</p>
                </div>
                <div>
                    <p className='text-xl'>Student</p>
                </div>
                <div>
                    <p className='text-xl' >Library</p>
                </div>
                <div>
                    <p className='text-xl'>Login</p>
                </div>
                <div></div>
            </div>
        </>
    );
};

export default Header;