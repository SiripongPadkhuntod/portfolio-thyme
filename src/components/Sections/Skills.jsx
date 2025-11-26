// src/components/Sections/Skills.jsx
import React from 'react';

// ข้อมูลทักษะที่จัดกลุ่มตามความเชี่ยวชาญของคุณ
const skillCategories = [
    {
        title: "Enterprise & Backend",
        skills: ["Oracle NetSuite ERP (SuiteScript)", "Java", "NodeJS", "Python", "SQL"]
    },
    {
        title: "Frontend & UI/UX",
        skills: ["ReactJS", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Figma"]
    },
    {
        title: "Other Tech & Core",
        skills: ["C++", "Dart", "Arduino (IoT)", "Solidity (Blockchain)", "Git/GitHub", "Postman"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 bg-gray-50 border-t border-b">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Tech Stack & Expertise 🛠️
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="flex items-center text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span className="font-medium">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; // <--- สำคัญมาก! ต้องมีบรรทัดนี้