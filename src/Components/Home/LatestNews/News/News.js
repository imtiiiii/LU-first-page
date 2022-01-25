import React from 'react';

const News = (props) => {
    const { title, details, thumbnail } = props.news;
    return (
        <>

            <div className='flex my-8'>
                <div className=' mx-5 w-[30%] '>
                    <img src={thumbnail} alt="thumbnail" className='max-w-full h-[250px]' />
                </div>
                <div className=' w-[70%] ml-3 '>
                    <h3 className='text-[#c3d136] text-lg  mb-2'>{title}</h3>
                    <p className='text-base'>{details}</p>

                </div>
            </div>
            <hr />

        </>
    );
};

export default News;