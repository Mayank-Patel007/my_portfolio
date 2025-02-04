import React, { useState } from 'react';
import { Download, Send } from 'lucide-react';
import pic from '../assets/mayank-patel.jpg';
import resume from '../assets/mayank-patel-resume.pdf';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='home' className="relative mt-16 md:mt-0 min-h-screen min-w-full flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 via-teal-500 to-gray-500 text-white overflow-hidden lg:px-10 xl:px-36">
      {/* Left Content Section */}
      <div className="flex-1 p-8 flex flex-col justify-center items-start space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:pr-8 xl:pr-48 font-extrabold tracking-tighter">
          Hi, I'm <span className="text-teal-300">Mayank Patel</span>
        </h1>
        <h2 className="text-lg md:text-2xl font-medium">
          Crafting exceptional web experiences with React and Tailwind CSS
        </h2>
        <p className="text-sm md:text-lg text-gray-100/80 max-w-lg leading-relaxed mx-auto md:mx-0">
          I specialize in creating dynamic, responsive, and engaging web
          applications. Let's team up to bring your vision to life with
          cutting-edge solutions.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-3 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition-transform transform hover:scale-105"
          >
            <Download className="mr-2" size={20} />
            View Resume
          </a>
          <button
            onClick={handleScrollToContact}
            className="flex items-center px-5 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105 border border-blue-500"
          >
            <Send className="mr-2" size={20} />
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 relative p-5 md:p-0 flex justify-center items-center">
        {/* Floating Particles with Hover Animation */}
        <div className="absolute -inset-10 overflow-hidden">
          {[...Array(50)].map((_, index) => (
            <div
              key={index}
              className={`absolute bg-white/40 rounded-full ${
                isHovered ? 'animate-pulse' : 'animate-float'
              }`}
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                left: `${Math.random() * 200 - 50}%`,
                top: `${Math.random() * 200 - 50}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Profile Image with Hover Animation */}
        <div
          className={`relative w-44 h-44 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br ${
            isHovered ? 'from-teal-300 to-blue-500' : 'from-blue-300 to-teal-500'
          } rounded-full shadow-2xl overflow-hidden transition-all duration-500 transform ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={pic}
            alt="Your Profile"
            className="w-full h-full object-cover rounded-full"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-transparent to-black/30 ${
              isHovered ? 'opacity-50' : 'opacity-30'
            } transition-opacity duration-500`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
