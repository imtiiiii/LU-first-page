import React from 'react';
import circular from '../../../img/Circular-page-001.jpg'
const SidePart = () => {
    const deperments = [
        " Department of Business Administration",
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
            <div className='bg-[#fff] my-7 '>
                <h3 className='text-2xl text-[#c3d136] mb-4'>Forms and Downloads</h3>
                <p className='text-base font-medium'>Click here</p>
            </div>
            <div className='bg-[#fff] my-7'>
                <h3 className='text-2xl text-[#c3d136] mb-4'>Contact</h3>
                <p className='text-base font-medium'>Click here</p>
            </div>
            <div className='bg-[#fff] my-7'>
                <h3 className='text-2xl text-[#c3d136] mb-4'>Forms and Downloads</h3>
                <p className='text-base font-medium'>Click here</p>
            </div>
            <div className='bg-[#fff] '>
                <h1 className='text-2xl text-[#c3d136] mb-4'>Notice Board</h1>
                <div className='flex '>
                    <div><h6>19 <br /> Jan</h6></div>
                    <div><p>Notice for Re-registration for Vac Certificate</p></div>
                </div>
                <div className='flex bg-[#fff]'>
                    <div><h6>13 <br /> Jan</h6></div>
                    <div><p>Notice </p></div>
                </div>
                <div className='flex bg-[#fff]'>
                    <div><h6>13 <br /> Jan</h6></div>
                    <div><p>Notice</p></div>
                </div>
                <div className='flex bg-[#fff]'>
                    <div><h6>9 <br /> Jan</h6></div>
                    <div><p>Regarding Final Make-Up Exam of Summer-2021</p></div>
                </div>
            </div>
            <div>
                <h4>Instagrram</h4>
                {/* logo here */}
                <p>Leading University, Sylhet</p>
            </div>
            <div>
                {/* department will be placed here */}
            </div>
        </>
    );
};

export default SidePart;