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
    title: 'Meu primeiro video',
    channel: 'Wendell',
    views: '123 visualizacoes',
    date: 'ha 1 dia',
    duration: '10:30',
    thumbnail: '/thumbnails/video1.jpg',
    src: '/videos/video1.mp4'
  },
  {
    id: '2',
    title: 'Segundo video',
    channel: 'Wendell',
    views: '456 visualizacoes',
    date: 'ha 2 dias',
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
