import React from 'react';

const Facilities = () => {
    const facilities = [
        {
            name: "Free Wi-Fi Access", details: "Students are given access to high speed internet all over the campus through wifi."
        },
        {
            name: "Highly Equipped Labs", details: "There are labs equipped with modern instruments in every relevant department."
        },
        {
            name: "Extra Curricular Activities", details: "Students can participate in various extra curricular activities through various clubs."
        },
        {
            name: "Rich Library", details: "The university has a fully air-conditioned and computerized rich library."
        },
        {
            name: "AC Class Rooms", details: "Classrooms are air conditioned, so the students can study in comfort."
        },
        {
            name: "Up to 75% Waiver", details: "Meritorious students are rewarded with up to 75% waiver based on several criterias."
        },
    ]
    return (
        <section className='grid grid-cols-3 gap-4  my-8 py-3 '>
            {
                facilities.map(facility => {
                    return <div className='bg-[#fff] h-[100px]'>
                        <h3>{facility.name}</h3>
                        <p>{facility.details}</p>
                    </div>
                })
            }
        </section>
    );
};

export default Facilities;