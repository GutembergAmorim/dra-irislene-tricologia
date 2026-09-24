import TestimonialCard from "../../components/Testimonials/TestimonialCard";
import "./Testimonials.css";

export default function Testimonials() {
   return (
      <section className="testimonials" id="depoimentos">
         <div className="testimonials-container">
            <div className="testimonials-header">
               <h2 className="testimonials-title">Resultados Reais</h2>
               <p className="testimonials-description">Veja a transformação na vida dos meus pacientes.</p>
            </div>

            <div className="testimonials-grid">
               <TestimonialCard nome="Paciente A" texto="Eu já tinha tentado vários shampoos e vitaminas sem sucesso. A queda estava acabando com a minha autoestima. Depois de iniciar o protocolo correto aqui, meu cabelo finalmente parou de cair e os fios novos já estão visíveis. Mudou minha vida!" />
               <TestimonialCard nome="Paciente B" texto="Tinha muito receio de fazer a Mesoterapia, mas o atendimento me passou tanta segurança que resolvi tentar. O procedimento é super tranquilo e, em poucas sessões, meu couro cabeludo é outro. Indico de olhos fechados!" />
               <TestimonialCard nome="Paciente C" texto="A avaliação foi extremamente minuciosa. Entender a causa exata do meu problema me deu a tranquilidade que eu precisava. O tratamento de Luz Pulsada tem trazido resultados incríveis." />
            </div>
         </div>
      </section>
   )
}
