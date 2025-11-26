import React, { useState, useEffect } from 'react';

// Project Data
const projectsData = [
  {
    title: "Workspace Booking System",
    techStack: ["ReactJS", "NodeJS", "SQL", "Tailwind CSS"],
    description: "A full-stack platform enabling users to book and cancel desks or meeting rooms efficiently. Features real-time availability checks and automated email confirmation.",
    icon: "📅",
    link: { github: "#", live: "#" }
  },
  {
    title: "AutoTrade Management",
    techStack: ["Java", "SQL"],
    description: "A comprehensive used car trading system supporting core business functions: purchasing, sales processing, customer history tracking, and automated reporting.",
    icon: "🚗",
    link: { github: "#" }
  },
  {
    title: "Smart Car Model (IoT)",
    techStack: ["C++", "Arduino", "IoT"],
    description: "A mobile-controlled 4WD car model with sensor-based collision prevention, detecting obstacles to avoid accidents.",
    icon: "🤖",
    link: { github: "#" }
  },
  {
    title: "Flappy Bird Blockchain",
    techStack: ["Solidity", "ReactJS", "Web3"],
    description: "A decentralized dApp where players earn tokens to purchase NFTs or in-game skins. Secured by Solidity smart contracts.",
    icon: "🎮",
    link: { github: "#" }
  }
];

const skillCategories = [
  {
    title: "Enterprise & Backend",
    icon: "⚙️",
    color: "from-violet-500 to-purple-600",
    skills: ["Oracle NetSuite ERP", "SuiteScript", "Java", "NodeJS", "Python", "SQL"]
  },
  {
    title: "Frontend & UI/UX",
    icon: "🎨",
    color: "from-cyan-500 to-blue-600",
    skills: ["ReactJS", "JavaScript", "HTML/CSS", "Tailwind CSS", "Figma"]
  },
  {
    title: "Other Technologies",
    icon: "🔧",
    color: "from-emerald-500 to-teal-600",
    skills: ["C++", "Dart", "Arduino (IoT)", "Solidity", "Git/GitHub", "Postman"]
  }
];

// Animated Background Component
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
  </div>
);

// Header Component
const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-violet-500/5 border-b border-slate-800/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:scale-110">
            T
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Thyme.dev
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === link.href.slice(1) ? 'text-violet-400 bg-violet-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Siripong
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
              Software Developer &{' '}
              <span className="text-cyan-400">NetSuite Specialist</span>
            </h2>
            
            <p className="text-lg text-slate-500 max-w-xl mb-8 leading-relaxed">
              Turning complex business requirements into clean, scalable, and optimized solutions. 
              Passionate about ERP systems and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="group px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact" className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 font-semibold hover:bg-slate-800 hover:border-slate-600 hover:scale-105 transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </div>

          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-slate-700/50 flex items-center justify-center backdrop-blur-sm">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-7xl md:text-8xl shadow-inner">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                💡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-2xl flex-shrink-0">🎓</div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
            <p className="text-slate-400 leading-relaxed">
              Software Developer with a strong foundation in Computer Science, graduated with <span className="text-violet-400 font-semibold">First Class Honors</span>. 
              Focused on delivering technical solutions that directly impact business efficiency.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl flex-shrink-0">🏢</div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">ERP Expertise</h3>
            <p className="text-slate-400 leading-relaxed">
              Core expertise lies in <span className="text-cyan-400 font-semibold">Enterprise Resource Planning (ERP)</span>, 
              specifically customizing and integrating <span className="text-cyan-400 font-semibold">Oracle NetSuite</span> using 
              SuiteScript and workflow automation to enhance complex business processes.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl flex-shrink-0">🚀</div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
            <p className="text-slate-400 leading-relaxed">
              Versatile full-stack developer utilizing modern frameworks like <span className="text-emerald-400 font-semibold">ReactJS</span> and 
              <span className="text-emerald-400 font-semibold"> NodeJS</span> for building robust, high-performing web applications. 
              Always driven to apply diverse technical knowledge to new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Skills Component
const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tech Stack & <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-2"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Project Card Component
const ProjectCard = ({ project, index }) => (
  <div 
    className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-2"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-slate-700/50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>
        <div className="flex gap-2">
          {project.link.github && (
            <a href={project.link.github} className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          )}
          {project.link.live && (
            <a href={project.link.live} className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 hover:bg-violet-500/30 transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className="px-2.5 py-1 bg-violet-500/10 border border-violet-500/20 rounded-md text-xs font-medium text-violet-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Projects Component
const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer id="contact" className="py-20 relative">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-slate-400">Feel free to reach out for opportunities or just a friendly chat</p>
      </div>

      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <a href="mailto:stopsiripong@gmail.com" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-xl group-hover:bg-violet-500/20 transition-colors">
              ✉️
            </div>
            <span>stopsiripong@gmail.com</span>
          </a>
          
          <a href="tel:0984368504" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-xl group-hover:bg-cyan-500/20 transition-colors">
              📱
            </div>
            <span>098-436-8504</span>
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a 
            href="https://github.com/SiripongPadkhuntod" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a 
            href="#"
            className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-slate-500 border-t border-slate-800 pt-8">
        <p>© {new Date().getFullYear()} Siripong Padkhuntod. Built with React & Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased">
      <AnimatedBackground />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}