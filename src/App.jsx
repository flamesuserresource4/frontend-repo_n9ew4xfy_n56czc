import React from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import Cases from './components/Cases';
import AboutContacts from './components/AboutContacts';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">ANVATRA</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#problems" className="hover:text-white">Задачи</a>
            <a href="#services" className="hover:text-white">Услуги</a>
            <a href="#cases" className="hover:text-white">Кейсы</a>
            <a href="#about" className="hover:text-white">О нас</a>
            <a href="#contacts" className="hover:text-white">Контакты</a>
            <a href="#audit" className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2">Аудит</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Problems />
        <Services />
        <Cases />
        <AboutContacts />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} ANVATRA. Все права защищены.</div>
          <div>Политика конфиденциальности</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
