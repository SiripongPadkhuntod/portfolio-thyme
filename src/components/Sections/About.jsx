// src/components/Sections/About.jsx
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-5">
                    <p>
                        I am a **Software Developer** with a strong foundation in Computer Science, having graduated with **First Class Honors**. My focus is on delivering technical solutions that directly impact business efficiency.
                    </p>
                    <p>
                        My core expertise lies in **Enterprise Resource Planning (ERP)**, specifically customizing and integrating **Oracle NetSuite** using **SuiteScript** and workflow automation to enhance and streamline complex business processes.
                    </p>
                    <p>
                        Beyond ERP, I am a versatile full-stack developer, utilizing modern frameworks like **ReactJS** and **NodeJS** for building robust, high-performing web applications. I am always driven to apply my diverse technical knowledge to new and challenging environments.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;