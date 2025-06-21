# 🏫 Creche e Pré-Escola Tia Marga

Landing page moderna e responsiva desenvolvida em React para a Creche e Pré-Escola Tia Marga.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Menu fixo com scroll suave entre seções
- **Animações Atrativas**: Elementos flutuantes e transições suaves
- **Cores Personalizadas**: Baseadas no logo da creche (amarelo e vermelho)
- **Seções Completas**: Todas as seções solicitadas implementadas

## 📱 Seções Incluídas

1. **HOME** - Hero section com gradiente vibrante e elementos animados
2. **A CRECHE** - Informações sobre a instituição e diferenciais
3. **ATIVIDADES** - 6 atividades principais com cards interativos
4. **GALERIA** - Espaço para fotos dos momentos especiais
5. **TURMAS E HORÁRIOS** - Informações sobre todas as turmas e horários
6. **FALE CONOSCO** - Formulário de contato e informações

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Extrair o projeto**
   ```bash
   # Se estiver em ZIP, extrair primeiro
   unzip creche-tia-marga.zip
   cd creche-tia-marga
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Executar em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acessar no navegador**
   ```
   http://localhost:5173
   ```

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
creche-tia-marga/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── logo_tia_marga_melhorado.png
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos principais
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
└── README.md           # Este arquivo
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no arquivo `src/App.css` nas variáveis CSS:

```css
:root {
  --primary-yellow: #FFD700;
  --primary-red: #FF6B6B;
  --secondary-blue: #87CEEB;
  /* ... outras cores */
}
```

### Conteúdo
Para personalizar textos e informações:

1. **Informações de contato**: Editar seção `contato` no `App.jsx`
2. **Atividades**: Modificar array `atividades` no `App.jsx`
3. **Turmas**: Alterar array `turmas` no `App.jsx`

### Imagens
- **Logo**: Substituir `src/assets/logo_tia_marga_melhorado.png`
- **Galeria**: Adicionar imagens reais na pasta `src/assets/` e atualizar o código

## 🔧 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **CSS3** - Estilização com variáveis CSS e animações
- **JavaScript ES6+** - Funcionalidades modernas

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Funcionalidades

- ✅ Menu de navegação colorido e funcional
- ✅ Logo da creche integrado
- ✅ Scroll suave entre seções
- ✅ Elementos flutuantes animados
- ✅ Cards interativos com hover effects
- ✅ Formulário de contato estilizado
- ✅ Links para redes sociais
- ✅ Design inspirado no site de referência

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através do formulário na seção "Fale Conosco" do site.

---

**Desenvolvido com ❤️ para a Creche e Pré-Escola Tia Marga**

