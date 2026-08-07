import './Button.css';

interface ButtonProps {
   texto: string;
}

export default function Button({ texto }: ButtonProps) {
   return (
      <button className='btn-primary'>
         {texto}
      </button>
   )
}