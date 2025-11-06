import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden" aria-labelledby="hero-heading">
      {/* 3D Animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradients / Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col items-start gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm backdrop-blur-lg shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <Shield size={16} className="text-emerald-400" />
          <span>ANVATRA • IT-аутсорсинг нового уровня</span>
        </div>
        <h1 id="hero-heading" className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Инфраструктура, безопасность и 1С, которые двигают бизнес вперёд
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
          Управляем ИТ как продуктом: строим устойчивую архитектуру, закрываем риски и повышаем скорость работы команд.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#audit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 transition">
            <Rocket size={18} /> Заказать аудит
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 transition">
            Пакеты услуг
          </a>
        </div>
        <div className="mt-6 inline-flex items-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />SLA 24×7</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />KPI и отчётность</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />Security by default</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
