import React from 'react';
import circular from '../../../img/Circular-page-001.jpg'
import instaLogo from '../../../img/instagram.png'
const SidePart = () => {
    let flag = 0;
    const deperments = [
        "Department of Business Administration",
        "Department of CSE",
        "Department of English",
        "Department of Architecture",
        "Department of Law",
        "Department of Civil Engineering",
        "Department of EEE",
        "Department of Islamic Studies",
        "Department of Public Health",
        "Department of Tourism and Hospitality Management"
    ]
    return (
        <>
            <div className='bg-[#c3d136] mb-8 text-center py-4'>
                <h2 className='text-4xl text-[#fff]'>Admission Going On <br />Spring-22</h2>
            </div>
            <div>
                <img src={circular} alt="circular" />
            </div>
            <div className='bg-[#fff] my-7 p-4 shadow-mg'>
                <h3 className='text-2xl text-[#c3d136] mb-4'>Forms and Downloads</h3>
                <p className='text-base font-medium'>Click here</p>
            </div>
            <div className='bg-[#fff] my-7 p-4 shadow-mg'>
                <h3 className='text-2xl text-[#c3d136] mb-4'>Contact</h3>
                <p className='text-base font-medium'>Click here</p>
            </div>
            <div className='bg-[#fff] my-7 p-4 shadow-mg'>
                <h3 className='text-2xl text-[#c3d136] mb-4'>Forms and Downloads</h3>
                <p className='text-base font-medium'>Click here</p>
            </div>
            <div className='bg-[#fff] py-2 px-6 shadow-mg'>
                <h1 className='text-2xl text-[#c3d136] mb-8'>Notice Board</h1>
                <div className=' flex gap-4 mb-6'>
                    <div className=" font-bold ">
                        <h6>19 <br /> Jan</h6>
                    </div>
                    <div className='  '>
                        <h1>Notice for Re-registration for Vac Certificate</h1>
                    </div>
                </div>
                <div className='flex gap-4 mb-6'>
                    <div className=" font-bold "><h6>13 <br /> Jan</h6></div>
                    <div><p>Notice </p></div>
                </div>
                <div className='flex gap-4 mb-6'>
                    <div className=" font-bold "><h6>13 <br /> Jan</h6></div>
                    <div><p>Notice</p></div>
                </div>
                <div className='flex gap-4 mb-6'>
                    <div className=" font-bold "><h6>9 <br /> Jan</h6></div>
                    <div><p>Regarding Final Make-Up Exam of Summer-2021</p></div>
                </div>
                <div className='flex justify-end'>
                    <h1>Archive</h1>
                </div>
            </div>
            <div className='my-7 bg-[#fff] p-4'>
                <h4 className='text-[#c3d136] text-2xl'>Instagrram</h4>
                <img className='w-[100px] h-[100px] my-5' src={instaLogo} alt="logo" />
                {/* logo here */}
                <p className='font-semibold'>Leading University, Sylhet</p>
            </div>
            <div>
                {/* department will be placed here */}
                {
                    deperments.map(element => {
                        return <div
                            className={`p-4 hover:bg-[#c3d136] text-[#455a64] hover:text-[#fff] ${flag++ % 2 === 0 ? "bg-[#e3e3e3]" : "bg-[#fff]"}`}

                        >

                            <h1 className='text-xl  font-medium '> {element} </h1>
                        </div>

                    }
                    )
                }
            </div>
        </>
    );
};

export default SidePart;
// {flag++ % 2 === 0 ? "bg-[#e3e3e3]" : "bg-[#fff]"}