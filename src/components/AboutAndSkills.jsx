import React, { useState } from 'react';
import { Award, Code, Server, Tool } from 'lucide-react';

const AboutAndSkills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: 'React', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Material-UI', level: 80 },
      { name: 'GSAP', level: 75 }
    ],
    Backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Firebase', level: 75 }
    ],
    Tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Postman', level: 85 }
    ],
    Other: [
      { name: 'Agile Methodologies', level: 90 },
      { name: 'REST APIs', level: 88 }
    ]
  };

  const categoryIcons = {
    Frontend: <Code className="mr-2" />,
    Backend: <Server className="mr-2" />,
    Tools: <Tool className="mr-2" />,
    Other: <Award className="mr-2" />
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* About Me Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-indigo-800">
            About <span className="text-pink-500">Me</span>
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hi, I'm Mayank Patel, a passionate web developer with a knack for creating 
              dynamic and engaging digital experiences. My journey in tech started with 
              a curiosity to transform complex ideas into elegant, user-friendly solutions.
            </p>
            <p>
              With a strong foundation in React and modern web technologies, I specialize 
              in crafting responsive and performant web applications. My approach combines 
              technical expertise with creative problem-solving, ensuring each project 
              not only meets but exceeds expectations.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new hiking trails, experimenting 
              with photography, or diving into the latest tech podcasts. I believe in 
              continuous learning and bringing a touch of creativity to every challenge.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-indigo-800">
            My <span className="text-pink-500">Skills</span>
          </h2>
          
          {/* Category Tabs */}
          <div className="flex mb-6 bg-white rounded-full shadow-md overflow-hidden">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-1 flex items-center justify-center py-3 transition-colors ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {categoryIcons[category]}
                {category}
              </button>
            ))}
          </div>

          {/* Skill Progress Bars */}
          <div className="space-y-4">
            {skillCategories[activeCategory].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndSkills;