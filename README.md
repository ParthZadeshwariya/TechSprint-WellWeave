# Well-Weave AI


[![React](https://img.shields.io/badge/React-18.2.0-blue.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-green.svg?logo=vite)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Google%20Gemini-1.5--flash-orange.svg?logo=google)](https://ai.google.dev/)

**Well-Weave AI** is an innovative mental wellness journaling app powered by AI. Users can pour their thoughts into a digital journal, where advanced AI analysis (via Google Gemini) extracts emotions, concepts, people, and triggers to build a **dynamic mind graph**.  

Visualize your emotional patterns, explore connections, and chat with an empathetic AI guide for insights, advice, and support. For serious topics like depression or suicidal thoughts, the guide provides **helpline resources** to ensure user safety.

This full-stack React app combines intuitive UI/UX with AI-driven personalization to foster **self-awareness and emotional growth**.

---

## ✨ Features

- **AI-Powered Journaling**: Write or speak entries; Gemini AI analyzes text to identify emotions (e.g., anxiety, joy), people, activities, and triggers.  
- **Dynamic Mind Graph**: Interactive force-directed visualization of thoughts using custom layout algorithms. Nodes spread out uncluttered, with animations (fade-in, pulse, scale) and zoom/pan support.  
- **AI Guide Chatbot**: Converse about your graph (e.g., *"What triggers my stress?"*), get personalized advice, and receive empathetic responses. Detects serious mental health topics and provides helplines (e.g., US: **988 Suicide Prevention Lifeline**).  
- **Voice Input**: Record voice notes with placeholder speech-to-text (extensible to real STT).  
- **Privacy-Focused**: Client-side processing; no data stored server-side (local state only).  
- **Responsive UI**: Built with Tailwind CSS and shadcn/ui for a modern, accessible design.  

---

## 🛠 Tech Stack

| Category            | Technologies |
|---------------------|--------------------------------------------------|
| **Frontend**        | React 18, Vite, TypeScript |
| **UI Library**      | shadcn/ui, Tailwind CSS, Lucide React Icons |
| **AI/ML**           | Google Gemini API (`@google/generative-ai`) |
| **Visualization**   | Custom force-directed layout, React Spring, React Zoom Pan Pinch |
| **State Management**| React Hooks (`useState`, `useEffect`) |
| **Other**           | React Toast (notifications), Error Boundaries |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** and npm/yarn.
- **Google Gemini API key** (free tier available): [Get one here](https://aistudio.google.com/app/apikey).

### Installation

```bash
# Clone the repo
git clone https://github.com/ParthZadeshwariya/Well-Weave-AI.git
cd Well-Weave-AI

# Install dependencies
npm install

# Run the app
npm run dev
```
Usage Guidance: https://youtu.be/zIaxagxsLeY?si=Fv5TaOQ0jIbSDx99