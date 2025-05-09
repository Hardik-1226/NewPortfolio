'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Achievement {
  title: string;
  description: string;
  image: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    title: "Winner – IIIT Delhi National Hackathon",
    description: "Secured 1st place among 50+ teams for AI Scheme Recommender.",
    image: "/20250221_165439.jpg",
    date: "2024"
  },
  {
    title: "PR Team Member – Abhyudaya Club, GL Bajaj",
    description: "Active member of the public relations team, organizing and promoting tech events.",
    image: "/IMG_9021[1].PNG",
    date: "2024"
  },
  {
    title: "Organized Supernova Hackathon",
    description: "Best time ever.",
    image: "/1745512560110.jpeg",
    date: "2023"
  },
  {
    title: "Self-learning & Balancing Exams",
    description: "Currently self-learning ML, Web3, TensorFlow, DSA in C++ while preparing for SSC CGL.",
    image: "/profile.png",
    date: "2024"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 glow-text">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments that showcase my dedication to technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-blue-500 text-sm mb-2">{achievement.date}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
