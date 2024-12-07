import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { FloatingIcons } from './components/ui/FloatingIcons';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="relative">
        <FloatingIcons />
        <Hero />
      </main>
    </div>
  );
}

export default App;