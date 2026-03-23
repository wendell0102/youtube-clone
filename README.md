# 🎬 YouTube Clone

Clone da interface do YouTube desenvolvido com HTML, CSS e JavaScript, incluindo integração com API backend para reprodução dinâmica de vídeos.

## 📋 Sobre o Projeto

Este projeto é uma réplica funcional da interface do YouTube, desenvolvida como exercício de front-end e full-stack. Inclui:

- Interface responsiva fiel ao YouTube
- Sistema de carregamento dinâmico de vídeos via API
- Player de vídeo integrado
- Design moderno com gradientes e animações

## ✨ Funcionalidades

- ✅ Header com barra de pesquisa
- ✅ Sidebar com navegação
- ✅ Grade de vídeos responsiva
- ✅ Categorias filtráveis
- ✅ Página de reprodução de vídeo
- ✅ Carregamento dinâmico via API REST
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Animações e efeitos hover

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com:
  - Gradientes e sombras
  - Animações e transições
  - Grid e Flexbox
  - Media queries para responsividade
- **JavaScript (ES6+)** - Interatividade e consumo de API

### Backend (opcional)
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **CORS** - Middleware para cross-origin

## 📁 Estrutura do Projeto

```
youtube-clone/
├── index.html          # Página principal com grade de vídeos
├── watch.html          # Página de reprodução de vídeo
├── style.css           # Estilos globais
└── README.md           # Documentação
```

## 🚀 Como Usar

### Opção 1: Apenas Frontend (estático)

1. Clone o repositório:
```bash
git clone https://github.com/wendell0102/youtube-clone.git
cd youtube-clone
```

2. Abra `index.html` no navegador

### Opção 2: Com Backend (dinâmico)

#### Passo 1: Configurar o Backend

1. Crie uma pasta para o servidor:
```bash
mkdir youtube-clone-backend
cd youtube-clone-backend
```

2. Inicialize o projeto Node:
```bash
npm init -y
npm install express cors
```

3. Crie o arquivo `server.js`:

```javascript
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const videosPath = path.join(__dirname, 'videos');
const thumbsPath = path.join(__dirname, 'thumbnails');

const videos = [
  {
    id: '1',
    title: 'Meu primeiro vídeo',
    channel: 'Wendell',
    views: '123 visualizações',
    date: 'há 1 dia',
    duration: '10:30',
    thumbnail: '/thumbnails/video1.jpg',
    src: '/videos/video1.mp4'
  },
  {
    id: '2',
    title: 'Segundo vídeo',
    channel: 'Wendell',
    views: '456 visualizações',
    date: 'há 2 dias',
    duration: '5:45',
    thumbnail: '/thumbnails/video2.jpg',
    src: '/videos/video2.mp4'
  }
];

app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.use('/videos', express.static(videosPath));
app.use('/thumbnails', express.static(thumbsPath));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

4. Crie as pastas e adicione seus vídeos:
```bash
mkdir videos thumbnails
# Coloque seus arquivos .mp4 em videos/
# Coloque suas thumbnails .jpg em thumbnails/
```

5. Inicie o servidor:
```bash
node server.js
```

#### Passo 2: Abrir o Frontend

1. Abra `index.html` no navegador
2. Os vídeos serão carregados automaticamente da API
3. Clique em um card para assistir o vídeo em `watch.html`

## 🎨 Customizações de Design

### Cores Principais
- Background: `#0f0f0f`
- Sidebar/Header: `#212121`
- Hover: `#3d3d3d`
- Destaque: `#ff0000` (vermelho YouTube)
- Texto: `#ffffff` / `#aaaaaa`

### Responsividade
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 📝 API Endpoints

### `GET /api/videos`
Retorna a lista de vídeos disponíveis.

**Resposta:**
```json
[
  {
    "id": "1",
    "title": "Título do vídeo",
    "channel": "Nome do canal",
    "views": "123 visualizações",
    "date": "há 1 dia",
    "duration": "10:30",
    "thumbnail": "/thumbnails/video1.jpg",
    "src": "/videos/video1.mp4"
  }
]
```

## 🔧 Próximas Melhorias

- [ ] Sistema de busca funcional
- [ ] Autenticação de usuários
- [ ] Sistema de comentários
- [ ] Sistema de likes/dislikes
- [ ] Upload de vídeos
- [ ] Playlists
- [ ] Histórico de visualização
- [ ] Modo escuro/claro

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Wendell**
- GitHub: [@wendell0102](https://github.com/wendell0102)

## 🙏 Agradecimentos

Projeto desenvolvido para fins educacionais, inspirado na interface do YouTube.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
