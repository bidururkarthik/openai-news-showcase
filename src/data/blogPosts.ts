import electricBike1 from "@/assets/electric-bike-1.jpg";
import bikeBattery from "@/assets/bike-battery.jpg";
import chargingStation from "@/assets/charging-station.jpg";
import bikeMaintenance from "@/assets/bike-maintenance.jpg";
import newElectricBike from "@/assets/new-electric-bike.jpg";

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
    title: 'The Ultimate Guide to Electric Bike Range and Efficiency',
    excerpt: 'Discover how to maximize your electric bike\'s range with proper battery management, riding techniques, and maintenance tips. Learn about the latest battery technologies and their real-world performance.',
    category: 'Electric Bikes',
    date: new Date('2024-07-21'),
    readTime: '8 min read',
    image: electricBike1,
    featured: true
  },
  {
    id: '2',
    title: 'Lithium-Ion vs LiFePO4: Choosing the Right Battery',
    excerpt: 'Compare different battery technologies for electric bikes, their pros and cons, lifespan, and cost-effectiveness for different riding styles.',
    category: 'Battery Tips',
    date: new Date('2024-07-17'),
    readTime: '6 min read',
    image: bikeBattery
  },
  {
    id: '3',
    title: 'Fast Charging Networks: The Future of Urban Mobility',
    excerpt: 'How expanding charging station networks are making electric bikes more practical for daily commuting and long-distance touring.',
    category: 'Charging Stations',
    date: new Date('2024-07-09'),
    readTime: '5 min read',
    image: chargingStation
  },
  {
    id: '4',
    title: 'Essential Electric Bike Maintenance for Peak Performance',
    excerpt: 'Keep your electric bike running smoothly with our comprehensive maintenance guide covering battery care, motor servicing, and regular tune-ups.',
    category: 'Maintenance',
    date: new Date('2024-07-05'),
    readTime: '7 min read',
    image: bikeMaintenance
  },
  {
    id: '5',
    title: '2024\'s Most Innovative Electric Mountain Bikes',
    excerpt: 'Explore the latest electric mountain bikes featuring advanced suspension, powerful motors, and extended battery life for off-road adventures.',
    category: 'New Launches',
    date: new Date('2024-07-01'),
    readTime: '6 min read',
    image: newElectricBike
  },
  {
    id: '6',
    title: 'Winter Battery Care: Keeping Your eBike Powered',
    excerpt: 'Essential tips for maintaining battery performance during cold weather and extending battery life through winter months.',
    category: 'Battery Tips',
    date: new Date('2024-06-28'),
    readTime: '4 min read',
    image: bikeBattery
  },
  {
    id: '7',
    title: 'Smart Charging Solutions for Electric Bike Fleets',
    excerpt: 'How businesses and cities are implementing intelligent charging infrastructure to support growing electric bike adoption.',
    category: 'Charging Stations',
    date: new Date('2024-06-25'),
    readTime: '8 min read',
    image: chargingStation
  },
  {
    id: '8',
    title: 'Mid-Drive vs Hub Motors: Performance Comparison',
    excerpt: 'Detailed analysis of different electric bike motor types, their efficiency, maintenance requirements, and best use cases.',
    category: 'Electric Bikes',
    date: new Date('2024-06-20'),
    readTime: '5 min read',
    image: electricBike1
  }
];