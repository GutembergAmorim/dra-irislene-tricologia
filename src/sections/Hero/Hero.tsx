import Button from "../../components/Button/Button";
import './Hero.css';

export default function Hero() {
   return (
      <section className="hero">
         <div className="hero-container">

            <div className="hero-content">
               <h1>Saude capilar com ciencia, cuidado e acolhimento</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat officia soluta eaque laborum reprehenderit, velit dolor atque pariatur suscipit nobis! Non consequuntur veritatis exercitationem, aliquid at quam facilis distinctio?
               </p>
               <div className="hero-actions">
                  <Button texto="Agendar Consulta" />
               </div>
            </div>

            <div className="hero-image">
               <div className="image-placeholder">
                  <span>[Espaco para foto da Dra. Irislene Brasil]</span>
               </div>
            </div>
         </div>
      </section>
   );
}