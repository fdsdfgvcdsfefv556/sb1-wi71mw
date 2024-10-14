import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  content: {
    title: string;
    developer: {
      name: string;
      image: string;
      description: string;
      socialLinks: Array<{ icon: React.ElementType; url: string; label: string }>;
    };
    skills: string[];
    featuredProjects: Array<{ name: string; description: string }>;
  };
}

const Home: React.FC<HomeProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">{content.title}</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img
          src={content.developer.image}
          alt={content.developer.name}
          className="rounded-full w-48 h-48 object-cover mb-4 md:mb-0 md:mr-8 ring-4 ring-blue-400"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-300">{content.developer.name}</h2>
          <p className="text-gray-300 mb-4">{content.developer.description}</p>
          <div className="flex space-x-4">
            {content.developer.socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {content.skills.map((skill) => (
            <span key={skill} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.featuredProjects.map((project) => (
            <div key={project.name} className="card p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-300">{project.name}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <Link to={`/products/${project.name.toLowerCase().replace(' ', '')}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Contact Me</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="input"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;