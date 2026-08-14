"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "5511966408911";

type IconName = "market" | "laundry" | "locker" | "travel" | "internet" | "care" | "building" | "arrow" | "check" | "menu";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    market: <><path d="M4 10h16l-1.2-5H5.2L4 10Z"/><path d="M6 10v9h12v-9M9 19v-5h6v5"/><path d="M3 19h18"/></>,
    laundry: <><rect x="4" y="2.8" width="16" height="18.4" rx="2.5"/><path d="M8 7h.01M11 7h5"/><circle cx="12" cy="14" r="4.2"/><path d="M9.4 14c1.5-1 3.6-1 5.2 0"/></>,
    locker: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 3v18M4 9h16M4 15h16"/><path d="M9 6h.01M15 12h.01M9 18h.01"/></>,
    travel: <><path d="M3 11.5 21 4l-7.5 17-2.1-7.2L3 11.5Z"/><path d="m11.4 13.8 4.1-4.1"/></>,
    internet: <><path d="M4.9 9.2a10.5 10.5 0 0 1 14.2 0M7.7 12.2a6.4 6.4 0 0 1 8.6 0M10.5 15.2a2.3 2.3 0 0 1 3 0"/><circle cx="12" cy="18.5" r="1" fill="currentColor" stroke="none"/></>,
    care: <><path d="M12 21S4 16.4 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 16.4 12 21 12 21Z"/><path d="M8 12h2.5l1.2-2.5 1.6 5 1.2-2.5H17"/></>,
    building: <><path d="M5 21V5l7-3 7 3v16"/><path d="M9 7h2v2H9zM14 7h2v2h-2zM9 12h2v2H9zM14 12h2v2h-2zM10 21v-4h4v4M3 21h18"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#inicio" aria-label="IdeaCondo - início">
      <img className="brand-logo" src={light ? "/brands/ideacondo-logo.png" : "/brands/ideacondo-logo-header.png"} alt="IdeaCondo" />
    </a>
  );
}

const services = [
  { icon: "market" as const, title: "Minimercados", text: "Conveniência 24 horas dentro do condomínio, com operação prática e mix pensado para os moradores.", tag: "Conveniência" },
  { icon: "laundry" as const, title: "Lavanderias", text: "Solução compartilhada, moderna e eficiente para tornar a rotina dos moradores mais simples.", tag: "Praticidade" },
  { icon: "locker" as const, title: "Lockers inteligentes", text: "Mais organização e segurança no recebimento de encomendas, com acesso simples e controlado.", tag: "Segurança" },
  { icon: "travel" as const, title: "Viagens e experiências", text: "Pacotes nacionais e internacionais com condições especiais para a comunidade condominial.", tag: "Experiências" },
  { icon: "internet" as const, title: "Internet Claro", text: "Cabeamento e comercialização de planos de internet de ponta para conectar todo o condomínio.", tag: "Conectividade" },
  { icon: "care" as const, title: "Assistências Enel X", text: "Acesso às soluções Enel X Funeral e Enel X Doutor, ampliando o cuidado com moradores e famílias.", tag: "Bem-estar" },
];

const steps = [
  { number: "01", title: "Diagnóstico", text: "Entendemos o perfil, a estrutura e as prioridades do condomínio." },
  { number: "02", title: "Curadoria", text: "Selecionamos as soluções com maior aderência para os moradores." },
  { number: "03", title: "Implantação", text: "Coordenamos parceiros, estrutura e comunicação para uma entrega fluida." },
  { number: "04", title: "Acompanhamento", text: "Apoiamos a operação e buscamos novas oportunidades de valor." },
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Olá, IdeaCondo! Gostaria de conhecer as soluções para o meu condomínio.", "",
      `Nome: ${data.get("nome")}`, `Condomínio: ${data.get("condominio")}`,
      `Cidade: ${data.get("cidade")}`, `WhatsApp: ${data.get("telefone")}`,
      `Interesse: ${data.get("interesse")}`,
      `Mensagem: ${data.get("mensagem") || "Gostaria de receber mais informações."}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a><a href="#como-funciona">Como funciona</a><a href="#parceiros">Parceiros</a><a href="#contato">Contato</a>
          </nav>
          <a className="button button-small" href="#contato">Falar com a IdeaCondo <Icon name="arrow" size={18} /></a>
          <a className="mobile-contact" href="#contato" aria-label="Ir para contato"><Icon name="menu" /></a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow"><span /> Soluções de alto valor agregado</span>
            <h1>Seu condomínio,<br /><em>mais completo.</em></h1>
            <p>A IdeaCondo conecta condomínios às melhores soluções de conveniência, tecnologia e bem-estar — tudo em um só lugar.</p>
            <div className="hero-actions">
              <a className="button" href="#solucoes">Conheça as soluções <Icon name="arrow" size={19} /></a>
              <a className="text-link" href="#contato">Quero levar para meu condomínio</a>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars"><span>M</span><span>C</span><span>E</span></div>
              <p><strong>Uma única conexão.</strong><br />Múltiplas possibilidades para o condomínio.</p>
            </div>
          </div>

            <div className="hub-visual" aria-label="Ecossistema de soluções IdeaCondo">
              <div className="visual-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="hub-center"><img className="hub-logo" src="/brands/ideacondo-logo.png" alt="IdeaCondo" /><small>Inteligência e inovação<br />para condomínios</small></div>
              <div className="floating-card float-laundry"><span><Icon name="laundry" size={21} /></span><div><small>Praticidade</small><strong>Lavanderias 24hrs</strong></div></div>
              <div className="floating-card float-market"><span><Icon name="market" size={21} /></span><div><small>Conveniência</small><strong>Minimercados</strong></div></div>
            <div className="floating-card float-internet"><span><Icon name="internet" size={21} /></span><div><small>Tecnologia</small><strong>Internet Claro</strong></div></div>
            <div className="floating-card float-care"><span><Icon name="care" size={21} /></span><div><small>Bem-estar</small><strong>Assistências</strong></div></div>
            <div className="floating-card float-locker"><span><Icon name="locker" size={21} /></span><div><small>Praticidade</small><strong>Lockers</strong></div></div>
            <div className="building-pill"><Icon name="building" size={18} /><span>Mais valor percebido</span></div>
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true" />
      </section>

      <section className="intro-strip">
        <div className="container intro-grid">
          <p><span>IDEACONDO</span> Transformamos ideias e necessidades em experiências que valorizam o condomínio.</p>
          <div className="intro-stat"><strong>6</strong><span>frentes de<br />soluções</span></div>
          <div className="intro-stat"><strong>1</strong><span>ponto de<br />conexão</span></div>
        </div>
      </section>

      <section className="section services-section" id="solucoes">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow dark"><span /> Ecossistema IdeaCondo</span><h2>Soluções que fazem<br />a diferença no dia a dia.</h2></div>
            <p>Da conveniência à conectividade, reunimos serviços que simplificam a rotina e melhoram a experiência de viver em condomínio.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-top"><span className="service-icon"><Icon name={service.icon} size={27} /></span><span className="service-number">0{index + 1}</span></div>
                <span className="service-tag">{service.tag}</span><h3>{service.title}</h3><p>{service.text}</p>
                <a href="#contato" aria-label={`Quero saber mais sobre ${service.title}`}>Quero saber mais <Icon name="arrow" size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="value-section">
        <div className="container value-layout">
          <div className="value-card">
            <div className="value-mini"><Icon name="building" size={24} /><span>Ecossistema integrado</span></div>
            <div className="value-building">
              <span className="building-line line-a" /><span className="building-line line-b" /><span className="building-line line-c" />
              <div className="building-shape"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="value-badge"><strong>+ valor</strong><span>para o condomínio</span></div>
            </div>
          </div>
          <div className="value-copy">
            <span className="eyebrow dark"><span /> Por que IdeaCondo</span><h2>Mais soluções.<br />Menos complexidade.</h2>
            <p>Um parceiro estratégico para centralizar oportunidades, conectar marcas confiáveis e transformar demandas do condomínio em benefícios reais.</p>
            <ul>
              <li><span><Icon name="check" size={17} /></span><div><strong>Curadoria especializada</strong><small>Soluções selecionadas para o mercado condominial.</small></div></li>
              <li><span><Icon name="check" size={17} /></span><div><strong>Implantação coordenada</strong><small>Mais clareza e agilidade em cada etapa do projeto.</small></div></li>
              <li><span><Icon name="check" size={17} /></span><div><strong>Experiência para o morador</strong><small>Conveniência, cuidado e tecnologia ao alcance de todos.</small></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section process-section" id="como-funciona">
        <div className="container">
          <div className="section-heading process-heading">
            <div><span className="eyebrow dark"><span /> Jornada simples</span><h2>Do diagnóstico<br />à solução ideal.</h2></div>
            <a className="outline-button" href="#contato">Começar agora <Icon name="arrow" size={18} /></a>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => <article className="step" key={step.number}><div className="step-marker"><span>{step.number}</span>{index < steps.length - 1 && <i />}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="partners-section" id="parceiros">
        <div className="container partners-layout">
          <div className="partners-copy"><span className="eyebrow"><span /> Parceiros que conectam</span><h2>Grandes marcas.<br />Soluções confiáveis.</h2><p>Conectamos o seu condomínio a parceiros reconhecidos para entregar tecnologia, cuidado e serviços com qualidade.</p></div>
          <div className="partner-logos">
            <a href="#contato" className="partner-card partner-card-word" aria-label="Baratinho Mix"><strong className="partner-wordmark">Baratinho Mix</strong><span>Minimercados</span></a>
            <a href="https://www.claro.com.br/" target="_blank" rel="noreferrer" className="partner-card" aria-label="Conheça a Claro"><img src="/brands/claro-empresas.svg" alt="Claro Empresas" /><span>Conectividade e internet</span></a>
            <a href="https://www.enelx.com/br/pt" target="_blank" rel="noreferrer" className="partner-card" aria-label="Conheça a Enel X"><img src="/brands/enel-x.png" alt="Enel X" /><span>Assistências e bem-estar</span></a>
            <a href="#contato" className="partner-card partner-card-word" aria-label="Max Solutions"><strong className="partner-wordmark">Max Solutions</strong><span>Soluções condominiais</span></a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="container contact-layout">
          <div className="contact-copy"><span className="eyebrow dark"><span /> Vamos conversar?</span><h2>Leve mais valor<br />para o seu condomínio.</h2><p>Preencha os dados e fale diretamente com nossa equipe pelo WhatsApp.</p><a className="phone-link" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>(11) 96640-8911</strong></a></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row"><label>Seu nome<input name="nome" required placeholder="Como podemos te chamar?" /></label><label>Nome do condomínio<input name="condominio" required placeholder="Ex.: Residencial Parque" /></label></div>
            <div className="field-row"><label>Cidade<input name="cidade" required placeholder="Cidade / UF" /></label><label>Seu WhatsApp<input name="telefone" required inputMode="tel" placeholder="(11) 99999-9999" /></label></div>
            <label>Qual solução mais interessa?<select name="interesse" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Minimercados</option><option>Lavanderias</option><option>Lockers inteligentes</option><option>Viagens e experiências</option><option>Internet Claro</option><option>Assistências Enel X</option><option>Quero conhecer todas</option></select></label>
            <label>Mensagem <span>(opcional)</span><textarea name="mensagem" rows={3} placeholder="Conte um pouco sobre a necessidade do condomínio" /></label>
            <button className="button form-button" type="submit">Enviar mensagem pelo WhatsApp <Icon name="arrow" size={19} /></button>
            {sent && <p className="form-status" role="status">Tudo certo! Abrimos sua conversa no WhatsApp.</p>}
            <small className="privacy-note">Ao enviar, você concorda em ser contatado pela IdeaCondo.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-top"><BrandMark /><p>Soluções de alto valor agregado para condomínios.</p><a href="#inicio">Voltar ao topo ↑</a></div>
        <div className="container footer-bottom"><span>© 2026 IdeaCondo. Todos os direitos reservados.</span><span>Inteligência · Criatividade · Inovação</span></div>
      </footer>

      <a className="whatsapp-float" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, IdeaCondo! Gostaria de conhecer as soluções para condomínios.")}`} target="_blank" rel="noreferrer" aria-label="Falar com a IdeaCondo pelo WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L.2 24l6.4-1.7c1.7.9 3.6 1.4 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4Zm-8.4 18.2c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm5.4-7.3c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-2-.8-3.4-1.8-4.3-4-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.4-.3-.7-.4Z" fill="currentColor"/></svg>
      </a>
    </main>
  );
}
