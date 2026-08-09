// src/sections/Footer/Footer.tsx
import './Footer.css';
// 1. Importando os ícones da biblioteca que acabamos de instalar
import {  MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-logo-placeholder">
                    <span>[Logo Dra. Irislene]</span>
                </div>
                
                <div className="footer-info">
                    <p>Dra. Irislene Brasil - 👩🏻‍⚕️Fisioterapeuta Dermatofuncional e Tricologista</p>
                    <p>Telefone: (85) 99703-3089</p>
                    <p>Email: contato@drairislene.com.br</p>
                </div>
            
               <div className="footer-social">
                  <a href="https://instagram.com/irisbrasil" rel="noopener noreferrer" target='_blank'>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                     >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                     </svg>

                     {/* <Instagram size={28} /> */}
                  </a>
                  <a href="https://wa.me/5585997033089" target="_blank" rel="noopener noreferrer">
                     <MessageCircle size={28} />
                  </a>
               </div>
            </div>
        </footer>
    );
}