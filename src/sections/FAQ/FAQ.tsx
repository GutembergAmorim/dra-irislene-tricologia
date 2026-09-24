import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "O tratamento dói?",
      answer: "A maioria dos nossos protocolos, como a Mesoterapia e a Luz Pulsada, são minimamente invasivos e muito bem tolerados. O conforto do paciente é uma das nossas prioridades durante todo o atendimento."
    },
    {
      question: "Quanto tempo demora para ver os resultados?",
      answer: "O ciclo de crescimento capilar é gradual. Em geral, nossos pacientes começam a notar redução na queda nas primeiras semanas e o surgimento de novos fios a partir do segundo a terceiro mês de tratamento."
    },
    {
      question: "O tratamento é indicado para o meu caso?",
      answer: "Cada caso de alopecia ou queda capilar é único. Por isso, o primeiro passo é sempre uma avaliação detalhada onde investigamos a causa raiz (hormonal, nutricional, genética) para prescrever exatamente o que o seu couro cabeludo precisa."
    },
    {
      question: "Os resultados são definitivos?",
      answer: "O tratamento capilar exige manutenção, pois condições como a alopecia androgenética são crônicas. No entanto, com o protocolo correto e os devidos cuidados em casa, conseguimos estabilizar a queda e manter a saúde dos fios a longo prazo."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-headline">Perguntas Frequentes</h2>
          <p className="section-subheadline">
            Tire suas dúvidas sobre os nossos tratamentos capilares.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-toggle-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer-container">
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
