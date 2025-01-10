import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutMe from './components/Aboutme';
import ProjectsSection from './components/ProjectsSection';
import BlogsSection from './components/BlogsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// import AboutAndSkills from './components/AboutandSkills';
import './App.css'
function App() {
  return (
    <>
    <Navbar/>
      <Banner/>
      <AboutMe/>
      <ProjectsSection/>
      <BlogsSection/>
      <ContactSection/>
      <Footer/> 
      {/* <AboutAndSkills/> */}
    </>
  );
}

export default App;