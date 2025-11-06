import React from 'react';
import { Factory, Hospital, Scale } from 'lucide-react';

const items = [
  {
    icon: Factory,
    title: 'Производства',
    text: 'Поддержка оборудования, MES/ERP, сеть и безопасность на линии. Минимум простоев, SLA и мониторинг 24/7.'
  },
  {
    icon: Hospital,
    title: 'Клиники',
    text: 'Медицинские ИС, интеграции с ЛИС/МИС, защита ПДн, отказоустойчивость и резервное копирование.'
  },
  {
    icon: Scale,
    title: 'Юрфирмы',
    text: 'Надёжная работа 1С, документооборот, защищённый удалённый доступ, DLP и контроль доступа.'
  }
];

const Problems = () => {
  return (
    <section id="problems" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Какие задачи решаем</h2>
        <p className="text-white/70 mb-10 max-w-3xl">Работаем с ключевыми отраслями: знаем процессы, требования безопасности и ПО. Настраиваем так, чтобы всё просто работало.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-12 w-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
