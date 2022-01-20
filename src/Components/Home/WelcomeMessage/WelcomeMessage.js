import React from 'react';

const WelcomeMessage = (props) => {

    const { name, position, message, ending, img } = props.details

    return (
        <>
            <div className='bg-[#fff] shadow-lg m-5 p-5 '>
                <div className=' flex justify-center items-center'>
                    <img src={img} alt="person" className='rounded-full w-[120px] mt-[-40px] mb-5 '></img>
                </div>
                <h1>{name}</h1>
                <h3>{position}</h3>
                <h6>Welcome Message</h6>
                <p>{message}</p>
                <h4>{ending?.name}</h4>
                <h5>{ending?.position}</h5>
                <h6>{ending?.institute}</h6>

            </div>

        </>
    );
};

export default WelcomeMessage;