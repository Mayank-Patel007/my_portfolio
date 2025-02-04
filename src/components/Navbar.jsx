// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../redux/slices/navigationSlice';
import { Menu, X, Code } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.navigation.activeSection);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about-section' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (section) => {
    dispatch(setActiveSection(section));
    
    const element = document.querySelector(section);
    if (element) {
      // Calculate header offset (assuming header height is 76px)
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Use GSAP for smooth scrolling
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: offsetPosition, autoKill: false },
        ease: "power2.inOut"
      });
    }
    setMobileMenuOpen(false);
  };

  // Intersection Observer for scroll spy
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-80px 0px 0px 0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection('#' + entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [dispatch]);

  // Animation for the nav items
  const animateNavItem = (e, isHover) => {
    gsap.to(e.target, {
      y: isHover ? -2 : 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white flex items-center">
          <Code className="mr-2 text-teal-400" />
          <span>My Portfolio</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              onMouseEnter={(e) => animateNavItem(e, true)}
              onMouseLeave={(e) => animateNavItem(e, false)}
              className={`transition-all transform ${
                activeSection === link.href
                  ? 'text-white font-semibold scale-105'
                  : 'text-black/80 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-teal-600 text-white hover:text-black rounded-full hover:bg-blue-500 transition-all transform hover:scale-105 duration-300"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white transition-transform transform hover:scale-105"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`md:hidden block absolute w-full bg-black/90 shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`block py-2 w-full text-left transition-all transform hover:translate-x-2 ${
                activeSection === link.href
                  ? 'text-white font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-4 py-2 bg-teal-600 text-white hover:text-black rounded-full hover:bg-blue-500 transition-all transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;