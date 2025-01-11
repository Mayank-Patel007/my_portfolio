import React from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import resume from '../assets/mayank-patel-resume.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="flex items-center text-teal-300 hover:text-teal-200 transition-colors">
            <Home className="mr-2" size={20} />
            Home
          </a>
          <a href="#projects" className="flex items-center text-teal-300 hover:text-teal-200 transition-colors">
            <Briefcase className="mr-2" size={20} />
            Projects
          </a>
          <a href={resume} className="flex items-center text-teal-300 hover:text-teal-200 transition-colors">
            <User className="mr-2" size={20} />
            Resume
          </a>
          <a href="#contact" className="flex items-center text-teal-300 hover:text-teal-200 transition-colors">
            <Mail className="mr-2" size={20} />
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          © {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;