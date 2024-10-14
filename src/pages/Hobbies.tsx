import React from 'react';

const hobbies = [
  {
    name: 'Photography',
    description: 'Capturing moments and exploring the world through my lens.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hiking',
    description: 'Exploring nature trails and enjoying the great outdoors.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cooking',
    description: 'Experimenting with new recipes and cuisines from around the world.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Hobbies: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hobby.image} alt={hobby.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hobby.name}</h2>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;