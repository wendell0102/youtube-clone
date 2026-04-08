const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());

const videosPath = path.join(__dirname, 'videos');
const thumbsPath = path.join(__dirname, 'thumbnails');

// Cria as pastas se nao existirem
if (!fs.existsSync(videosPath)) fs.mkdirSync(videosPath);
if (!fs.existsSync(thumbsPath)) fs.mkdirSync(thumbsPath);

// Escaneia a pasta videos/ automaticamente
function getVideos() {
  if (!fs.existsSync(videosPath)) return [];

  return fs.readdirSync(videosPath)
    .filter(file => file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))
    .map((file, index) => {
      const name = path.parse(file).name;
      const thumbJpg = name + '.jpg';
      const thumbPng = name + '.png';
      const thumbExists = fs.existsSync(path.join(thumbsPath, thumbJpg))
        ? thumbJpg
        : fs.existsSync(path.join(thumbsPath, thumbPng))
          ? thumbPng
          : null;

      return {
        id: String(index + 1),
        title: name.replace(/[-_]/g, ' '),
        channel: 'Wendell',
        views: '0 visualizacoes',
        date: 'recente',
        duration: '0:00',
        thumbnail: thumbExists ? `/thumbnails/${thumbExists}` : null,
        src: `/videos/${file}`
      };
    });
}

app.get('/api/videos', (req, res) => {
  res.json(getVideos());
});

app.use('/videos', express.static(videosPath));
app.use('/thumbnails', express.static(thumbsPath));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Videos encontrados: ${getVideos().length}`);
});
