import React from 'react';

const Affiliations = () => {
    const img1 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/1-90x90.png";
    const img2 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/ugc_logo-90x90.png";
    const img3 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/logo-1-copy.jpg";
    const img4 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/Kyungdom-University-80x100.gif";
    const img5 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/HEQEPLogo-90x90.png";
    const img6 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/logo_102x130-80x100.png";
    const img7 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/mozilla-wordmark.png";
    const img8 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/20042368-90x90.jpg";
    const img9 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/MicrosoftImagine.png";
    const img10 = "https://www.lus.ac.bd/wp-content/uploads/2018/11/111B90F0-E940-4BFC-A9C8-2177A71E4957-80x100.jpeg";
    const img11 = "https://www.lus.ac.bd/wp-content/uploads/2018/05/download.jpg";
    const img12 = "https://www.lus.ac.bd/wp-content/uploads/2015/06/brand-80x100.gif";
    return (
        <section className='my-5' >
            <h1 className='text-3xl text-[#455a64] my-5'>Affiliations</h1>
            <div className='bg-[#fff]'>
                <div className='grid md:grid-cols-6 gap-4 my-8 py-3 md:mx-auto'>
                    <div className=' flex justify-center content-center'>
                        <img className='w-[100px]' src={img1} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center'>
                        <img className='w-[100px]' src={img2} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center' >
                        <img className='w-[100px]' src={img3} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center'>
                        <img className='w-[100px]' src={img4} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center'>
                        <img className='w-[100px]' src={img5} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center'>
                        <img className='w-[100px]' src={img6} alt="affilations" />
                    </div>
                </div>
                <hr></hr>
                <div className='grid md:grid-cols-6 gap-4 my-8 py-3 md:mx-auto'>
                    <div className=' flex justify-center content-center'>
                        <img className='w-[100px]' src={img7} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center' >
                        <img className='w-[100px]' src={img8} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center' >
                        <img className='w-[100px]' src={img9} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center' >
                        <img className='w-[100px]' src={img10} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center' >
                        <img className='w-[100px]' src={img11} alt="affilations" />
                    </div>
                    <div className=' flex justify-center content-center' >
                        <img className='w-[100px]' src={img12} alt="affilations" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Affiliations;