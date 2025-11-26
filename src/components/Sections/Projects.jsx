// src/components/Sections/Projects.jsx
import React from 'react';
import ProjectCard from '../ProjectCard'; // <--- Path ต้องถูก
import projectsData from '../../data/projectsData'; // <--- Path ต้องถูก

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Featured Projects 🚀
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; // <--- สำคัญมาก! ต้องมีบรรทัดนี้