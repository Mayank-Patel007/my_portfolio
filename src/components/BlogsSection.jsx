import React, { useEffect, useRef } from "react";
import { FaMedium, FaLink, FaDev } from "react-icons/fa";
import Slider from "react-slick";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

// Blogs data
const blogsData = [
  {
    id: 1,
    title: "Mastering React Hooks: A Comprehensive Guide",
    platform: "Medium",
    description:
      "An in-depth exploration of React Hooks, covering useState, useEffect, and custom hooks with real-world examples.",
    link: "https://medium.com/@yourusername/react-hooks-guide",
    icon: FaMedium,
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js",
    platform: "Dev.to",
    description:
      "A tutorial on designing and implementing microservices architecture using Node.js and Docker.",
    link: "https://dev.to/yourusername/microservices-nodejs",
    icon: FaDev,
  },
  {
    id: 3,
    title: "Performance Optimization Techniques in Web Development",
    platform: "Personal Blog",
    description:
      "Practical strategies to improve web application performance, covering frontend and backend optimization.",
    link: "https://yourblog.com/performance-optimization",
    icon: FaLink,
  },
  {
    id: 4,
    title: "Understanding TypeScript: A Beginner's Guide",
    platform: "Medium",
    description: "A simple guide to TypeScript, its features, and its integration with React for scalable applications.",
    link: "https://medium.com/@yourusername/typescript-guide",
    icon: FaMedium,
  },
  {
    id: 5,
    title: "Modern CSS Techniques for Responsive Design",
    platform: "Personal Blog",
    description:
      "Learn modern CSS techniques, including Flexbox, Grid, and media queries, to create responsive layouts.",
    link: "https://yourblog.com/modern-css",
    icon: FaLink,
  },
];

// Blog Card Component
const BlogCard = ({ blog }) => {
  const PlatformIcon = blog.icon;

  return (
    <div className="blog-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-6 bg-gradient-to-br from-white via-teal-50 to-blue-50">
        <div className="flex items-center mb-6">
          <PlatformIcon className="mr-3 text-3xl text-teal-600" />
          <h3 className="text-xl font-extrabold text-blue-700">{blog.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{blog.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-teal-600 font-medium">
            Published on {blog.platform}
          </span>
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-400 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-blue-500 transition-transform transform hover:scale-105"
          >
            Read Article <FaLink className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Blogs Section with Carousel Slider
const BlogsSection = () => {
  const cardsRef = useRef([]);

  // GSAP Animation
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-slider",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 via-teal-500 to-gray-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
          Tech Articles & Blogs
        </h2>

        <Slider {...sliderSettings} className="blog-slider">
          {blogsData.map((blog, index) => (
            <div
              key={blog.id}
              className="px-4"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogsSection;
