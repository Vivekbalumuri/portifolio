"use client";
import CaseStudyPage from "@/components/CaseStudyLayout";

export default function Cognify() {
  return (
    <CaseStudyPage 
      title="Cognify"
      tag="AI learning assistant"
      image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2664&auto=format&fit=crop"
      tech="Python, Machine Learning, Educational AI"
      p1={`Cognify is an AI-based learning assistant designed to help students understand complex academic concepts through simplified explanations and adaptive learning techniques.

The platform aims to improve learning efficiency by providing intelligent explanations and learning guidance tailored to individual users.`}
      p2={`Students often struggle with complex subjects because explanations are either too technical or not personalized. The challenge was creating a system capable of delivering simplified explanations while adapting to different learning styles.

Cognify uses machine learning models and structured educational datasets to generate simplified explanations and adaptive learning paths. The platform focuses on breaking down difficult topics into smaller understandable segments.`}
      features={[
        "AI-powered concept explanations",
        "Adaptive learning assistance",
        "Simplified educational content",
        "Personalized learning guidance"
      ]}
    />
  );
}
