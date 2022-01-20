import React from 'react';

const News = (props) => {
    const { title, details, thumbnail } = props.news;
    return (
        <>
            <section className='py-4 my-8'>
                <h1>Latest news</h1>
                <div className='flex'>
                    <div className='basis-1/4'>
                        <img src={thumbnail} alt="thumbnail" />
                    </div>
                    <div className='3/4 py-3'>
                        <h3>{title}</h3>
                        <p>{details}</p>

                    </div>
                </div>
            </section>
        </>
    );
};

export default News;