// src/components/Header.jsx
import React from 'react';

const Header = () => {
    // ลิงก์ไปยังส่วนต่างๆ ของหน้าเว็บ
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* Logo/Name */}
                <a href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition">
                    T. Siripong 💡
                </a>
                
                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-gray-700 hover:text-indigo-600 font-medium transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Icon (ถ้าต้องการทำ Responsive Menu) */}
                {/* <button className="md:hidden text-gray-700 hover:text-indigo-600 text-2xl">
                    ☰
                </button> */}
            </div>
        </header>
    );
};

export default Header;