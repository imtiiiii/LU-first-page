import React from 'react';
import circular from '../../../img/Circular-page-001.jpg'
const SidePart = () => {
    return (
        <>
            <div className='bg-[#c3d136]'>
                <h2>Admission Going On <br />Spring-22</h2>
            </div>
            <div>
                <img src={circular} alt="circular" />
            </div>
            <div>
                <h3>Forms and Downloads</h3>
                <p>Click here</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Click here</p>
            </div>
            <div>
                <h3>Forms and Downloads</h3>
                <p>Academic Calendar</p>
            </div>
            <div>
                <h1>Notice Board</h1>
                <div className='flex'>
                    <div><h6>19 <br /> Jan</h6></div>
                    <div><p>Notice for Re-registration for Vac Certificate</p></div>
                </div>
                <div className='flex'>
                    <div><h6>13 <br /> Jan</h6></div>
                    <div><p>Notice </p></div>
                </div>
                <div className='flex'>
                    <div><h6>13 <br /> Jan</h6></div>
                    <div><p>Notice</p></div>
                </div>
                <div className='flex'>
                    <div><h6>9 <br /> Jan</h6></div>
                    <div><p>Regarding Final Make-Up Exam of Summer-2021</p></div>
                </div>
            </div>
            <div>
                <h4>Instagrram</h4>
                {/* logo here */}
                <p>Leading University, Sylhet</p>
            </div>
        </>
    );
};

export default SidePart;