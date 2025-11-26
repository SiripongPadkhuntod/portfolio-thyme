// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Let's Connect 🤝
                </h2>
                
                {/* Contact Information */}
                <div className="flex flex-col items-center space-y-3 mb-8">
                    <p className="text-lg">Email: <a href="mailto:stopsiripong@gmail.com" className="text-indigo-400 hover:text-indigo-300">stopsiripong@gmail.com</a></p>
                    <p className="text-lg">Phone: 098-4368504</p>
                </div>

                {/* Social Links (ใช้ลิงก์จาก Resume) */}
                <div className="flex justify-center space-x-6 mb-10">
                    <a 
                        href="https://github.com/SiripongPadkhuntod" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-indigo-400 transition"
                        aria-label="GitHub"
                    >
                        {/* ไอคอน GitHub */}
                        <i className="fab fa-github"></i> 
                    </a>
                    {/* ควรเพิ่มลิงก์ LinkedIn ด้วย */}
                    {/* <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-indigo-400 transition" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a> */}
                </div>

                <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
                    © {new Date().getFullYear()} Siripong Padkhuntod. Built with React and Tailwind CSS.
                </div>
            </div>
        </footer>
    );
};

export default Footer;