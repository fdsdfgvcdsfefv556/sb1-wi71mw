import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

interface BlogProps {
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="card p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-300">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              Read more
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;