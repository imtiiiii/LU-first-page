import React from 'react';

const News = (props) => {
    const { title, details, thumbnail } = props.news;
    return (
        <>

            <div className='flex flex-col my-8 md:flex md:flex-row'>
                <div className=' md:mx-5 md:my-0 my-4 md:w-[30%]  md:block flex items-center justify-center '>
                    <img src={thumbnail} alt="thumbnail" className='max-w-full h-[200px]' />
                </div>
                <div className=' md:w-[60%] w-[100%] ml-3 text-center md:text-left'>
                    <h3 className='text-[#c3d136] text-lg  mb-2'>{title}</h3>
                    <p className='text-base'>{details}</p>

                </div>
            </div>
            <hr />

        </>
    );
};

export default News;