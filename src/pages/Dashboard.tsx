// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import './Dashboard.css';
// TypeScript: Ensinando pro React qual o formato de um "Lead"
interface Lead {
  id: number;
  nome: string;
  telefone: string;
  mensagem: string;
  created_at: string;
}
export default function Dashboard() {
  // Estado que vai guardar a lista de leads que vier do banco
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  // useEffect roda uma vez só quando o Dashboard abre
  useEffect(() => {
    buscarLeads();
  }, []);
  async function buscarLeads() {
    try {
      // Pedimos pro Supabase trazer tudo (*) da tabela 'leads'
      // ordenando do mais novo pro mais velho
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      
      // Salvamos no estado
      if (data) {
        setLeads(data);
      }
    } catch (error) {
      console.error('Erro ao buscar leads:', error);
    } finally {
      setLoading(false);
    }
  }
  // Função para formatar a data feia do banco pra algo bonitinho
  function formatarData(dataString: string) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR') + ' às ' + data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' });
  }
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard - Dra. Irislene</h1>
        <p>Acompanhe os contatos recebidos pelo site.</p>
      </div>
      <div className="dashboard-content">
        {loading ? (
          <p>Carregando contatos...</p>
        ) : (
          <div className="table-container">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Nome</th>
                  <th>Telefone/WhatsApp</th>
                  <th>Mensagem</th>
                </tr>
              </thead>
              <tbody>
                {/* Aqui entra a mágica do .map() de novo! */}
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{formatarData(lead.created_at)}</td>
                    <td className="fw-bold">{lead.nome}</td>
                    <td>{lead.telefone}</td>
                    <td>{lead.mensagem}</td>
                  </tr>
                ))}
                
                {/* Caso o banco esteja vazio */}
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center">Nenhum contato recebido ainda.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}