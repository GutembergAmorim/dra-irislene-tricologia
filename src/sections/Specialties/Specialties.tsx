import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import './Specialties.css';

export default function Specialties() {
   const specialties = [
      {
         title: 'Tratamento de Alopecia',
         description: 'Não aceite a perda de cabelo como algo definitivo. Utilizamos abordagens precisas para investigar a causa da sua alopecia e protocolos focados em reverter o quadro e estimular o crescimento saudável.',
         icon: '🧬'
      },
      {
         title: 'Microagulhamento',
         description: 'Procedimento minimamente invasivo que perfura a pele formando microcanais para injetar ativos diretamente no couro cabeludo.',
         icon: '💉'
      },
      {
         title: 'Fototerapia',
         description: 'Luz aplicada diretamente no couro cabeludo com o intuito de gerar mais energia e maior atividade celular, estimulando o crescimento.',
         icon: '✨'
      }
   ];

   return (
      <section className="specialties" id="especialidades">
         <div className="specialties-container">
            <div className="specialties-header">
               <h2>Tratamentos avançados para a necessidade real do seu cabelo</h2>
               <p>Protocolos validados cientificamente para interromper a queda e estimular novos fios.</p>
            </div>

            <div className="specialties-grid">
               {specialties.map((item, index) => (
                  <Card key={index} titulo={item.title} descricao={item.description} icon={item.icon} />
               ))}
            </div>

            <div className="specialties-actions">
               <Button texto="Agendar Minha Avaliação" href="#contato" />
            </div>
         </div>
      </section>
   )
}
