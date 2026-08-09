# Dra. Irislene Brasil - Tricologia & Fisioterapia Dermatofuncional

Bem-vindo ao repositório do projeto da clínica da Dra. Irislene Brasil. Este projeto é uma **Aplicação Web Fullstack** moderna, atuando como Landing Page de alta conversão para pacientes e, futuramente, como um Painel Administrativo de gestão de consultas e pacientes (CRM).


## Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do mercado para garantir alta performance, manutenção facilitada e segurança:

* **Frontend:**
  * [React](https://reactjs.org/) (via Vite) - Componentização e UI.
  * [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior previsibilidade de código.
  * Vanilla CSS & CSS Variables - Design System robusto sem dependência de bibliotecas externas pesadas.
  * CSS Grid e Flexbox - Layouts responsivos modernos.
  * [Lucide React](https://lucide.dev/) - Ícones SVG otimizados.
* **Backend (BaaS):**
  * [Supabase](https://supabase.com/) - Banco de Dados PostgreSQL, Autenticação e APIs em tempo real.


## Arquitetura do Projeto

A aplicação foi desenhada com foco em modularidade. A estrutura de pastas segue os seguintes princípios:
* `/src/components/`: Componentes genéricos e reutilizáveis (ex: `Button`, `TestimonialCard`).
* `/src/sections/`: Componentes de grande escala que compõem seções únicas da página (ex: `Hero`, `Specialties`, `Contact`).
* `/src/styles/`: Configurações globais de CSS, variáveis de design (Design System) e reset.
* `/src/lib/`: Configurações de conexão com serviços externos (ex: Cliente Supabase).


## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/gutembergamorim/dra-irislene-brasil.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd dra-irislene-brasil
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente: Crie um arquivo .env.local na raiz do projeto e adicione suas chaves do Supabase:
   ```bash
   VITE_SUPABASE_URL=sua_url_aqui
   VITE_SUPABASE_ANON_KEY=sua_chave_anon_aqui
   ```
5. Execute a aplicação:
   ```bash
   npm run dev
   ```
   

Desenvolvido por Gutemberg Amorim em 2026.