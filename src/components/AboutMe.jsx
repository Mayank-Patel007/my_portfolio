import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Brain, Award } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('expertise');
  const expertiseRef = useRef(null);

  useEffect(() => {
    if (expertiseRef.current) {
      gsap.fromTo(
        expertiseRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const professionalTimeline = [
    {
      year: 2024,
      title: 'MERN Stack Developer as Intern ',
      company: 'RND Technosoft',
      description: 'Began my journey in web development, focusing on React and front-end technologies.'
    },
    {
      year: 2021,
      title: 'Full Stack Developer',
      company: 'InnovateTech Inc.',
      description: 'Expanded skills to full-stack development, mastering Node.js and MongoDB.'
    },
    {
      year: 2022,
      title: 'Senior React Developer',
      company: 'Digital Dynamics',
      description: 'Led multiple complex web application projects, mentoring junior developers.'
    },
    {
      year: 2023,
      title: 'Lead Software Engineer',
      company: 'WebCraft Solutions',
      description: 'Driving innovation in web technologies and architectural design.'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'expertise':
        return (
          <div ref={expertiseRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-teal-500/50 p-4 rounded-lg flex items-center space-x-3">
              <FaReact className="text-teal-700" />
              <span className="text-white">React.js</span>
            </div>
            <div className="bg-blue-500/50 p-4 rounded-lg flex items-center space-x-3">
              <RiTailwindCssFill className="text-blue-700" />
              <span className="text-white">Tailwind CSS</span>
            </div>
            <div className="bg-yellow-500/50 p-4 rounded-lg flex items-center space-x-3">
              <IoLogoJavascript className="text-yellow-700" />
              <span className="text-white">JavaScript</span>
            </div>
            <div className="bg-gray-500/50 p-4 rounded-lg flex items-center space-x-3">
              <FaGithub className="text-gray-700" />
              <span className="text-white">GitHub</span>
            </div>
            <div className="bg-sky-500/50 p-4 rounded-lg flex items-center space-x-3">
              <FaHtml5 className="text-sky-700" />
              <span className="text-white">HTML</span>
            </div>
            <div className="bg-green-500/50 p-4 rounded-lg flex items-center space-x-3">
              <MdAnimation className="text-green-700" />
              <span className="text-white">GSAP Animation</span>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-4 text-white">
            <div className="flex items-center space-x-3 bg-teal-500/50 rounded-md p-2">
              <Users className="text-teal-700" />
              <span>Exceptional Team Collaboration</span>
            </div>
            <div className="flex items-center space-x-3 bg-blue-500/50 rounded-md p-2">
              <Brain className="text-blue-700" />
              <span>Advanced Problem-Solving</span>
            </div>
            <div className="flex items-center space-x-3 bg-yellow-500/50 rounded-md p-2">
              <Award className="text-yellow-700" />
              <span>Continuous Learning Mindset</span>
            </div>
          </div>
        );
        case 'timeline':
          return (
            <div className="space-y-4">
              {professionalTimeline.map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-teal-500 bg-teal-500/10 rounded-md p-2 pl-4 py-2 relative text-gray-300"
                >
                  <div className="absolute -left-3 top-2 w-6 h-6 bg-teal-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-teal-500">
                    {item.year} - {item.title}
                  </h3>
                  <p className="text-blue-500 font-semibold">{item.company}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          );
        
      default:
        return null;
    }
  };

  return (
    <div
      id="about-section"
      className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-gray-500 py-16 px-4 md:px-10 lg:px-36"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
            About Me
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Hi, I'm Mayank Patel - a passionate web developer with a love for creating innovative digital experiences.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 space-x-4">
          {['expertise', 'skills', 'timeline'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab === 'expertise'
                ? 'Technical Expertise'
                : tab === 'skills'
                ? 'Soft Skills'
                : 'Professional Journey'}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto bg-gray-200 shadow-lg rounded-lg p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
