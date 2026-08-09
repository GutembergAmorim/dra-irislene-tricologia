import './BeforeAfter.css';

export default function BeforeAfter() {

   const placeholders =[1, 2, 3, 4, 5, 6];
   
      return (
         <section className="before-after">
            <div className="before-after-container">
               <div className="before-after-header">
                  <h2>Resultados Reais</h2>
                  <p>Acompanhe a evolucao clínica dos nossos pacientes</p>
               </div>

               <div className="before-after-grid">
                  {placeholders.map((numero) => (
                     <div key={numero} className="before-after-placeholder">
                        <span>Resultados {numero}</span>
                     </div>
                  ))}
               </div>

            </div>
         </section>
   )
}