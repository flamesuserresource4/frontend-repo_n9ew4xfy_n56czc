import React from 'react';

const AboutContacts = () => {
  return (
    <section id="about" className="bg-neutral-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">О нас</h2>
          <p className="text-white/70 mb-6 max-w-2xl">ANVATRA — команда инженеров с продуктовым мышлением. Проектируем, поддерживаем и развиваем ИТ‑среды для бизнеса: от рабочих мест и 1С до инфраструктуры в облаках и on‑prem.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold">10+ лет</div>
              <div className="text-white/70 text-sm">опыта инженеров</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold">50+ компаний</div>
              <div className="text-white/70 text-sm">в разных отраслях</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold">1С, Microsoft, Linux</div>
              <div className="text-white/70 text-sm">сертификации и партнёрства</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold">SLA 24×7</div>
              <div className="text-white/70 text-sm">и прозрачные отчёты</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">Принципы работы</div>
            <ul className="list-disc pl-5 text-white/80 space-y-1">
              <li>Безопасность по умолчанию</li>
              <li>Измеримые KPI и ответственность</li>
              <li>Автоматизация и документация</li>
              <li>Открытая коммуникация</li>
            </ul>
          </div>
        </div>

        <div id="contacts">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-white/70 mb-6">Москва и область. Работает удалённо по всей России.</p>
          <div className="space-y-2 mb-6">
            <div><span className="text-white/60">Телефон:</span> <a className="hover:underline" href="tel:+74950000000">+7 (495) 000-00-00</a></div>
            <div><span className="text-white/60">Email:</span> <a className="hover:underline" href="mailto:hello@anvatra.ru">hello@anvatra.ru</a></div>
            <div><span className="text-white/60">Мессенджеры:</span> <a className="hover:underline" href="#">Telegram</a> · <a className="hover:underline" href="#">WhatsApp</a></div>
          </div>

          <form id="audit" onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="text-xl font-semibold">Заявка на аудит</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400" placeholder="Имя" required />
              <input className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400" placeholder="Телефон или email" required />
            </div>
            <textarea className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400" rows="4" placeholder="Кратко опишите задачи"></textarea>
            <button className="w-full sm:w-auto rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 transition">Отправить</button>
            <p className="text-white/60 text-xs">Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.</p>
          </form>

          <div className="mt-8">
            <div className="text-sm text-white/70 mb-2">Зона обслуживания</div>
            <div className="h-64 w-full rounded-2xl overflow-hidden border border-white/10">
              <iframe title="Карта Москвы" src="https://yandex.com/map-widget/v1/?um=constructor%3A6e584d5d7c7e8e3b9b5da0c2f1f6b0c4c8c7d1f1a3f2a0b9f1a2f3c4d5e6&source=constructor" className="w-full h-full" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContacts;
