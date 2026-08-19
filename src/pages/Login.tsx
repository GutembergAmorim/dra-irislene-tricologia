import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Button from '../components/Button/Button';
import './Login.css';

export default function Login () {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const navigate = useNavigate();

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError('');

      try {
         const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
         });

         if(error) throw error;

         navigate('/admin/dashboard');

      } catch (err) {
         console.log(err);
         setError('Credenciais inválidas. Tente novamente.');
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className="login-page">
         <div className="login-box">
            <div className="login-logo-placeholder">
               <span>Logo</span>
            </div>
            <h2>Painal Administrativo</h2>
            <p>Acesso exclusivo para Dra. Irislene.</p>

            <form onSubmit={handleLogin} className="login-form">
               <label htmlFor="email">E-mail</label>
               <input type="text"
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required 
               />

               <label htmlFor="password">Senha</label>
               <input type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required 
               />

               {error && <p className="login-error">{error}</p>}

               <Button texto={loading ? "Entrando..." : "Entrar"}/>
            </form>

         </div>
      </div>
   )
}