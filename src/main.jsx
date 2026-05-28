import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import emailjs from '@emailjs/browser';

// Importando os ícones da biblioteca Lucide
import { Monitor, Cpu, Smartphone, Palette, Play, Code, PenTool, ShoppingCart, Rocket, Mail, Phone, Send } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const App = () => {

// Configuração do EmailJS
  const formRef = useRef();
  const [statusEnvio, setStatusEnvio] = useState(''); // '', 'enviando', 'sucesso', 'erro'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enviarEmail = (e) => {
  e.preventDefault();
  setStatusEnvio('enviando');

  // SUBSTITUA PELOS SEUS DADOS DO EMAILJS:
  emailjs.sendForm(
    'service_zbkzx0e', 
    'template_s5467oa', 
    e.target, // Mudamos para e.target para funcionar em múltiplos formulários
    'fbcK7-lPgJydVw_En'
  )
  .then((result) => {
      setStatusEnvio('sucesso');
      e.target.reset(); // Limpa o formulário atual
      setTimeout(() => {
        setStatusEnvio('');
        setIsModalOpen(false); // Fecha o modal automaticamente após o sucesso
      }, 3500);
  }, (error) => {
      setStatusEnvio('erro');
      setTimeout(() => setStatusEnvio(''), 5000);
  });
};

  return (
    <div className="main-wrapper">
      {/* --- HEADER --- */}
      <header className="header container">
        <div className="logo-area">
          <img src="/assets/logo made in devs - png - Copia.png" alt="Logo" className="logo" />
          <img src="/assets/logo made in devs - png - text.png" alt="Logo" className="logo-text" />
        </div>
        
        <nav className="navbar">
          {/* Links corrigidos com # para funcionarem como âncoras */}
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-action">
          <button onClick={() => setIsModalOpen(true)} className="btn-header">Fale Conosco</button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="hero container">
        
        {/* Coluna da Esquerda (Textos e Botões) */}
        <div className="hero-content">
          <div className="hero-subtitle">
            <span className="line-accent"></span>
            <span className="text-accent">CÓDIGO • RESOLVER • CRIAR</span>
            <span className="line-accent"></span>
          </div>

          <h1 className="hero-title">
            CHEGOU A HORA <br />
            DE TER UM 
            <span className="text-accent"> SITE</span>
            <span className="text-accent"> QUE </span>
            <span className="text-accent"> REPRESENTA </span>  
            O SEU NEGÓCIO.<br />
          </h1>

          <p className="hero-description">
            Desenvolvemos sites modernos, rápidos e responsivos, feitos sob medida para destacar a sua marca, atrair mais clientes e 
            <span className="text-accent"> impulsionar sua marca no digital.</span>
          </p>

          <div className="hero-buttons">
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">Solicite seu orçamento</button>
            <a href="#portfolio" className="btn-secondary">
              <span className="icon-circle">
                <Play size={12} fill="currentColor" />
              </span> 
              Nosso Portfólio
            </a>
          </div>
        </div>

        {/* Coluna da Direita (Imagem Principal do Notebook + Celular) */}
        <div className="hero-image-area">
          <img src="/assets/imagem inicio.png" alt="Imagem Principal" className="hero-image" />
        </div>

      </section>

      {/* --- BARRA DE INFORMAÇÕES (Features) --- */}
      <div className="features-bar container">
        {/* Item 1 */}
        <div className="feature-item">
          <div className="feature-icon">
            <Monitor  size={20} />
          </div>
          <div className="feature-text">
            <h4>SITES</h4>
            <p>Crie seu site profissional</p>
          </div>
        </div>
        
        {/* Item 2 */}
        <div className="feature-item">
          <div className="feature-icon">
            <Cpu  size={20} />
          </div>
          <div className="feature-text">
            <h4>SISTEMAS</h4>
            <p>Automatize seus processos</p>
          </div>
        </div>
        
        {/* Item 3 */}
        <div className="feature-item">
          <div className="feature-icon">
            <Smartphone  size={20} />
          </div>
          <div className="feature-text">
            <h4>APLICATIVOS</h4>
            <p>Sua ideia na palma da mão</p>
          </div>
        </div>
        
        {/* Item 4 */}
        <div className="feature-item">
          <div className="feature-icon">
            <Palette  size={20} />
          </div>
          <div className="feature-text">
            <h4>LOGOMARCAS</h4>
            <p>Identidade visual única</p>
          </div>
        </div>
      </div>

      {/* --- SEÇÃO SOBRE NÓS --- */}
      <section id="sobre" className="about-section container">
        <div className="about-grid" >
          <div className="about-image-area">
            
              <img src="/assets/logo made in devs - png.png" alt="Sobre Nós" className="about-image" />
            
          </div>

          <div className="about-content">
            <div className="hero-subtitle">
              <span className="line-accent"></span>
              <span className="text-accent">SOBRE NÓS</span>
              <span className="line-accent"></span>
            </div>
            <h2 className="section-title">Transformamos linhas de código em 
              <span className="text-accent"> sucesso digital</span>
            </h2>
            <p className="section-text">
              A Made In Dev's transforma ideias em experiências digitais modernas, rápidas e profissionais. Somos uma equipe apaixonada por tecnologia, especializada no desenvolvimento de sites, sistemas e soluções digitais que ajudam empresas a crescerem no mundo online.
            </p>
            <p className="section-text">
              Unimos design de alto padrão com engenharia de software de ponta para garantir que seu negócio domine o mercado digital.            
            </p>
          </div>

        </div>
      </section>

      {/*--- SEÇÃO SERVIÇOS --- */}
      <section id="servicos" className="services-section container">
        <div className="services-header">
          <div className="hero-subtitle">
            <span className="line-accent"></span>
            <span className="text-accent">NOSSAS ESPECIALIDADES</span>
            <span className="line-accent"></span>
          </div>
          <h2 className="section-title">Soluções completas para <br/><span className="text-accent"> escalar seu negócio</span></h2>  
        </div>

        <div className="services-grid">
          {/**--- Card Serviço 1 --- */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <Monitor  size={32} />
            </div>
            <h3>Sites Institucionais</h3>
            <p>Páginas web modernas, ultra rápidas e responsivas, desenhadas para transmitir a autoridade da sua marca.</p>
          </div>
          {/**--- Card Serviço 2 --- */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <ShoppingCart size={32} />
            </div>
            <h3>Lojas Virtuais</h3>
            <p>E-commerces completos e seguros, com gestão de estoque e integração de pagamentos para você vender 24h.</p>
          </div>

          {/**--- Card Serviço 3 --- */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <Code size={32} />
            </div>
            <h3>Sistemas Web (SaaS)</h3>
            <p>Desenvolvimento sob medida de plataformas, painéis administrativos e sistemas de gestão complexos.</p>
          </div>
            
          {/**--- Card Serviço 4 --- */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <Smartphone size={32} />
            </div>
            <h3>Aplicativos Mobile</h3>
            <p>Apps nativos ou híbridos para iOS e Android, colocando a sua ideia diretamente na mão dos seus clientes.</p>
            </div>
          {/**--- Card Serviço 5 --- */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <PenTool size={32} />
            </div>
            <h3>UI / UX Design</h3>
            <p>Prototipagem de interfaces intuitivas focadas na melhor experiência e jornada do usuário (Figma).</p>
          </div>

          {/**--- Card Serviço 6 --- */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <Rocket size={32} />
            </div>
            <h3>SEO e Performance</h3>
            <p>Otimização avançada de código para colocar seu site no topo das buscas do Google e voar nas métricas.</p>
          </div>

        </div>
      </section>


      {/* --- SEÇÃO PORTFÓLIO --- */}
      <section id="portfolio" className="portfolio-section container">
        <div className="portfolio-header">
          <div className="hero-subtitle">
            <span className="line-accent"></span>
            <span className="text-accent">NOSSO PORTFÓLIO</span>
            <span className="line-accent"></span>
          </div>
          <h2 className="section-title">Soluções que geram <br/><span className="text-accent">resultados reais</span></h2>
        </div>

        {/** --- GRID DE PROJETOS --- */ }

        <div className="portfolio-grid">
          {/**--- Primeiro projeto --- */}

          <div className="project-card">
            <div className="project-thumb">
              <img src="/assets/estilo.png" alt="Preview Loja Virtual" className="project-img" />
            </div>
            <div className="project-info">
            <span className="project-category">Identidade Visual</span>
            <h3>Logomarca - Loja Estilo</h3>
            <p>Identidade visual completa para a sua marca, trazendo consistência e profissionalismo.</p>
            </div>
          </div>
          {/* Card Projeto 2 */}
          <div className="project-card">
            <div className="project-thumb">
              <img src="/assets/dr.patricia.png" alt="Preview LP Automotiva" className="project-img" />
            </div>
            <div className="project-info">
              <span className="project-category">Site - Odontológico</span>
              <h3>Site - Dra. Patrícia</h3>
              <p>Site profissional para clínica odontológica com agendamento online e informações sobre serviços.</p>
            </div>
          </div>

          {/* Card Projeto 3 */}
          <div className="project-card">
            <div className="project-thumb">
              <img src="/assets/logomarca made in dev's.png" alt="Preview Plataforma de Gestão" className="project-img" />
            </div>
            <div className="project-info">
              <span className="project-category">Identidade Visual</span>
              <h3>Logomarca - Made in Devs</h3>
              <p>Identidade visual completa para a sua marca, trazendo consistência e profissionalismo.</p>
            </div>
          </div>

          {/* Card Projeto 4 */}
          <div className="project-card">
            <div className="project-thumb">
              <img src="/assets/LOGO STOCK ME.png" alt="Preview Aplicativo Mobile" className="project-img" />
            </div>
            <div className="project-info">
              <span className="project-category">Identidade Visual</span>
              <h3>Logomarca - Stock Me</h3>
              <p>Identidade visual completa para a sua marca, trazendo consistência e profissionalismo.</p>
            </div>
          </div>

          {/* Card Projeto 5 */}
          <div className="project-card">
            <div className="project-thumb">
              <img src="/assets/stock me.png" alt="Preview Site Imobiliário" className="project-img" />
            </div>
            <div className="project-info">
              <span className="project-category">Site - Controle de Estoque</span>
              <h3>Site - STOCK ME</h3>
              <p>Site de controle de estoque com funcionalidades avançadas para gestão eficiente.</p>
            </div>
          </div>

          {/* Card Projeto 6 */}
          <div className="project-card">
            <div className="project-thumb">
              <img src="/assets/new project.png" alt="Preview Site Imobiliário" className="project-img" />
            </div>
            <div className="project-info">
              <span className="project-category">Seu Projeto</span>
              <h3>Quer ver seu projeto aqui?</h3>
              <p>Venha fazer seu orçamento com a gente!</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- SEÇÃO DE DEPOIMENTOS --- */}
      <section id="depoimentos" className="depoimento-section container">
        <div className="depoimento-header">
          <div className="hero-subtitle">
            <span className="line-accent"></span>
            <span className="text-accent">DEPOIMENTOS</span>
            <span className="line-accent"></span>
          </div>

          <h2 className="section-title">
            O que nossos <span className="text-accent">clientes dizem</span>
          </h2>

          <p className="depoimento-subtitle">
            A satisfação dos nossos clientes é o que impulsiona cada projeto que desenvolvemos.
          </p>
        </div>

        <div className="depoimento-grid">

          <div className="depoimento-card">
            <div className="depoimento-stars">★★★★★</div>
            <p className="depoimento-text">
              A equipe da Made In Dev's entregou exatamente o que precisávamos.
              Nosso site ficou moderno, rápido e muito profissional.
            </p>

            <div className="depoimento-author">
              <div className="depoimento-avatar avatar-gradient">
                PB
              </div>

              <div>
                <h4>Patrícia Barboza</h4>
                <span>Cirurgiã Dentista</span>
              </div>
            </div>
          </div>

          <div className="depoimento-card">
            <div className="depoimento-stars">★★★★★</div>
            <p className="depoimento-text">
              Atendimento excelente e entrega antes do prazo.
              O resultado superou nossas expectativas, ganhei mais seguidores.
              
            </p>

            <div className="depoimento-author">
              <div className="depoimento-avatar avatar-gradient">
                CH
              </div>

              <div>
                <h4>Carlos Henrique</h4>
                <span>Empresário</span>
              </div>
            </div>
          </div>

          <div className="depoimento-card">
            <div className="depoimento-stars">★★★★★</div>
            <p className="depoimento-text">
              Profissionais comprometidos e muito criativos.
              Recomendo para qualquer empresa que queira crescer no digital.
              
            </p>

            <div className="depoimento-author">
              <div className="depoimento-avatar avatar-gradient">
                LS
              </div>

              <div>
                <h4>Vanice</h4>
                <span>Loja Estilo</span>
              </div>
            </div>
          </div>

        </div>
      </section>

            {/* --- SEÇÃO DE PREÇOS --- */}
      {/* 💡 COMO EDITAR: Para alterar um preço, mude o valor em "price".
           Para mudar o que está incluído, edite os itens do array "features".
           Para adicionar um novo serviço, copie um bloco { ...card } e cole no array. */}
      <section id="precos" className="pricing-section container">
        <div className="pricing-header">
          <div className="hero-subtitle">
            <span className="line-accent"></span>
            <span className="text-accent">INVESTIMENTO</span>
            <span className="line-accent"></span>
          </div>
          <h2 className="section-title">Planos claros, <span className="text-accent">sem surpresas</span></h2>
          <p className="pricing-subtitle">Valores pensados para pequenos negócios e MEI que querem crescer com profissionalismo.</p>
        </div>
 
        <div className="pricing-grid">
 
          {/* ============================
              CARD 1 — LOGOMARCA
              Para editar: mude "price", "features" ou "highlight"
          ============================ */}
          <div className="pricing-card">
            <div className="pricing-card-top">
              <div className="pricing-icon">✦</div>
              <span className="pricing-label">Identidade Visual</span>
              <h3 className="pricing-name">Logomarca</h3>
              <div className="pricing-price">
                <span className="pricing-from">a partir de</span>
                <span className="pricing-value">R$ 29,99</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✓ Criação do símbolo / ícone</li>
              <li>✓ Tipografia exclusiva</li>
              <li>✓ Paleta de cores estratégica</li>
              <li>✓ Versões horizontal e vertical</li>
              <li>✓ Entrega em PNG, SVG e PDF</li>
              <li className="pricing-feat--off">✗ Manual de marca</li>
            </ul>
            <a href="#contato" className="btn-pricing">Solicitar orçamento</a>
          </div>
 
          {/* ============================
              CARD 2 — SITE INSTITUCIONAL (DESTAQUE)
              "pricing-card--highlight" deixa ele com borda roxa
          ============================ */}
          <div className="pricing-card pricing-card--highlight">
            <div className="pricing-badge">Mais procurado</div>
            <div className="pricing-card-top">
              <div className="pricing-icon">◈</div>
              <span className="pricing-label">Presença Digital</span>
              <h3 className="pricing-name">Site Institucional</h3>
              <div className="pricing-price">
                <span className="pricing-from">a partir de</span>
                <span className="pricing-value">R$ 119,99</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✓ Até 5 páginas / seções</li>
              <li>✓ Design responsivo (mobile)</li>
              <li>✓ Integração com WhatsApp</li>
              <li>✓ Formulário de contato</li>
              <li>✓ Otimização básica de SEO</li>
              <li>✓ 30 dias de suporte</li>
            </ul>
            <a href="#contato" className="btn-pricing btn-pricing--accent">Solicitar orçamento</a>
          </div>
 
          {/* ============================
              CARD 3 — LANDING PAGE
          ============================ */}
          <div className="pricing-card">
            <div className="pricing-card-top">
              <div className="pricing-icon">⟡</div>
              <span className="pricing-label">Conversão</span>
              <h3 className="pricing-name">Landing Page</h3>
              <div className="pricing-price">
                <span className="pricing-from">a partir de</span>
                <span className="pricing-value">R$ 99,99</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✓ Página única de alta conversão</li>
              <li>✓ Arquitetura de copywriting</li>
              <li>✓ Design responsivo (mobile)</li>
              <li>✓ Integração com WhatsApp</li>
              <li>✓ Pixel de rastreamento</li>
              <li className="pricing-feat--off">✗ Suporte pós-entrega</li>
            </ul>
            <a href="#contato" className="btn-pricing">Solicitar orçamento</a>
          </div>
 
          {/* ============================
              CARD 4 — SISTEMA WEB
          ============================ */}
          <div className="pricing-card">
            <div className="pricing-card-top">
              <div className="pricing-icon">⬡</div>
              <span className="pricing-label">Automação</span>
              <h3 className="pricing-name">Sistema Web</h3>
              <div className="pricing-price">
                <span className="pricing-from">a partir de</span>
                <span className="pricing-value">R$ 179,99</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✓ Levantamento de requisitos</li>
              <li>✓ Cadastro, listagem e edição</li>
              <li>✓ Login e controle de acesso</li>
              <li>✓ Painel administrativo</li>
              <li>✓ Hospedagem orientada</li>
              <li>✓ 60 dias de suporte</li>
            </ul>
            <a href="#contato" className="btn-pricing">Solicitar orçamento</a>
          </div>
 
        </div>
 
        <p className="pricing-note">
          💬 Não encontrou o que precisava? <a href="#contato" className="pricing-note-link">Fale com a gente</a> — montamos um plano sob medida para o seu negócio.
        </p>
      </section>

      

      {/* --- SEÇÃO DE CONTATO --- */}
      <section id="contato" className="contact-section container">
        <div className="contact-grid">
          
          {/* Lado Esquerdo: Informações */}
          <div className="contact-info">
            <div className="hero-subtitle">
              <span className="line-accent"></span>
              <span className="text-accent">FALE COM ESPECIALISTAS</span>
              <span className="line-accent"></span>
            </div>
            <h2 className="section-title">Vamos construir o <span className="text-accent">futuro<br/></span> do seu negócio?</h2>
            <p className="section-text">
              Preencha o formulário ao lado para nos contar um pouco sobre o seu projeto. Nossa equipe entrará em contato rapidamente com uma solução sob medida.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <span>E-mail</span>
                  <p>madeindevs@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method-item">
                <div className="method-icon"><Phone size={20} /></div>
                <div>
                  <span>WhatsApp</span>
                  <p>+55 (79) 99600-6301</p>
                  <p>+55 (79) 99630-1361</p>
                  
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon"><FaInstagram size={22} /></div>
                <div>
                  <span>Instagram</span>
                  <p>@madeindevs.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="contact-form-wrapper">
            <form ref={formRef} className="contact-form" onSubmit={enviarEmail}>
              <div className="input-group">
                <label>Nome Completo</label>
                <input type="text" name="from_name" placeholder="Como podemos te chamar?" required />
              </div>
              
              <div className="input-group">
                <label>E-mail Corporativo</label>
                <input type="email" name="reply_to" placeholder="seu@email.com" required />
              </div>

              <div className="input-group">
                <label>Qual serviço você precisa?</label>
                <select name="service" required>
                  <option value="" disabled selected>Selecione uma opção...</option>
                  <option value="site">Site Institucional</option>
                  <option value="ecommerce">Loja Virtual</option>
                  <option value="sistema">Sistema Web</option>
                  <option value="app">Aplicativo Mobile</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="input-group">
                <label>Mensagem ou Detalhes do Projeto</label>
                <textarea name="message" rows="4" placeholder="Conte-nos um pouco sobre a sua ideia..." required></textarea>
              </div>

              {/* Botão dinâmico baseado no status do envio */}
              <button type="submit" className="btn-primary btn-submit" disabled={statusEnvio === 'enviando'}>
                {statusEnvio === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'} <Send size={18} />
              </button>

              {/* Mensagens de feedback na tela */}
              {statusEnvio === 'sucesso' && (
                <p className="form-feedback success">✓ Mensagem enviada com sucesso! Respondemos em breve.</p>
              )}
              {statusEnvio === 'erro' && (
                <p className="form-feedback error">✕ Erro ao enviar. Tente novamente ou use o WhatsApp.</p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* --- FOOTER (RODAPÉ) --- */}
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/logo made in devs - cortada.png" alt="Made in Dev's" className="logo-text-footer" />
          </div>
          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#portfolio">Portfólio</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Made in Dev's. Todos os direitos reservados.</p>
        </div>
      </footer>

        {/* --- MODAL DE ORÇAMENTO PREMIUM --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
            
            <div className="modal-header">
              <h3 className="text-accent">FALE CONOSCO</h3>
              <p>Conte-nos sobre o seu projeto e impulsione o seu negócio.</p>
            </div>

            <form className="contact-form" onSubmit={enviarEmail}>
              <div className="input-group">
                <label>Nome Completo</label>
                <input type="text" name="from_name" placeholder="Como podemos te chamar?" required />
              </div>
              
              <div className="input-group">
                <label>E-mail Corporativo</label>
                <input type="email" name="reply_to" placeholder="seu@email.com" required />
              </div>

              <div className="input-group">
                <label>Qual serviço você precisa?</label>
                <select name="service" required>
                  <option value="" disabled selected>Selecione uma opção...</option>
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="Loja Virtual">Loja Virtual</option>
                  <option value="Sistemas Web">Sistemas Web</option>
                  <option value="Aplicativo Mobile">Aplicativo Mobile</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="input-group">
                <label>Mensagem ou Detalhes do Projeto</label>
                <textarea name="message" rows="3" placeholder="Conte-nos um pouco sobre a sua ideia..." required></textarea>
              </div>

              <button type="submit" className="btn-primary btn-submit" disabled={statusEnvio === 'enviando'}>
                {statusEnvio === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'} <Send size={18} />
              </button>

              {statusEnvio === 'sucesso' && (
                <p className="form-feedback success">✓ Enviado! Entraremos em contato.</p>
              )}
              {statusEnvio === 'erro' && (
                <p className="form-feedback error">✕ Erro ao enviar. Tente novamente.</p>
              )}
            </form>

          </div>
        </div>
      )}
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App; 