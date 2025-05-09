'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

interface Hackathon {
  title: string;
  date: string;
  position: string;
  description: string;
  icon: typeof FaTrophy;
  image: string;
}

const hackathons: Hackathon[] = [
  {
    title: "IIIT Delhi Hackathon",
    date: "2025",
    position: "Winner (1st Place)",
    description: "Built an AI agent that recommends government schemes based on user profiles. Included voice assistant and authentication.",
    icon: FaTrophy,
    image: "/20250221_163031.jpg"
  },
  {
    title: "GGSIPU Vespera Hackathon",
    date: "2024",
    position: "Top 10 Finalist",
    description: "Built 'SunShare', a solar community sharing investment platform tailored to the Indian context.",
    icon: FaMedal,
    image: "/Screenshot_20250509_195950_WhatsApp.jpg"
  },
  {
    title: "GFG Hackathon",
    date: "2023",
    position: "Built SpendWise",
    description: "Developed a student-centric budgeting web app with expense tracking and smart goal setting.",
    icon: FaAward,
    image: "/20250509_200326.jpg"
  }
];

export default function HackathonExperience() {
  return (
    <section id="hackathons" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Hackathon Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Highlights of my journey in tech competitions and building impactful solutions under pressure.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-white last:border-l-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <hackathon.icon className="text-black text-sm" />
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{hackathon.title}</h3>
                  <span className="text-white font-semibold">{hackathon.position}</span>
                </div>
                <div className="text-gray-400 text-sm mb-4">{hackathon.date}</div>
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300">{hackathon.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
