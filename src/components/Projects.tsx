"use client";
import Link from "next/link";

const projects = [
  { id: 1, title: "BhashaBridge", desc: "Kotlin, Node.js, Fastify, Supabase", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2670&auto=format&fit=crop" },
  { id: 2, title: "SafePill", desc: "Python, Machine Learning, Node.js", img: "https://images.unsplash.com/photo-1584308666744-24d5e16ec8e1?q=80&w=2600&auto=format&fit=crop" },
  { id: 3, title: "ProgressX", desc: "Node.js, Data tracking systems", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop" },
  { id: 4, title: "Mitr", desc: "JavaScript, Node.js, AI APIs", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop" },
  { id: 5, title: "Cognify", desc: "Python, Educational AI", img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2664&auto=format&fit=crop" },
  { id: 6, title: "NyayaVaani", desc: "NLP, AI Systems, Web App", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2712&auto=format&fit=crop" },
  { id: 7, title: "Sansar", desc: "Web Development, Node.js, DBs", img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2647&auto=format&fit=crop" }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-32 px-8 md:px-24 z-20 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 tracking-tight text-white">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p) => (
            <div key={p.id} className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={p.img} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-neutral-400 mb-2 uppercase tracking-widest text-xs font-bold">{p.desc}</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">{p.title}</h3>
                  <Link href={`/projects/${p.title.toLowerCase()}`} className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium">
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
