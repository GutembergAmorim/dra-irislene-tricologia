import Button from "../../components/Button/Button";
import './Hero.css';
import heroPhoto from '../../assets/hero-photo.jpg';

export default function Hero() {
   return (
      <section className="hero">
         <div className="hero-container">

            <div className="hero-content">
               <h1 className="hero-title">Recupere a força do seu cabelo e a sua autoestima.</h1>
               <p className="hero-credentials">Fisioterapeuta especialista em Fisioterapia Dermatofuncional e Tricologia Clínica</p>
               <p className="hero-credentials">CREFITO 327710</p>
               <p className="hero-subtitle">
                  Descubra a causa exata do seu problema capilar e inicie um protocolo personalizado com tecnologias avançadas. Volte a ter confiança ao olhar no espelho.
               </p>
               <div className="hero-actions">
                  <Button texto="Agendar Minha Avaliação" href="#contato" />
                  <div className="hero-social-proof">
                     <span className="hero-stars">⭐⭐⭐⭐⭐</span>
                     <span className="hero-social-text">Junte-se a dezenas de pacientes que recuperaram a autoestima</span>
                  </div>
               </div>
            </div>

            <div className="hero-image-container">
               <img src={heroPhoto} alt="Especialista em Saúde Capilar" className="hero-image" />
            </div>
         </div>
      </section>
   );
}