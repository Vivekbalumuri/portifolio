"use client";
import CaseStudyPage from "@/components/CaseStudyLayout";

export default function NyayaVaani() {
  return (
    <CaseStudyPage 
      title="NyayaVaani"
      tag="AI-powered legal assistance platform"
      image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2712&auto=format&fit=crop"
      tech="Natural Language Processing, AI Systems, Web Application Development"
      p1={`NyayaVaani is an AI-driven legal assistance platform designed to help citizens understand legal rights, procedures, and basic legal concepts. The system aims to make legal information more accessible to individuals who may not have easy access to professional legal guidance.`}
      p2={`Legal information is often complex and difficult for non-lawyers to understand. The challenge was to create a system capable of simplifying legal concepts while maintaining accuracy.

The platform utilizes natural language processing to interpret user questions and provide simplified legal explanations. By structuring legal knowledge into understandable formats, the system helps bridge the gap between legal information and public accessibility.`}
      features={[
        "AI-powered legal guidance",
        "Simplified explanations of legal procedures",
        "Natural language interaction",
        "Accessible legal knowledge system"
      ]}
    />
  );
}
