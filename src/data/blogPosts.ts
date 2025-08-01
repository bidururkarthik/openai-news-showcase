import heroGradient from "@/assets/hero-gradient.jpg";
import aiTechBg from "@/assets/ai-tech-bg.jpg";
import workspace from "@/assets/workspace.jpg";
import dataVisual from "@/assets/data-visual.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: Date;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'AI as the greatest source of empowerment for all',
    excerpt: 'Exploring how artificial intelligence can democratize access to knowledge, creativity, and problem-solving capabilities across all sectors of society. This comprehensive analysis examines the transformative potential of AI technologies.',
    category: 'Company',
    date: new Date('2024-07-21'),
    readTime: '8 min read',
    image: heroGradient,
    featured: true
  },
  {
    id: '2',
    title: 'Introducing Advanced Reasoning Models',
    excerpt: 'Our latest breakthrough in artificial intelligence reasoning capabilities represents a significant leap forward in machine learning and cognitive computing.',
    category: 'Research',
    date: new Date('2024-07-17'),
    readTime: '6 min read',
    image: aiTechBg
  },
  {
    id: '3',
    title: 'The Future of Collaborative AI Workspaces',
    excerpt: 'How modern AI tools are reshaping the way teams collaborate, communicate, and create in distributed work environments.',
    category: 'Product',
    date: new Date('2024-07-09'),
    readTime: '5 min read',
    image: workspace
  },
  {
    id: '4',
    title: 'Advancing AI Safety Through Research',
    excerpt: 'Our commitment to developing safe, beneficial artificial intelligence through rigorous research methodologies and ethical frameworks.',
    category: 'Safety',
    date: new Date('2024-07-05'),
    readTime: '7 min read',
    image: dataVisual
  },
  {
    id: '5',
    title: 'Building Secure AI Systems',
    excerpt: 'Implementing robust security measures and privacy protections in artificial intelligence systems to ensure user trust and data integrity.',
    category: 'Security',
    date: new Date('2024-07-01'),
    readTime: '6 min read',
    image: aiTechBg
  },
  {
    id: '6',
    title: 'Global AI Policy and Governance',
    excerpt: 'Navigating the complex landscape of international AI regulation and establishing frameworks for responsible AI development.',
    category: 'Global Affairs',
    date: new Date('2024-06-28'),
    readTime: '9 min read',
    image: dataVisual
  },
  {
    id: '7',
    title: 'Next-Generation Language Models',
    excerpt: 'Breakthrough innovations in natural language processing that bring us closer to human-level communication and understanding.',
    category: 'Research',
    date: new Date('2024-06-25'),
    readTime: '8 min read',
    image: workspace
  },
  {
    id: '8',
    title: 'AI-Powered Creative Tools',
    excerpt: 'Empowering artists, writers, and creators with intelligent tools that enhance human creativity rather than replace it.',
    category: 'Product',
    date: new Date('2024-06-20'),
    readTime: '5 min read',
    image: heroGradient
  }
];