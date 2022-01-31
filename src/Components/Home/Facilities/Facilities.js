import React from 'react';

const Facilities = () => {
    const facilities = [
        {
            name: "Free Wi-Fi Access", details: "Students are given access to high speed internet all over the campus through wifi.",
            icon: <i className="fas fa-wifi text-6xl text-[#c3d136] "></i>
        },
        {
            name: "Highly Equipped Labs", details: "There are labs equipped with modern instruments in every relevant department.",
            icon: <i className="fas fa-flask text-6xl text-[#c3d136]"></i>
        },
        {
            name: "Extra Curricular Activities", details: "Students can participate in various extra curricular activities through various clubs.",
            icon: <i className="fas fa-users text-6xl text-[#c3d136]"></i>
        },
        {
            name: "Rich Library", details: "The university has a fully air-conditioned and computerized rich library.",
            icon: <i className="fas fa-book text-6xl text-[#c3d136]"></i>
        },
        {
            name: "AC Class Rooms", details: "Classrooms are air conditioned, so the students can study in comfort.",
            icon: <i class="far fa-building text-6xl text-[#c3d136]"></i>
        },
        {
            name: "Up to 75% Waiver", details: "Meritorious students are rewarded with up to 75% waiver based on several criterias.",
            icon: <i className="far fa-money-bill-alt text-6xl text-[#c3d136]"></i>
        },
    ]
    return (
        <section className='my-5'>
            <h1 className='text-3xl text-[#455a64] my-5'>Campus Facilities</h1>
            <div className='grid grid-cols-3 gap-8  my-8 py-3 '>

                {
                    facilities.map(facility => {
                        return <div className='bg-[#fff] h-[200px]'>
                            <div className='flex justify-center content-center my-5'>
                                {facility.icon}
                            </div>
                            <div className='text-center'>
                                <h3 className='text-xl text-[#455a64] font-medium'>{facility.name}</h3>
                                <p className='text-base'> {facility.details}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default Facilities;