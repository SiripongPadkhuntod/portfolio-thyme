// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                {/* ส่วนแสดง Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* ปุ่ม Links */}
                <div className="flex space-x-4">
                    {project.link.github && (
                        <a 
                            href={project.link.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white bg-gray-800 hover:bg-gray-900 font-medium py-2 px-4 rounded-lg transition"
                        >
                            GitHub
                        </a>
                    )}
                    {project.link.live && (
                        <a 
                            href={project.link.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium py-2 px-4 rounded-lg transition"
                        >
                            View Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; // <--- สำคัญมาก! ต้องมีบรรทัดนี้