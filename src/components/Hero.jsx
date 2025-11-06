import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col items-start gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <Shield size={16} className="text-emerald-400" />
          <span>АНВАТРА • IT-аутсорсинг для бизнеса</span>
        </div>
        <h1 id="hero-heading" className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Современная ИТ-поддержка, безопасность и инфраструктура для компаний
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
          Мы берём на себя ИТ, чтобы вы масштабировали бизнес: поддержка 24/7, 1С, серверы, кибербезопасность и облака — под ключ.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#audit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 transition">
            <Rocket size={18} /> Заказать аудит
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 transition">
            Пакеты услуг
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
