import React, { useState } from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaCodepen, 
  FaPaperPlane 
} from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'text-blue-600'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: 'text-gray-800'
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
      color: 'text-blue-400'
    },
    {
      icon: FaCodepen,
      url: 'https://codepen.io/yourusername',
      color: 'text-gray-700'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 via-teal-500 to-gray-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Contact me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-400 text-black font-semibold py-3 rounded-lg hover:bg-teal-500 transition-colors flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="text-white space-y-8">
            <div className="bg-white/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 text-2xl text-teal-300" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-4 text-2xl text-teal-300" />
                  <span>+91 1234567890</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Find Me Online
              </h3>
              <div className="flex space-x-6 justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-3xl hover:scale-110 transform transition-transform`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;