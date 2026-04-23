import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Language } from '../../types';

interface FaqProps {
  currentLang: Language;
  isDark: boolean;
}

export const Faq: React.FC<FaqProps> = ({ currentLang, isDark }) => {
  const faqs =
    currentLang === 'az'
      ? [
          {
            question: 'AlisCore bizneslərə nədə kömək edir?',
            answer:
              'AlisCore custom software, workflow automation, legacy modernization və rəqəmsal əməliyyatların yaxşılaşdırılması üzrə kiçik və orta bizneslərə kömək edir.',
          },
          {
            question: 'AlisCore daha çox kimlər üçün uyğundur?',
            answer:
              'Əməliyyat səmərəliliyi artırmaq, yeni məhsul çıxarmaq və ya kritik sistemləri modernləşdirmək istəyən böyüyən şirkətlər üçün daha uyğundur.',
          },
          {
            question: 'Layihələr adətən necə başlayır?',
            answer:
              'Əksər əməkdaşlıqlar discovery call ilə başlayır. Orada biznes məqsədləri, bottleneck-lər, timeline və ən uyğun texniki yanaşma müzakirə olunur.',
          },
        ]
      : currentLang === 'es'
        ? [
            {
              question: 'En que ayuda AlisCore a las empresas?',
              answer:
                'AlisCore ayuda a pequenas y medianas empresas con software a medida, automatizacion de flujos, modernizacion legacy y mejora de operaciones digitales.',
            },
            {
              question: 'Para quien es mejor AlisCore?',
              answer:
                'Es ideal para empresas en crecimiento que necesitan un socio tecnologico para mejorar eficiencia, lanzar productos o modernizar sistemas criticos.',
            },
            {
              question: 'Como suelen empezar los proyectos?',
              answer:
                'La mayoria empieza con una discovery call para revisar objetivos, cuellos de botella, plazos y el mejor enfoque tecnico.',
            },
          ]
        : [
            {
              question: 'What does AlisCore help businesses with?',
              answer:
                'AlisCore helps small and mid-sized businesses build custom software, automate workflows, modernize legacy systems, and improve digital operations.',
            },
            {
              question: 'Who is AlisCore best suited for?',
              answer:
                'AlisCore is best suited for growing businesses that need a strategic technology partner to improve efficiency, launch new products, or modernize business-critical systems.',
            },
            {
              question: 'How do projects usually start?',
              answer:
                'Most engagements start with a discovery call where we review business goals, current bottlenecks, timelines, and the best technical approach.',
            },
          ];

  return (
    <section id="faq" className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950'
              : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-50'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {currentLang === 'az' ? 'FAQ' : currentLang === 'es' ? 'FAQ' : 'FAQ'}
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            {currentLang === 'az'
              ? 'Lead qərarından əvvəl ən çox verilən suallar'
              : currentLang === 'es'
                ? 'Preguntas comunes antes de contactar'
                : 'Common questions before reaching out'}
          </h2>
          <p className={`mx-auto mt-5 max-w-3xl text-lg leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {currentLang === 'az'
              ? 'Bu hissə alıcı tərəfdə ən tipik etiraz və qeyri-müəyyənlikləri azaltmaq üçündür.'
              : currentLang === 'es'
                ? 'Esta seccion reduce objeciones y dudas frecuentes antes del contacto.'
                : 'This section is designed to reduce common objections and uncertainty before a lead reaches out.'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <article
              key={item.question}
              className={`rounded-3xl p-7 ${
                isDark
                  ? 'glass-effect-dark border border-zinc-800'
                  : 'glass-effect border border-white/50 shadow-lg'
              }`}
            >
              <div className="flex items-start gap-3">
                <ChevronRight className={`mt-1 h-5 w-5 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`} />
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>{item.question}</h3>
                  <p className={`mt-3 leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
