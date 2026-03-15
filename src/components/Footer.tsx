"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="w-full bg-[#121212] pt-32 pb-12 px-8 md:px-24 border-t border-white/10 z-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white">Let&apos;s Work <br/><span className="text-neutral-500">Together.</span></h2>
          <a href="mailto:balumurivivek2678@gmail.com" className="group relative inline-flex items-center gap-4 text-2xl md:text-3xl font-medium text-white hover:text-neutral-300 transition-colors">
            balumurivivek2678@gmail.com
            <span className="block w-full h-[2px] bg-white absolute -bottom-2 left-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </motion.div>

        <footer className="w-full flex flex-col md:flex-row items-center justify-between text-neutral-400 gap-6 pt-12 border-t border-white/10">
          <p className="text-sm">© {new Date().getFullYear()} Vivek Balumuri. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Vivekbalumuri" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/balumuri-vivek-gowd-9a2246329/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:balumurivivek2678@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
