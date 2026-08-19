import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../../lib/supabase';

export default function ProtectedRoute({children}: {children: React.ReactNode }) {
   const [loading, setLoading] = useState(true);
   const [autenticado, setAutenticado] = useState(false);
   const navigate = useNavigate();

   useEffect(() =>{
      verificarAcesso();
   }, []);

   async function verificarAcesso() {

      const {data: { session } } = await supabase.auth.getSession();

      if (!session) {
         navigate('/admin')
      } else {
         setAutenticado(true);
      }

      setLoading(false);
   }

   if (loading) {
      return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Carregando acesso...</div>;
   }

   return autenticado ? <>{children}</> : null;
}