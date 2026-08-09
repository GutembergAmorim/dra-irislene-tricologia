import './WhyChoose.css';

export default function WhyChoose() {
   return (
      <section className='why-choose'>
         <div className='why-choose-container'>
            <div className="why-choose-header">
               <h2>Por que escolher a Dra. Irislene?</h2>
               <p>O equilibrio perfeito entre embasamento cinentífico e cuidado humano.</p>
            </div>

            <div className="why-choose-grid">

               <div className="feature-item">
                  <h3 className="feature-titulo">Atendimento Humanizado</h3>
                  <p className="feature-descricao">Ouvimos sua história e entendemos suas necessidades antes de propor qualquer tratamento. Cada paciente é único</p>
               </div>

               <div className="feature-item">
                  <h3 className="feature-titulo">Tecnologia de ponta</h3>
                  <p className="feature-descricao">Utilizamos os equipamentos de protocolos mais modernos e seguros disponíveis na tricologia atual</p>
               </div>

               <div className="feature-item">
                  <h3 className="feature-titulo">Medicina Baseada em Evidencias</h3>
                  <p className="feature-descricao">Tratamentos comprovados cientificamente, sem falsas promessas. Focamos em resultados reais e duradouros.</p>
               </div>

            </div>
         </div>
      </section>
   )
}

