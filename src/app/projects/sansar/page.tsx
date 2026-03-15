"use client";
import CaseStudyPage from "@/components/CaseStudyLayout";

export default function Sansar() {
  return (
    <CaseStudyPage 
      title="Sansar"
      tag="Social impact collaboration"
      image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2647&auto=format&fit=crop"
      tech="Web Development, Node.js, Database Systems"
      p1={`Sansar is a social impact platform designed to connect individuals and communities to collaborate on meaningful initiatives. The system focuses on enabling knowledge sharing, social collaboration, and collective problem solving.`}
      p2={`Many social initiatives struggle with coordination and communication between individuals who want to contribute to meaningful causes. The challenge was designing a platform that encourages collaboration and information exchange.

Sansar was designed as a community-driven platform where users can share ideas, collaborate on projects, and contribute knowledge. The system architecture focuses on scalable communication and content sharing features.`}
      features={[
        "Community collaboration platform",
        "Knowledge sharing system",
        "Social impact project coordination",
        "Community-driven initiatives"
      ]}
    />
  );
}
