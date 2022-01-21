import React from 'react';

const Events = () => {
    const events = [
        {
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2018/12/6162897A-CAC5-41DC-8F3E-3C97619B9AFC-735x460.jpeg",
            date: "10th December 2018",
            name: "IDEA HACK-2018"

        },
        {
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2018/09/42304096_1495631333901104_5288639586593931264_n-735x460.jpg",
            date: "14th October 2018",
            name: "Basic IoT workshop"

        },
        {
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2018/09/LU-011-735x460.jpg",
            date: "29th September 2018",
            name: "Seminar on Networking Systems by IEEE"

        },
    ]
    return (
        <>

            <section className='grid grid-cols-3 gap-8'>
                {
                    events.map(event => {
                        return <>
                            <div>
                                <div>
                                    <img src={event.thumbnail} alt='pic' className='w-[100%]'></img>
                                </div>
                                <div>
                                    <div>
                                        {event.date}
                                    </div>
                                    <div>
                                        <h4>{event.name}</h4>
                                    </div>
                                </div>
                            </div>


                        </>
                    })
                }
            </section>


        </>
    );
};

export default Events;