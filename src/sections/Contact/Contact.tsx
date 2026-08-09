import './Contact.css';
import Button from '../../components/Button/Button';
import { supabase } from '../../lib/supabase.ts';
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
      <section className='contact'>
         <div className='contact-container'>
            <h2>Entre em contato</h2>
            <p>Agende sua consulta e transforme sua vida.</p>
            <form className='contact-form' onSubmit={handleSubmit}>
               <label htmlFor="name">Nome</label>
               <input type="text" id="name" name="name" value={nome} onChange={(e) => setNome(e.target.value)} required/>

               <label htmlFor="number">Telefone/Whatsapp</label>
               <input type="text" id="number" name="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>

               <label htmlFor="message">Mensagem</label>
               <textarea id="message" name="message" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required></textarea>

               {sucesso && 
                  <p>Sua mensagem foi enviada com sucesso! A Dra. Irislene entrará em contato</p>
               }

               <Button texto={loading ? 'Enviando...' : 'Enviar'} />
            </form>
         </div>
      </section>
   )
}