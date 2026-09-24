import './Card.css';

interface CardProps {
   titulo: string;
   descricao: string;
   icon?: string;
}

export default function Card({ titulo, descricao, icon }: CardProps) {
   return (
      <div className="card">
         {icon && <div className="card-icon">{icon}</div>}
         <h3 className="card-titulo">{titulo}</h3>
         <p className="card-descricao">{descricao}</p>
      </div>
   )
}
