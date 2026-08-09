import TestimonialCard from "../../components/Testimonials/TestimonialCard";
import "./Testimonials.css";

export default function Testimonials() {
   return (
      <section className="testimonials">
         <div className="testimonials-container">
            <div className="testimonials-header">
               <h2 className="testimonials-title">Resultados Reais</h2>
               <p className="testimonials-description">Veja a transformação na vida dos meus pacientes.</p>
            </div>

            <div className="testimonials-grid">
               <TestimonialCard nome="Maria Silva" texto="Os tratamentos mudaram minha vida! Me sinto mais confiante." />
               <TestimonialCard nome="João Santos" texto="Os tratamentos mudaram minha vida! Me sinto mais confiante." />
               <TestimonialCard nome="Ana Oliveira" texto="Os tratamentos mudaram minha vida! Me sinto mais confiante." />
            </div>
         </div>
      </section>
   )
}
