import Card from "../../components/Card/Card";
import './Specialties.css';

export default function Specialties() {
   return (
      <section className="specialties" id="especialidades">
         <div className="specialties-container">
            <div className="specialties-header">
               <h2>Tratamento Especializados</h2>
               <p>Conheca as áreas de atuacao pra recuperar a saúde dos seus cabelos.</p>
            </div>

            <div className="specialties-grid">
               <Card titulo="MMP Capilar" descricao="Microinfusão de Medicamentos na Pele para estímulo do crescimento." />
               <Card titulo="Tratamento de Alopecia" descricao="Abordagem médica para controle e reversão da queda capilar" />
               <Card titulo="Mesoterapia" descricao="Infiltração de vitaminas e medicamentos direto no couro cabeludo." />
               <Card titulo="Luz Pulsada" descricao="Terapia adjuvante para controle de inflamações." />
            </div>
         </div>
      </section>
   )
}
