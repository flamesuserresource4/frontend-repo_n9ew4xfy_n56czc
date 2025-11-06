import React from 'react';

const cases = [
  {
    industry: 'Производство',
    problem: 'Частые простои из-за падения сервера 1С и нестабильной сети на складе.',
    solution: 'Развернули кластер 1С на двух серверах, отказоустойчивую БД, сегментировали сеть, внедрили мониторинг и резервное копирование.',
    result: 'Снижение простоев на 92%, ускорение операций в 1С на 45%, окупаемость проекта — 4,5 месяца.'
  },
  {
    industry: 'Клиника',
    problem: 'Несоблюдение требований по защите ПДн, риски проверок и утечек, устаревшая ЛИС.',
    solution: 'Внедрили DLP/EDR, разграничили доступ, настроили шифрование и резервирование, обновили ЛИС и интеграции.',
    result: 'Соответствие 152‑ФЗ и приказам ФСТЭК, 0 инцидентов за 12 мес., скорость регистрации анализов +38%.'
  },
  {
    industry: 'Юрфирма',
    problem: 'Медленная работа 1С и удалённый доступ через небезопасные каналы.',
    solution: 'Оптимизировали сервер 1С, настроили VPN и MFA, внедрили журналирование и резервную стратегию 3-2-1.',
    result: 'Скорость в 1С выросла на 52%, удалённые сессии стабильны, риск утечек снижен на 80%.'
  }
];

const Cases = () => {
  return (
    <section id="cases" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Кейсы</h2>
        <p className="text-white/70 mb-10 max-w-3xl">Конкретные результаты по отраслям: проблема → решение → измеримый эффект.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.industry} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-emerald-400 text-sm font-semibold mb-1">{c.industry}</div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold">Проблема</div>
                  <p className="text-white/70">{c.problem}</p>
                </div>
                <div>
                  <div className="font-semibold">Решение</div>
                  <p className="text-white/70">{c.solution}</p>
                </div>
                <div>
                  <div className="font-semibold">Результат</div>
                  <p className="text-white/70">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
