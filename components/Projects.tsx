'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "AI Scheme Recommender (Winner - IIIT Delhi Hackathon)",
    description: "Built an AI-based agent that recommends government schemes based on a user profile. Integrated voice assistant, FastAPI backend, and Supabase (attempted). Won first prize among 50+ teams.",
    image: "/HomePageSunShare.png",
    technologies: ["AI", "FastAPI", "Supabase", "Voice Assistant"],
    githubUrl: "https://github.com/hardikvarshney5/ai-scheme-recommender",
    liveUrl: "#"
  },
  {
    title: "SpendWise – Budgeting Tool for Students",
    description: "Web app to help students track and manage spending. Included expense insights, budget planning, and visual charts. Featured in college hackathon.",
    image: "/Screenshot 2025-05-09 201944.png",
    technologies: ["React", "Charts", "Budgeting"],
    githubUrl: "",
    liveUrl: "https://coding-panda.vercel.app/"
  },
  {
    title: "SunShare – Community Solar Investment Platform",
    description: "Built for a hackathon around sustainability. Users can buy shares in solar projects and track energy savings. INR-based financial visualization included.",
    image: "/HomePageSunShare.png",
    technologies: ["Web3", "Sustainability", "Finance"],
    githubUrl: "https://github.com/hardikvarshney5/sunshare",
    liveUrl: "https://eagle-bitz-f64p.vercel.app/"
  },
 
  {
    title: "AI Career Mapping Tool – for WsCube Hackathon",
    description: "Career recommendation AI tool for undergraduates. Personalized journey mapping based on interests and skills.",
    image: "/profile.jpg",
    technologies: ["AI", "Career Mapping"],
    githubUrl: "https://github.com/hardikvarshney5/ai-career-mapping",
    liveUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 glow-text">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
