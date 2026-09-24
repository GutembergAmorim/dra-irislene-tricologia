import './Contact.css';
import Button from '../../components/Button/Button';
import { supabase } from '../../lib/supabase';
import { useState } from 'react';

export default function Contact() {

   const [nome, setNome] = useState('')
   const [telefone, setTelefone] = useState('')
   const [mensagem, setMensagem] = useState('')

   const [loading, setLoading] = useState(false)
   const [sucesso, setSucesso] = useState('')

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      try {
         const { error } = await supabase
         .from('leads')
         .insert([
            {
               nome: nome,
               telefone: telefone,
               mensagem: mensagem,
            }
         ]);

         if(error) {
            throw error;
         }

         setSucesso('Mensagem enviada com sucesso!');
         setNome('');
         setTelefone('');
         setMensagem('');

         
      } catch (error) {
         console.log('Erro ao enviar:' , error)
         alert('Erro ao enviar sua mensagem, tente novamente.');
      } finally {
         setLoading(false);
      }
   }

   return (
      <section className='contact' id='contato'>
         <div className="contact-header">
            <h1>Dê o primeiro passo para transformar a saúde do seu cabelo</h1>
            <p>Chega de perder tempo com soluções que não funcionam. Envie seus dados e agende sua avaliação detalhada.</p>
         </div>
         <div className='contact-container'>
            
            <div className="contact-info-area">
               {/* <h2 className="section-headline">Dê o primeiro passo para transformar a saúde do seu cabelo</h2>
               <p className="contact-subheadline">
                  Chega de perder tempo com soluções que não funcionam. Envie seus dados e agende sua avaliação detalhada.
               </p> */}
               
               <div className="contact-details">
                  <div className="contact-detail-item">
                     <strong>WhatsApp:</strong> (85) 99703-3089
                  </div>
                  <div className="contact-detail-item">
                     <strong>Horário:</strong> Terça, Quinta e Sexta das 08:30 às 19:30
                     <br /> Sábado das 08:30 às 16:30
                  </div>
               </div>

               <div className="contact-maps-area">
                  <h3 className="maps-title">Nossas Unidades</h3>
                  
                  <div className="map-item">
            <h4 className="map-subtitle">Fortaleza - CE</h4>
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2579948187104!2d-38.528424624312485!3d-3.753910296219987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749a81b20be0d%3A0xe9572fac3072f3a4!2sMarv%20Clinic!5e0!3m2!1spt-BR!2sbr!4v1789093011874!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Fortaleza"
              ></iframe>
            </div>
            <p className="map-address">Marv Clinic
R. Martinho Rodrigues, 129 - Fátima, Fortaleza - CE, 60411-280</p>
          </div>

                  <div className="map-item">
            <h4 className="map-subtitle">Baturité - CE</h4>
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.65192363714826!2d-38.88272031722618!3d-4.329915471166931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bf3bfbe038dcb3%3A0x4db0d76c1309c27c!2sIrislene%20Brasil%20-%20Tricologia%20Cl%C3%ADnica!5e0!3m2!1spt-BR!2sbr!4v1789092885441!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Baturité"
              ></iframe>
            </div>
            <p className="map-address">Travessa 14 de Abril, 247 - 1° andar - Centro, Baturité - CE</p>
          </div>
               </div>
            </div>

            <div className="contact-form-area">
               <form className='contact-form' onSubmit={handleSubmit}>
                  <h3>Envie uma mensagem</h3>
                  <p>Seu bem-estar é nossa prioridade. Preencha o formulário e agende sua avaliação detalhada.</p>
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" value={nome} onChange={(e) => setNome(e.target.value)} required/>

                  <label htmlFor="number">Telefone/Whatsapp</label>
                  <input type="text" id="number" name="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>

                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required></textarea>

                  {sucesso && 
                     <p className="success-message">Sua mensagem foi enviada com sucesso! A Dra. Irislene entrará em contato</p>
                  }

                  <p className="micro-copy" style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '8px' }}>
                     Seus dados estão seguros. Não enviamos spam.
                  </p>

                  <Button texto={loading ? 'Enviando...' : 'Enviar'} />
               </form>
            </div>

         </div>
      </section>
   )
}