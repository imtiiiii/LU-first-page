import React from 'react';

const WelcomeMessage = (props) => {

    const { name, position, message, ending, img } = props.details

    return (
        <>
            <div className='bg-[#fff] shadow-lg basis-[50%] p-4 md:my-0 my-7'>
                <div className=' flex justify-center items-center'>
                    <img src={img} alt="person" className='rounded-full w-[120px] mt-[-40px] mb-5 '></img>
                </div>
                <div className='text-[#c3d136]'>
                    <h1 className='text-xl text-center'>{name}</h1>
                    <h3 className='text-lg text-center'>{position}</h3>
                    <h6 className='text-medium  text-center mb-4'>Welcome Message</h6>
                </div>
                <p className='mb-3'>{message}</p>
                <div className='text-center'>
                    <h4>{ending?.name}</h4>
                    <h5>{ending?.position}</h5>
                    <h6>{ending?.institute}</h6>
                </div>

            </div>

        </>
    );
};

export default WelcomeMessage;