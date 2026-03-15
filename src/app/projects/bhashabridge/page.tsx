"use client";
import CaseStudyPage from "@/components/CaseStudyLayout";

export default function BhashaBridge() {
  return (
    <CaseStudyPage 
      title="BhashaBridge"
      tag="South Indian language learning"
      image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2670&auto=format&fit=crop"
      tech="Kotlin, Jetpack Compose, Node.js, Fastify, Supabase, PostgreSQL, Railway"
      p1={`BhashaBridge is a South Indian language learning Android application designed to teach Telugu, Tamil, Malayalam, and English through an interactive and structured learning system. The platform supports multiple learning directions between languages, allowing users to learn a target language from their native language while exploring similarities between Dravidian languages.

The app focuses on making language learning engaging through flashcards, quizzes, streak tracking, and speech-based pronunciation practice. Its goal is to help learners build vocabulary and comprehension while maintaining daily learning habits through gamified progress systems.`}
      p2={`The primary challenge was designing a system capable of handling multiple language learning directions while maintaining a consistent learning experience. Each word needed to dynamically map to different source and target languages depending on the learning direction selected by the user.

Another challenge was integrating real-time speech pronunciation and building a scalable backend capable of managing lessons, vocabulary data, user progress, streak tracking, and premium content access.

The application was built using Kotlin and Jetpack Compose for the Android frontend, allowing a modern declarative UI and smooth user interactions. A Node.js backend powered by Fastify was implemented to handle API routes efficiently and provide high performance for lesson data, user progress, and authentication.

Supabase with PostgreSQL was used for the database layer to manage structured language data and track learning progress. The backend is deployed using Railway, allowing automatic deployments and reliable scaling as the user base grows.`}
      features={[
        "Multi-direction language learning system",
        "Interactive flashcard learning interface",
        "Quiz-based knowledge reinforcement",
        "Speech pronunciation using text-to-speech",
        "User streaks and XP progress tracking",
        "Freemium model with premium lessons"
      ]}
    />
  );
}
