'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center glow-text">About Me</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 rounded-full overflow-hidden"
            >
              <Image
                src="/20250208_134325.jpg"
                alt="Hardik Varshney"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <p className="text-gray-300 mb-4">
                I'm a B.Tech student from GL Bajaj Institute of Technology and Management, deeply passionate about using technology to solve real-world problems. From winning national hackathons to building AI and IoT-based solutions, I actively seek innovation through code. I'm currently exploring Web Development, AI/ML, IoT, Web3, and preparing for SSC CGL, ISRO, and DRDO. I enjoy public speaking, organizing events, and building things that matter.
              </p>
              <p className="text-gray-300 mb-4">
                <b>College:</b> GL Bajaj Institute of Technology and Management, Noida<br/>
                <b>Degree:</b> B.Tech (2nd Year, 4th Semester)<br/>
                <b>Languages:</b> English, Hindi
              </p>
              <p className="text-gray-300">
                <b>Location:</b> Gr, Noida, Uttar Pradesh, India
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
