'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY, { stiffness: 50, damping: 20 });
  const parallaxY = useTransform(ySpring, [0, 300], [0, -100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 bg-black opacity-50 z-0"
      ></motion.div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Hardik Varshney <span className="inline-block">👋</span>
          </motion.h1>

          <div className="h-12 mb-6 flex justify-center items-center">
            <TypeAnimation
              sequence={[
                'Web Developer',
                1500,
                'AI Explorer',
                1500,
                'Hackathon Winner',
                1500,
                'IoT & Web3 Enthusiast',
                1500,
              ]}
              wrapper="span"
              speed={40}
              className="text-xl md:text-2xl text-white font-semibold"
              repeat={Infinity}
            />
          </div>

          <motion.p 
            className="text-base md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Developer | AI Explorer | Hackathon Winner | IoT & Web3 Enthusiast
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">View Projects</a>
            <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">Contact Me</a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="https://github.com/Hardik-1226" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-500 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/hardik-varshney-83052127b" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://x.com/H_var25" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-500 transition-colors">
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Starry meteor background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [0, -50],
              y: [0, 100],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}
