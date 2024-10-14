import { Github, Linkedin, Mail } from 'lucide-react';

export const content = {
  siteTitle: "Flutter Dev Portfolio",
  
  home: {
    title: "Welcome to My Flutter Developer Portfolio",
    developer: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Passionate Flutter developer with 5+ years of experience in creating beautiful and performant mobile applications.",
      socialLinks: [
        { icon: Github, url: "https://github.com", label: "GitHub" },
        { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
        { icon: Mail, url: "mailto:john@example.com", label: "Email" },
      ],
    },
    skills: ['Flutter', 'Dart', 'Firebase', 'RESTful APIs', 'Git', 'UI/UX Design', 'State Management', 'Test-Driven Development'],
    featuredProjects: [
      { name: 'App 1', description: 'A revolutionary fitness tracking app' },
      { name: 'App 2', description: 'An innovative task management solution' },
      { name: 'App 3', description: 'A social media app for book lovers' },
    ],
  },

  products: [
    {
      id: 'app1',
      name: 'App 1',
      description: 'A revolutionary fitness tracking app',
      features: [
        'Personalized workout plans',
        'Real-time progress tracking',
        'Integration with wearable devices',
        'Social features for motivation',
      ],
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'app2',
      name: 'App 2',
      description: 'An innovative task management solution',
      features: [
        'Intuitive task organization',
        'Collaboration tools',
        'Smart reminders and notifications',
        'Analytics and productivity insights',
      ],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'app3',
      name: 'App 3',
      description: 'A social media app for book lovers',
      features: [
        'Book discovery and recommendations',
        'Reading challenges and goals',
        'Virtual book clubs',
        'Author Q&A sessions',
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],

  blog: [
    {
      id: 1,
      title: 'Getting Started with Flutter',
      date: '2023-03-15',
      excerpt: 'Learn how to set up your development environment and create your first Flutter app.',
    },
    {
      id: 2,
      title: 'State Management in Flutter',
      date: '2023-04-02',
      excerpt: 'Explore different state management solutions in Flutter and when to use each one.',
    },
    {
      id: 3,
      title: 'Building Beautiful UIs with Flutter',
      date: '2023-04-20',
      excerpt: 'Discover tips and tricks for creating stunning user interfaces in your Flutter apps.',
    },
  ],

  usefulLinks: [
    {
      title: 'Flutter Official Documentation',
      url: 'https://flutter.dev/docs',
      description: 'The official Flutter documentation, a comprehensive resource for learning Flutter.',
      tags: ['Flutter', 'Documentation', 'Beginner'],
    },
    {
      title: 'Dart Language Tour',
      url: 'https://dart.dev/guides/language/language-tour',
      description: 'A tour of the Dart language, perfect for getting started with Dart programming.',
      tags: ['Dart', 'Programming', 'Beginner'],
    },
    {
      title: 'Flutter State Management Comparison',
      url: 'https://flutter.dev/docs/development/data-and-backend/state-mgmt/options',
      description: 'An overview of different state management approaches in Flutter.',
      tags: ['Flutter', 'State Management', 'Advanced'],
    },
    {
      title: 'Flutter Widget of the Week (YouTube Playlist)',
      url: 'https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG',
      description: 'Short videos explaining various Flutter widgets, great for learning new UI components.',
      tags: ['Flutter', 'Widgets', 'Video'],
    },
  ],
};