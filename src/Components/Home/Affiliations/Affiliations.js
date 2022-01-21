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
        <section className='bg-[#fff] my-5' >
            <div className='grid grid-cols-6 gap-4 my-4 py-3'>
                <img src={img1} alt="affilations" />
                <img src={img2} alt="affilations" />
                <img src={img3} alt="affilations" />
                <img src={img4} alt="affilations" />
                <img src={img5} alt="affilations" />
                <img src={img6} alt="affilations" />
            </div>
            <hr></hr>
            <div className='grid grid-cols-6 gap-4 my-4 py-3 '>
                <img src={img7} alt="affilations" />
                <img src={img8} alt="affilations" />
                <img src={img9} alt="affilations" />
                <img src={img10} alt="affilations" />
                <img src={img11} alt="affilations" />
                <img src={img12} alt="affilations" />
            </div>

        </section>
    );
};

export default Affiliations;