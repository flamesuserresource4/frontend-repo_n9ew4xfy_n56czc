import React from 'react';

const tiers = [
  {
    name: 'Базовый IT-аутсорсинг',
    price: 'от 25 000 ₽/мес',
    features: [
      'Сопровождение рабочих мест',
      'Мониторинг и Help Desk 8×5',
      'Обновления и антивирус',
      'Резервное копирование базово'
    ]
  },
  {
    name: 'Безопасность и 1С',
    price: 'от 49 000 ₽/мес',
    features: [
      'Поддержка 1С и серверов БД',
      'DLP/EDR и контроль доступа',
      'Журналы безопасности, SIEM',
      'Резервирование и тест восстановления'
    ],
    highlight: true
  },
  {
    name: 'Инфраструктура под ключ',
    price: 'от 89 000 ₽/мес',
    features: [
      'Проектирование и миграции',
      'Виртуализация/облака, отказоустойчивость',
      'SD-WAN/VPN, Wi‑Fi, VoIP',
      'SLA 24×7 и выделенный инженер'
    ]
  }
];

const compare = [
  { feature: 'Help Desk', base: '8×5', sec: '8×5', pro: '24×7' },
  { feature: '1С и базы данных', base: '—', sec: 'Да', pro: 'Да' },
  { feature: 'Кибербезопасность', base: 'Базовая', sec: 'Расширенная', pro: 'Максимальная' },
  { feature: 'Резервное копирование', base: 'Базовое', sec: 'Тест восстановления', pro: 'Георезерв' },
  { feature: 'Инфраструктурные проекты', base: '—', sec: '—', pro: 'Да' }
];

const Services = () => {
  return (
    <section id="services" className="bg-neutral-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Пакеты услуг</h2>
        <p className="text-white/70 mb-10 max-w-3xl">Выбирайте формат, который подходит бизнесу сегодня — масштабируем вместе с ростом задач.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 backdrop-blur ${t.highlight ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 bg-white/5'}`}>
              <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
              <div className="text-3xl font-bold mb-4">{t.price}</div>
              <ul className="space-y-2 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#audit" className={`inline-flex items-center justify-center w-full rounded-lg px-4 py-2 font-semibold transition ${t.highlight ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-white/10 hover:bg-white/20'}`}>Выбрать</a>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="px-6 py-4 font-semibold">Сравнение возможностей</div>
          <div className="divide-y divide-white/10">
            {compare.map((row) => (
              <div key={row.feature} className="grid grid-cols-2 md:grid-cols-4 px-6 py-3 text-sm">
                <div className="font-medium">{row.feature}</div>
                <div className="text-white/70">{row.base}</div>
                <div className="text-white/70 hidden md:block">{row.sec}</div>
                <div className="text-white/70 hidden md:block">{row.pro}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-white/80">
          <div className="font-semibold mb-2">Дополнительные услуги: разовые работы</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Аудит ИБ и соответствие 152-ФЗ</li>
            <li>Внедрение 1С и миграция баз</li>
            <li>Настройка серверов, виртуализация, сети</li>
            <li>Решение инцидентов и восстановление после атак</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
