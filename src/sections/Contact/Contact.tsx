import './Contact.css';
import Button from '../../components/Button/Button';

export default function Contact() {
   return (
      <section className='contact'>
         <div className='contact-container'>
            <h2>Entre em contato</h2>
            <p>Agende sua consulta e transforme sua vida.</p>
            <form className='contact-form'>
               <label htmlFor="name">Nome</label>
               <input type="text" id="name" name="name" />

               <label htmlFor="number">Telefone/Whatsapp</label>
               <input type="number" id="number" name="number" />

               <label htmlFor="message">Mensagem</label>
               <textarea id="message" name="message"></textarea>

               <Button texto="Enviar" />
            </form>
         </div>
      </section>
   )
}