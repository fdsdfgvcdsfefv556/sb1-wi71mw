import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Link {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

interface UsefulLinksProps {
  links: Link[];
}

const UsefulLinks: React.FC<UsefulLinksProps> = ({ links }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Useful Links and Resources</h1>
      <div className="space-y-6">
        {links.map((link, index) => (
          <div key={index} className="card p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-300">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
                {link.title}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </h2>
            <p className="text-gray-300 mb-4">{link.description}</p>
            <div className="flex flex-wrap gap-2">
              {link.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;