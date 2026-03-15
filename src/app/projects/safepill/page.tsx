"use client";
import CaseStudyPage from "@/components/CaseStudyLayout";

export default function SafePill() {
  return (
    <CaseStudyPage 
      title="SafePill"
      tag="AI-powered medicine safety platform"
      image="https://images.unsplash.com/photo-1584308666744-24d5e16ec8e1?q=80&w=2600&auto=format&fit=crop"
      tech="Python, Machine Learning, Node.js, Healthcare datasets"
      p1={`SafePill is a healthcare-focused AI platform designed to help users verify medication safety and understand potential drug interactions. The system aims to make medical information more accessible and understandable for everyday users.

The platform provides users with guidance on medicine usage, dosage awareness, and interaction risks to improve medication safety and reduce preventable health issues.`}
      p2={`One of the key challenges was structuring complex pharmaceutical data in a way that could be easily interpreted by users without medical backgrounds. Another challenge was ensuring the system could analyze multiple medications simultaneously to detect possible interactions.

The platform utilizes machine learning techniques and healthcare datasets to analyze medication combinations and provide safety insights. A backend processing layer was designed to evaluate drug interactions and return simplified explanations for users.

The system architecture focuses on scalability and modular design, allowing integration with larger healthcare systems in the future.`}
      features={[
        "Drug interaction detection",
        "Medication verification system",
        "Dosage awareness guidance",
        "Simplified medical explanations",
        "AI-assisted healthcare insights"
      ]}
    />
  );
}
