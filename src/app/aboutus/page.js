// "use client";


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// export default function AboutUsPage() {
//     const clientLogos = [
//         "/img/zahara.png",
//         "/img/RacknnSell.png",
//         "/img/The-Mobile-Indian.png",
//         "/img/Eureka-book-Store.png",
//         "/img/Oacasia.png",
//         "/img/Dotori.png",
//         "img/Budha-Tours.png",
//         "img/FNB.png",
//         "img/ICN.png",
//         "img/IOaAA.png",
//         "img/Retail-4-growth.png",
//         "img/SHNN.png",
//         "img/Arabian-night.png",
//         "img/tag-resort.png",
//         "img/In-Store_Asia.png",
//         "img/alpide.png",
//         "img/bookaroo.png",
//         "img/consult-now.png",
//         "img/dastar.png",
//         "img/doceree.png",
//         "img/HR-Katha.png",
//         "img/I-am-renew.png",
//         "img/Itrusoft.png",
//         "img/Trip-Night.png",
//         "img/Typisch.png",
//         "img/m4g.png",
//         "img/weblogo-dampfcompany.png",
//         "img/Zahara-Tours.png",
//     ];

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 3000,
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         cssEase: "linear",
//         pauseOnHover: false,
//         arrows: false,
//     };
//     return (
//         <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 text-center">
//                 <div className="max-w-4xl mx-auto px-4">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
//                         Welcome to EZBIZ Technologies
//                     </h1>
//                     <p className="text-lg md:text-xl animate-fade-in delay-200">
//                         Pioneering IT services and product engineering since 2017
//                     </p>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section className="py-20 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                 <div>
//                     <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
//                     <p className="text-lg leading-relaxed">
//                         EZBIZ Technologies is a customer-centric IT company founded in 2017. Our strength comes from our practical experience and the deep
//                         understanding of unique client needs. We have strong expertise in application design & development in both common and niche areas.
//                     </p>
//                     <p className="mt-4 text-lg leading-relaxed">
//                         Over the years, we&apos;ve executed projects globally and partnered with various organizations, offering high-quality solutions by aligning with client goals.
//                     </p>
//                 </div>
//                 <div className="flex justify-center">
//                     <img
//                         src="/img/groupp.png"
//                         alt="Team working illustration"
//                         className="w-3/4 md:w-full animate-zoom-in"
//                     />
//                 </div>
//             </section>

//             {/* Why EZBIZ */}
//             <section className="bg-white py-16 px-4 md:px-20 text-center">
//                 <h2 className="text-3xl font-bold mb-10">Why Choose EZBIZ?</h2>
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <div className="p-6 bg-indigo-100 rounded-xl shadow-md">
//                         <h3 className="text-xl font-semibold mb-2">Striving for Excellence</h3>
//                         <p>
//                             We exceed client expectations with dedication, speed, and budget-conscious execution.
//                         </p>
//                     </div>
//                     <div className="p-6 bg-pink-100 rounded-xl shadow-md">
//                         <h3 className="text-xl font-semibold mb-2">Technology Adaptability</h3>
//                         <p>
//                             Embracing change quickly to meet customer needs in dynamic environments.
//                         </p>
//                     </div>
//                     <div className="p-6 bg-green-100 rounded-xl shadow-md">
//                         <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
//                         <p>
//                             We align our solutions with client expectations through structured, feedback-driven processes.
//                         </p>
//                     </div>
//                 </div>
//             </section>



//             {/* Clients Section */}
//             {/* Our Partners Section */}
//             <section className="py-16 px-4 md:px-20 text-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Partners</h2>
//                 <div className="flex flex-wrap justify-center gap-8">
//                     <div className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-center w-48 h-32">
//                         <img src="/img/google-partner.png" alt="Google Partner" className="h-10 object-contain" />
//                     </div>
//                     <div className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-center w-48 h-32">
//                         <img src="/img/Hetzner.png" alt="Hetzner" className="h-10 object-contain" />
//                     </div>
//                     <div className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-center w-48 h-32">
//                         <img src="/img/aws.png" alt="AWS Certified" className="h-10 object-contain" />
//                     </div>
//                     <div className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-center w-48 h-32">
//                         <img src="/img/Azure.png" alt="Azure Certified" className="h-10 object-contain" />
//                     </div>
//                 </div>
//             </section>


//             <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-white to-blue-50 text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Clients</h2>

//                 <Slider {...sliderSettings}>
//                     {clientLogos.map((logo, index) => (
//                         <div key={index} className="px-4">
//                             <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center h-28 transition-transform duration-300 hover:scale-105">
//                                 <img src={logo} alt={`Client ${index}`} className="h-12 object-contain" />
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </section>
//         </div>
//     );
// }



"use client";

import React from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUsPage() {
    const clientLogos = [
        "/img/zahara.png",
        "/img/RacknnSell.png",
        "/img/The-Mobile-Indian.png",
        "/img/Eureka-book-Store.png",
        "/img/Oacasia.png",
        "/img/Dotori.png",
        "/img/Budha-Tours.png",
        "/img/FNB.png",
        "/img/ICN.png",
        "/img/IOaAA.png",
        "/img/Retail-4-growth.png",
        "/img/SHNN.png",
        "/img/Arabian-night.png",
        "/img/tag-resort.png",
        "/img/In-Store_Asia.png",
        "/img/alpide.png",
        "/img/bookaroo.png",
        "/img/consult-now.png",
        "/img/dastar.png",
        "/img/doceree.png",
        "/img/HR-Katha.png",
        "/img/I-am-renew.png",
        "/img/Itrusoft.png",
        "/img/Trip-Night.png",
        "/img/Typisch.png",
        "/img/m4g.png",
        "/img/weblogo-dampfcompany.png",
        "/img/Zahara-Tours.png",
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
            <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                        Welcome to EZBIZ Technologies
                    </h1>
                    <p className="text-lg md:text-xl animate-fade-in delay-200">
                        Pioneering IT services and product engineering since 2017
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                    <p className="text-lg leading-relaxed">
                        EZBIZ Technologies is a customer-centric IT company founded in 2017. Our strength comes from our practical experience and the deep understanding of unique client needs. We have strong expertise in application design & development in both common and niche areas.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        Over the years, we&apos;ve executed projects globally and partnered with various organizations, offering high-quality solutions by aligning with client goals.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/img/groupp.png"
                        alt="Team working illustration"
                        width={500}
                        height={400}
                        className="w-3/4 md:w-full animate-zoom-in"
                    />
                </div>
            </section>

            <section className="bg-white py-16 px-4 md:px-20 text-center">
                <h2 className="text-3xl font-bold mb-10">Why Choose EZBIZ?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-indigo-100 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Striving for Excellence</h3>
                        <p>
                            We exceed client expectations with dedication, speed, and budget-conscious execution.
                        </p>
                    </div>
                    <div className="p-6 bg-pink-100 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Technology Adaptability</h3>
                        <p>
                            Embracing change quickly to meet customer needs in dynamic environments.
                        </p>
                    </div>
                    <div className="p-6 bg-green-100 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                        <p>
                            We align our solutions with client expectations through structured, feedback-driven processes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-20 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Partners</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {['google-partner.png', 'Hetzner.png', 'aws.png', 'Azure.png'].map((logo, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-center w-48 h-32">
                            <Image src={`/img/${logo}`} alt={logo} width={150} height={60} className="h-10 object-contain" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-white to-blue-50 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Clients</h2>
                <Slider {...sliderSettings}>
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center h-28 transition-transform duration-300 hover:scale-105">
                                <Image src={logo} alt={`Client ${index}`} width={150} height={60} className="h-12 object-contain" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
}

