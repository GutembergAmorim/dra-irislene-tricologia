import './TestimonialCard.css';

interface TestimonialProps {
   nome: string;
   texto: string;
}

export default function TestimonialCard({ nome, texto }: TestimonialProps) {
   return (
      <div className="testimonial">
         <h3 className="testimonial-nome">{nome}</h3>
         <p className="testimonial-texto">{texto}</p>
      </div>
   )
}