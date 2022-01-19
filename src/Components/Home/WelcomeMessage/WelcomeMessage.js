import React from 'react';

const WelcomeMessage = (props) => {
    console.log(props.details)
    const { name, position, message, ending, img } = props.details
    console.log(name);
    return (
        <>
            <div className='bg-slate-100 shadow-lg my-5 py-5 '>
                <img src={img} alt="person" className='rounded-full w-[120px] mb-5'></img>
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