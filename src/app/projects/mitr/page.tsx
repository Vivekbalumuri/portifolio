"use client";
import CaseStudyPage from "@/components/CaseStudyLayout";

export default function Mitr() {
  return (
    <CaseStudyPage 
      title="Mitr"
      tag="AI-powered personal assistant"
      image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop"
      tech="JavaScript, Node.js, AI APIs"
      p1={`Mitr is an AI-powered digital assistant designed to help users manage tasks, reminders, and daily activities through conversational interaction. The system aims to simplify productivity management by allowing users to interact with a smart assistant that understands tasks and schedules.`}
      p2={`The primary challenge was designing an assistant capable of interpreting user commands and converting them into structured actions such as reminders, task lists, and productivity suggestions.

The system integrates AI-based conversational interfaces with a task management engine. Natural language processing allows users to interact with the assistant in a more natural way while the backend system manages task scheduling and reminders.`}
      features={[
        "AI-powered conversational assistant",
        "Task and reminder management",
        "Smart productivity suggestions",
        "Natural language interaction"
      ]}
    />
  );
}
