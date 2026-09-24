import './About.css';
import Button from "../../components/Button/Button";
import draIrislenePhoto from "../../assets/dra-irislene.jpg";

export default function About () {
   return (
      <section className='about' id='sobre'>
         <div className='about-container'>            
               <div className="about-media-placeholder">
                  <img src={draIrislenePhoto} alt="Dra. Irislene Brasil" className="about-image-photo" />
               </div>
               <div className="about-content">
                  <h2 className="section-headline">Dedicação absoluta à saúde do seu couro cabeludo</h2>
                  <p className="about-subheadline">Conheça a especialista por trás dos resultados.</p>
                  
                  <div className="about-text">
                     <p>
                        Sou especialista apaixonada por devolver não apenas fios de cabelo, mas a autoconfiança de cada paciente que senta na minha cadeira. Entendo que a queda capilar afeta profundamente a autoestima. 
                     </p>
                     <p>
                        Por isso, meu foco não é apenas prescrever produtos genéricos, mas investigar a fundo o seu organismo e criar um protocolo exclusivo, combinando o que há de mais moderno na tricologia. Você não precisa lidar com esse problema sozinho(a).
                     </p>
                  </div>
                  
                  <div className="about-actions">
                     <Button texto="Agendar Minha Avaliação" href="#contato" />
                  </div>
               </div>            
         </div>
      </section>
   )
}