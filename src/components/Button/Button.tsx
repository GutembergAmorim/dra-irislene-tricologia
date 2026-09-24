import './Button.css';

interface ButtonProps {
   texto: string;
   href?: string;
   onClick?: () => void;
}

export default function Button({ texto, href, onClick }: ButtonProps) {
   if (href) {
      return (
         <a href={href} className='btn-primary' onClick={onClick}>
            {texto}
         </a>
      )
   }

   return (
      <button type='submit' className='btn-primary' onClick={onClick}>
         {texto}
      </button>
   )
}