"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function CaseStudyPage({ title, tag, image, tech, p1, p2, features }: { title: string, tag: string, image: string, tech: string, p1: string, p2: string, features?: string[] }) {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/20">
      {/* Hero Header */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
        </div>
        
        <div className="z-10 text-center px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-semibold cursor-pointer">
              <ArrowLeft size={16} /> Back to Work
            </Link>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 drop-shadow-xl">{title}</h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto">{tag}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="max-w-4xl mx-auto px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="border border-white/10 rounded-3xl p-8 mb-16 bg-white/5 backdrop-blur-md">
            <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-bold mb-4">Tech Stack</h3>
            <p className="text-lg text-neutral-200">{tech}</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-neutral-300 leading-relaxed mb-8 whitespace-pre-wrap">{p1}</p>
            
            <h2 className="text-3xl font-bold mb-6 mt-16">The Challenge & Solution</h2>
            <p className="text-neutral-300 leading-relaxed mb-12 whitespace-pre-wrap">{p2}</p>

            {features && features.length > 0 && (
              <>
                <h2 className="text-3xl font-bold mb-6 mt-16">Key Features</h2>
                <ul className="list-disc pl-6 text-neutral-300 leading-relaxed mb-16 space-y-2">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
