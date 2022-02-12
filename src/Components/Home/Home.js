import React from 'react';
import Affiliations from './Affiliations/Affiliations';
import Events from './Events/Events';
import Facilities from './Facilities/Facilities';
import HeroSection from './HeroSection/HeroSection';
import LatestNews from './LatestNews/LatestNews';
import SidePart from './SidePart/SidePart';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';

const Home = () => {
    const welcomeMessage1 = {
        name: "Danobir Dr. Syed Ragib Ali",
        position: "Founder & Chairman, Board of Trustees, Leading University, Sylhet",
        message: "It is my privilege to welcome faculty members, officers and staff, students and guardians to Leading University. Since its inception, the University endeavors to impart internationally standard tertiary education for the students at an affordable cost and exerts its attempt to disseminate expertise knowledge at home and abroad relentlessly. In essence, the missions and visions of this university are attributed to the production of competent and skilled manpower so as to expedite collective development of the country and it is my chance to underscore here that Leading University makes its progress on that direction. As a matter of fact, Leading University enjoys its international reputation through various prestigious employment patterns of its graduates and vows to continue for augmentation yet further. Indeed, Leading University attempts not only to create bona fide denizens of the land but it also cherishes to embed knowledge of extra-curricular activities in the mindsets of the students and as a citadel of liberal cum ultra-modern knowledge, this university seeks to make rooms for morally enlightened education.",
        ending: {
            name: "Danobir Dr. Syed Ragib Ali"
        },
        img: "https://www.lus.ac.bd/wp-content/uploads/2020/01/chairman.jpg"
    }
    const welcomeMessage2 = {
        name: "Prof. Qazi Azizul Mowla, PhD, FIAB, AAG",
        position: "Vice-Chancellor",
        message: "I would like to warmly welcome all to Leading University. The vision of LU is to produce professionally competent and accomplished graduates who will be able to encounter any challenges at home and abroad, to contribute significantly to the human development. The missions of the LU are to provide internationally comparable education at a reasonable cost in a range of programs that are particularly relevant to societal needs, to offer opportunities and expertise to the students so that they can achieve their goals, to gain confidence of all stakeholders through Key Performance Indicators (KPI). Leading University is a higher education institute that boosts capacity in generating and sharing knowledge, skills and attitudes as recognised nationally and globally, making important contributions to development of the country.",
        ending: {
            name: "Prof. Qazi Azizul Mowla, PhD, FIAB, AAG",
            position: "Vice-Chancellor",
            institute: "Leading University, Sylhet"
        },
        img: "https://www.lus.ac.bd/wp-content/uploads/2021/03/Qazi-Azizul-Mowla.jpg"
    }
    return (
        <div className='border-2 border-[red] w-[100%]'>
            <div className='md:w-[65%] md:mx-auto  md:my-8 border-4 border-[green] sm:w-[100%] '>
                {/* page divider */}
                <div className='flex mx-4'>
                    {/* first part */}
                    <div className='basis-[70%] mr-3'>
                        <HeroSection></HeroSection>
                        <div className='flex'>
                            <WelcomeMessage details={welcomeMessage1} />
                            <div className='mx-4'></div>
                            <WelcomeMessage details={welcomeMessage2} />
                        </div>
                        <LatestNews />
                    </div>
                    <div className='basis-[30%] ml-2'>
                        <SidePart />
                    </div>
                </div>

                <div className='mx-4'>
                    <Events />
                    <Facilities />
                    <Affiliations />
                </div>
            </div>
        </div>
    );
};

export default Home;