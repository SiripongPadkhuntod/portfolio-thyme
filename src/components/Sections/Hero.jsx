// src/components/Sections/Hero.jsx (ฉบับแก้ไข)
import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="bg-white py-20 md:py-32 border-b">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <p className="text-xl text-indigo-600 font-semibold mb-2">Hello, I'm</p>
                    <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
                        Siripong Padkhuntod <span className="text-indigo-600">(Thyme)</span>
                    </h1>
                    <h2 className="text-2xl text-gray-700 mt-4">
                        Software Developer | NetSuite ERP Specialist 2
                    </h2>
                    <p className="text-gray-600 mt-5 max-w-lg">
                        Turning complex business requirements into clean, scalable, and optimized code.
                    </p>

                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                            View Projects 🚀
                        </a>
                        <a href="/Siripong_Resume.pdf" download className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Profile Image Placeholder (ไม่มีการอ้างอิงตัวแปรแล้ว) */}
                <div className="md:w-1/3">
                    <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto shadow-2xl overflow-hidden">
                        {/* Placeholder for Profile Image */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;