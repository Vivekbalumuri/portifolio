"use client";
import CaseStudyPage from "@/components/CaseStudyLayout";

export default function ProgressX() {
  return (
    <CaseStudyPage 
      title="ProgressX"
      tag="Productivity and personal development"
      image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop"
      tech="JavaScript, Node.js, Data tracking systems, Web development"
      p1={`ProgressX is a productivity and personal development platform designed to help individuals track daily habits, goals, and long-term progress. The platform focuses on motivating users through streak tracking, performance analytics, and goal visualization.

The system encourages consistent personal growth by combining habit tracking with visual progress indicators and performance metrics.`}
      p2={`The main challenge was designing a system that motivates users to maintain consistency while also providing meaningful insights into their productivity patterns. Habit tracking systems often fail because users lose motivation over time.

ProgressX was designed with a streak-based motivation model combined with analytics that help users understand their progress over time. The platform tracks activities, goals, and daily achievements while presenting the data in an intuitive and visually engaging interface.`}
      features={[
        "Habit and goal tracking",
        "Streak-based motivation system",
        "Productivity analytics dashboard",
        "Progress visualization tools",
        "Personal development insights"
      ]}
    />
  );
}
