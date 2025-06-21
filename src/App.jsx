import React, { useState, useEffect } from 'react'
import logoTiaMarga from './assets/logo_tia_marga_melhorado.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Detecta seção ativa no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'creche', 'atividades', 'galeria', 'turmas', 'contato']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Itens do menu
  const menuItems = [
    { id: 'home', label: 'HOME', color: 'bg-blue-500 hover:bg-blue-600' },
    { id: 'creche', label: 'A CRECHE', color: 'bg-orange-500 hover:bg-orange-600' },
    { id: 'atividades', label: 'ATIVIDADES', color: 'bg-purple-500 hover:bg-purple-600' },
    { id: 'galeria', label: 'GALERIA', color: 'bg-teal-500 hover:bg-teal-600' },
    { id: 'turmas', label: 'TURMAS E HORÁRIOS', color: 'bg-pink-500 hover:bg-pink-600' },
    { id: 'contato', label: 'FALE CONOSCO', color: 'bg-red-600 hover:bg-red-700' }
  ]

  // Dados das atividades
  const atividades = [
    {
      icon: '🎨',
      title: 'Artes e Pintura',
      description: 'Desenvolvimento da criatividade através de atividades artísticas e expressão visual.',
      color: 'bg-red-500'
    },
    {
      icon: '🎵',
      title: 'Música e Movimento',
      description: 'Estimulação musical e desenvolvimento motor através de canções e danças.',
      color: 'bg-yellow-500'
    },
    {
      icon: '📚',
      title: 'Contação de Histórias',
      description: 'Desenvolvimento da linguagem e imaginação através de histórias encantadoras.',
      color: 'bg-blue-500'
    },
    {
      icon: '🎮',
      title: 'Jogos Educativos',
      description: 'Aprendizado lúdico através de jogos que estimulam o raciocínio e coordenação.',
      color: 'bg-green-500'
    },
    {
      icon: '👫',
      title: 'Socialização',
      description: 'Desenvolvimento de habilidades sociais através de atividades em grupo.',
      color: 'bg-purple-500'
    },
    {
      icon: '🤗',
      title: 'Cuidado e Afeto',
      description: 'Ambiente acolhedor com muito carinho e atenção individualizada.',
      color: 'bg-pink-500'
    }
  ]

  // Dados das turmas
  const turmas = [
    {
      nome: 'Berçário',
      idade: '4 meses a 1 ano',
      horario: '7h às 19h',
      descricao: 'Cuidados especializados para os pequeninos',
      icon: '👶'
    },
    {
      nome: 'Maternal I',
      idade: '1 a 2 anos',
      horario: '7h às 19h',
      descricao: 'Primeiros passos na socialização',
      icon: '❤️'
    },
    {
      nome: 'Maternal II',
      idade: '2 a 3 anos',
      horario: '7h às 19h',
      descricao: 'Desenvolvimento da autonomia',
      icon: '👫'
    },
    {
      nome: 'Pré-Escola',
      idade: '3 a 5 anos',
      horario: '7h às 19h',
      descricao: 'Preparação para o ensino fundamental',
      icon: '🎓'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-section">
              <img 
                src={logoTiaMarga} 
                alt="Tia Marga" 
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="logo-fallback">
                <span>❤️</span>
              </div>
              <div className="logo-text">
                <h1>Tia Marga</h1>
                <p>Creche e Pré-Escola</p>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav className="menu-desktop">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`menu-btn ${item.color} ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Menu Mobile Toggle */}
            <button
              className="menu-mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Menu Mobile Dropdown */}
          {isMenuOpen && (
            <div className="menu-mobile">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`menu-mobile-btn ${item.color}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Seção Hero */}
      <section id="home" className="hero-section">
        {/* Elementos flutuantes animados */}
        <div className="floating-elements">
          <div className="floating-element floating-1">📚</div>
          <div className="floating-element floating-2">🎨</div>
          <div className="floating-element floating-3">🎵</div>
          <div className="floating-element floating-4">⭐</div>
          <div className="floating-element floating-5">❤️</div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Creche e Pré-Escola
                <span className="hero-subtitle">Tia Marga</span>
              </h1>
              <p className="hero-description">
                Onde cada criança é especial e o aprendizado acontece com amor, carinho e muita diversão!
              </p>
              <div className="hero-buttons">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="btn btn-primary"
                >
                  Fale Conosco
                </button>
                <button 
                  onClick={() => scrollToSection('creche')}
                  className="btn btn-secondary"
                >
                  Conheça a Creche
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">📸</span>
                <p>Crianças Brincando</p>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="scroll-indicator">
          <span>⬇️</span>
        </div>
      </section>

      {/* Seção A Creche */}
      <section id="creche" className="section section-creche">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">A Creche e Pré-Escola Tia Marga</h2>
            <p className="section-subtitle">
              Uma escola viva e aberta à participação dos pais, onde cada criança é única e especial.
            </p>
          </div>

          <div className="creche-content">
            <div className="creche-text">
              <p className="text-large">
                Do Berçário à Pré-escola, oferecemos a melhor educação infantil para desenvolver as habilidades 
                socioemocionais do seu filho. Nossa proposta pedagógica é pautada no cuidado, no afeto e na 
                atenção constante à formação da personalidade e desenvolvimento da inteligência de cada criança 
                individualmente.
              </p>
              <p className="text-large">
                Através de um projeto pedagógico consistente, voltado para atender às necessidades básicas da 
                criança, incentivando a autoestima e autonomia, a Tia Marga divide com você a grande 
                responsabilidade e o prazer de acompanhar seu filho na descoberta do mundo!
              </p>
              
              <div className="features-grid">
                <div className="feature-card">
                  <span className="feature-icon">👥</span>
                  <h3>Professores Qualificados</h3>
                  <p>Equipe especializada em educação infantil</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">❤️</span>
                  <h3>Ambiente Acolhedor</h3>
                  <p>Espaço seguro e cheio de carinho</p>
                </div>
              </div>
            </div>
            
            <div className="creche-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🏫</span>
                <p>Ambiente da Creche</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Atividades */}
      <section id="atividades" className="section section-atividades">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossas Atividades</h2>
            <p className="section-subtitle">
              Atividades diversificadas e lúdicas que estimulam o desenvolvimento integral da criança.
            </p>
          </div>

          <div className="atividades-grid">
            {atividades.map((atividade, index) => (
              <div key={index} className="atividade-card">
                <div className={`atividade-icon ${atividade.color}`}>
                  <span>{atividade.icon}</span>
                </div>
                <h3 className="atividade-title">{atividade.title}</h3>
                <p className="atividade-description">{atividade.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Galeria */}
      <section id="galeria" className="section section-galeria">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Galeria de Momentos</h2>
            <p className="section-subtitle">
              Veja alguns dos momentos especiais vividos pelas nossas crianças.
            </p>
          </div>

          <div className="galeria-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="galeria-item">
                <div className="galeria-placeholder">
                  <span className="placeholder-icon">📸</span>
                  <p>Momento Especial {item}</p>
                </div>
                <div className="galeria-overlay">
                  <div className="galeria-info">
                    <h3>Galeria {item}</h3>
                    <p>Diversão garantida!</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="galeria-cta">
            <button 
              onClick={() => window.open('https://www.instagram.com/explore/locations/689984898/creche-e-pre-escola-tia-marga/', '_blank')}
              className="btn btn-instagram"
            >
              📷 Ver mais no Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Seção Turmas */}
      <section id="turmas" className="section section-turmas">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Turmas e Horários</h2>
            <p className="section-subtitle">
              Oferecemos turmas para todas as idades, com horários flexíveis para atender sua família.
            </p>
          </div>

          <div className="turmas-grid">
            {turmas.map((turma, index) => (
              <div key={index} className="turma-card">
                <div className="turma-icon">
                  <span>{turma.icon}</span>
                </div>
                <h3 className="turma-nome">{turma.nome}</h3>
                <p className="turma-idade">{turma.idade}</p>
                <p className="turma-descricao">{turma.descricao}</p>
                <div className="turma-horario">
                  <span className="horario-icon">🕐</span>
                  <span>{turma.horario}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="horarios-info">
            <h3 className="horarios-title">Opções de Horários</h3>
            <div className="horarios-grid">
              <div className="horario-card">
                <h4>Meio Período</h4>
                <p>7h às 13h ou 13h às 19h</p>
                <span>Inclui 2 refeições</span>
              </div>
              <div className="horario-card">
                <h4>Período Integral</h4>
                <p>7h às 19h</p>
                <span>Inclui 4 refeições</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="section section-contato">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fale Conosco</h2>
            <p className="section-subtitle">
              Venha conhecer nossa escola pessoalmente! Entre em contato conosco.
            </p>
          </div>

          <div className="contato-content">
            {/* Informações de Contato */}
            <div className="contato-info">
              <h3>Informações de Contato</h3>
              <div className="contato-items">
                <div className="contato-item">
                  <div className="contato-icon bg-yellow-500">
                    <span>📍</span>
                  </div>
                  <div className="contato-text">
                    <p className="contato-label">Endereço</p>
                    <p className="contato-value">Rua da Creche, 123 - Bairro</p>
                  </div>
                </div>
                
                <div className="contato-item">
                  <div className="contato-icon bg-red-500">
                    <span>📞</span>
                  </div>
                  <div className="contato-text">
                    <p className="contato-label">Telefone</p>
                    <p className="contato-value">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="contato-item">
                  <div className="contato-icon bg-blue-500">
                    <span>📧</span>
                  </div>
                  <div className="contato-text">
                    <p className="contato-label">E-mail</p>
                    <p className="contato-value">contato@tiamarga.com.br</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="redes-sociais">
                <h3>Siga-nos nas Redes Sociais</h3>
                <div className="redes-buttons">
                  <button 
                    onClick={() => window.open('https://www.instagram.com/explore/locations/689984898/creche-e-pre-escola-tia-marga/', '_blank')}
                    className="rede-btn instagram"
                  >
                    📷
                  </button>
                  <button className="rede-btn facebook">
                    📘
                  </button>
                  <button className="rede-btn whatsapp">
                    💬
                  </button>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="contato-form">
              <h3>Envie uma Mensagem</h3>
              <form className="form">
                <div className="form-group">
                  <label>Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome completo" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>Telefone</label>
                  <input 
                    type="tel" 
                    placeholder="(11) 99999-9999" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>Mensagem</label>
                  <textarea 
                    placeholder="Conte-nos como podemos ajudar..." 
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-form">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* Mapa */}
          <div className="mapa-section">
            <h3>Nossa Localização</h3>
            <div className="mapa-placeholder">
              <span className="placeholder-icon">🗺️</span>
              <p>Mapa da localização da creche</p>
              <span className="mapa-info">Integração com Google Maps aqui</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img 
                src={logoTiaMarga} 
                alt="Tia Marga" 
                className="footer-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="footer-logo-fallback">
                <span>❤️</span>
              </div>
              <div className="footer-text">
                <p className="footer-name">Creche e Pré-Escola Tia Marga</p>
                <p className="footer-tagline">Educação Infantil de Qualidade</p>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2025 Creche e Pré-Escola Tia Marga. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

