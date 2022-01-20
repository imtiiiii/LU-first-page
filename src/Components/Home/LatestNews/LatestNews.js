import React from 'react';
import News from './News/News';

const LatestNews = () => {
    const allNews = [
        {
            title: "লিডিং ইউনিভার্সিটির ক‍্যাম্পাসে ফল সেমিস্টার ফাইনাল পরীক্ষা শুরু",
            details: "সরকারের নির্দেশনা অনুযায়ী সকল স্বাস্থ‍্যবিধি মেনে লিডিং ইউনিভার্সিটির ফল ২০২১ সেমিস্টার ফাইনাল পরীক্ষা শুরু হয়েছে বিশ্ববিদ্যালয়ের ক‍্যাম্পাসে।  রোববার (১৬ জানুয়ারি ২০২২) সকাল ১১টায় পরীক্ষা হল পরিদর্শন করেছেন লিডিং ইউনিভার্সিটির উপাচার্য প্রফেসর ড. কাজী আজিজুল মাওলা। এসময় ব‍্যবসায় প্রশাসন অনুষদের ডিন প্রফেসর ড. বশির আহমেদ ভুঁইয়া, কলা ও আধুনিক ভাষা অনুষদের ডিন ড. মো. রেজাউল করিম […]",
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2022/01/LU-Exam-Hall-250x250.jpg"
        },
        {
            title: "বঙ্গবন্ধুর স্বদেশ প্রত‍্যাবর্তন দিবসে তাঁর প্রতি বিনম্র শ্রদ্ধা জানিয়েছে লিডিং ইউনিভার্সিটি",
            details: "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমানের স্বদেশ প্রত‍্যাবর্তন দিবসে বঙ্গবন্ধুর প্রতি বিনম্র শ্রদ্ধা জানিয়েছে সিলেটের প্রথম বেসরকারি বিশ্ববিদ্যালয় লিডিং ইউনিভার্সিটি। এক বার্তায় লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও বোর্ড অব ট্রাস্টিজের চেয়ারম্যান দানবীর ড. সৈয়দ রাগীব আলী এবং বিশ্ববিদ্যালয়ের উপাচার্য প্রফেসর ড. কাজী আজিজুল মাওলা বঙ্গবন্ধুর স্বদেশ প্রত‍্যাবর্তন দিবসে তাঁর প্রতি এ শ্রদ্ধা জ্ঞাপন করেন। ড. রাগীব […]",
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2022/01/Bangabandhur-Shadesh-Prottabarthon-250x250.jpg"
        },
        {
            title: "লিডিং ইউনিভার্সিটিতে ফটোগ্রাফি প্রদর্শনী অনুষ্ঠিত",
            details: "লিডিং ইউনিভার্সিটিতে ফটোগ্রাফি প্রদর্শনী অনুষ্ঠিত হয়েছে। মঙ্গলবার (১১ জানুয়ারি  ২০২২) লিডিং ইউনিভার্সিটির ফটোগ্রাফিক সোসাইটির  উদ‍্যোগে বিশ্ববিদ্যালয়ের রাগীব আলী ভবন প্রাঙ্গণে  ‘Intra University Photography Exhibition 2022’ অনুষ্ঠিত হয়েছে। দুইটি ক‍্যাটাগরিতে শতাধিক ফটোগ্রাফির মধ‍্যে বাছাইকৃত ৬৮টি ফটো এ প্রদর্শনীতে জায়গা করে নেয়। প্রদর্শনীটি বিকাল ৩টায় ঘুরে দেখেন বিশ্ববিদ্যালয়ের উপাচার্য প্রফেসর ড. কাজী আজিজুল মাওলা। এসময় উপস্থিত ছিলেন […]",
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2022/01/LU-Photography-Exhibition-250x250.jpg"
        },
        {
            title: "আমেরিকার কার্নেগি মেলন ইউনিভার্সিটির সাথে লিডিং ইউনিভার্সিটির উপাচার্যের আলোচনা",
            details: "আমেরিকার  কার্নেগি মেলন ইউনিভার্সিটির সাথে পারস্পরিক সহযোগিতার সম্ভাব‍্য ক্ষেত্র নিয়ে আলোচনা করেছেন লিডিং ইউনিভার্সিটির উপাচার্য প্রফেসর ড. কাজী আজিজুল মাওলা। রোববার (২৬ ডিসেম্বর ২০২১) কার্নেগি মেলন ইউনিভার্সিটি, পেনসিলভানিয়া, ইউএসএ এর  ইলেকট্রিক্যাল এন্ড কম্পিউটিং ইঞ্জিনিয়ারিং এর প্রফেসর ড. এ. চমনজার এর আমন্ত্রণে সেখানে এসব বিষয়ে ফলপ্রসূ আলোচনা করেন তিনি।  প্রফেসর ড. এ. চমনজার লিডিং ইউনিভার্সিটি সম্পর্কে […]",
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2021/12/IMG_20211227_050940-250x250.jpg"
        },
        {
            title: "লিডিং ইউনিভার্সিটির ইইই বিভাগের ইন্ডাস্ট্রিয়াল অটোমেশন বিষয়ক কর্মশালা",
            details: "সিলেটের প্রথম বেসরকারি বিশ্ববিদ্যালয় লিডিং ইউনিভার্সিটির ইলেকট্রিক‍্যাল এন্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (ইইই) বিভাগের উদ‍্যোগে এবং আইইইএলইউ স্টুডেন্ট ব্রাঞ্চ ও ইলেকট্রনিক ক্লাবের সহযোগিতায় দুইদিনব‍্যাপী “Hands-on Workshop on Industrial Automation using PLC & SCADA” শীর্ষক কর্মশালা অনুষ্ঠিত হয়েছে। প্রথমদিন ২২ ডিসেম্বর কর্মশালাটি তিনটি সেশনে পরিচালনা করা হয়। প্রথম সেশনে ইন্ডাস্ট্রিয়াল অটোমেশন, ৪র্থ শিল্প বিপ্লব, অটোমেশনসহ পিএলসিএর গুরুত্ব ও তাত্ত্বিক বিষয়গুলাকে মূখ্য বিষয়বস্তু রেখে ওয়ার্কশপের সেশনটি সম্পাদন করেন ইইই বিভাগের বিভাগীয় প্রধান মো.কামরুজ্জামান। […]",
            thumbnail: "https://www.lus.ac.bd/wp-content/uploads/2021/12/EEE-250x250.jpg"
        },

    ];

    return (
        <>
            {
                allNews.map(news => <News news={news} key={news.title} ></News>)
            }
        </>
    );
};

export default LatestNews;