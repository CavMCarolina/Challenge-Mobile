const { Server } = require('socket.io');
const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/caretrack-ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'caretrack-iot' }));
  } else {
    res.writeHead(404);
    res.end();
  }
});
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

function gerarDadosSensor() {
  const niveis = ['Baixo', 'Moderado', 'Alto'];
  return {
    frequenciaCardiaca: Math.floor(62 + Math.random() * 38),
    passos: 7400 + Math.floor(Math.random() * 1200),
    temperatura: parseFloat((36.1 + Math.random() * 1.2).toFixed(1)),
    nivelAtividade: niveis[Math.floor(Math.random() * niveis.length)],
    timestamp: new Date().toISOString(),
  };
}

io.on('connection', socket => {
  console.log(`[IoT] Dispositivo conectado: ${socket.id}`);

  socket.emit('sensor_data', gerarDadosSensor());

  const interval = setInterval(() => {
    socket.emit('sensor_data', gerarDadosSensor());
  }, 3000);

  socket.on('disconnect', () => {
    clearInterval(interval);
    console.log(`[IoT] Dispositivo desconectado: ${socket.id}`);
  });
});

const PORT = 3001;
server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log('\n~~~ Servidor IoT CareTrack ~~~');
  console.log(`Rodando em http://0.0.0.0:${PORT}`);
  console.log('Aguardando conexoes...\n');
});
