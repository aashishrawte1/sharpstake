const express = require('express');
const http = require('http');
const cors = require('cors');
const { WebSocketServer } = require('ws');
const { getHistoryData } = require('./data/historyData');
const { log } = require('./utils/logger');

const app = express();
app.use(cors());

// REST endpoint for historical data
app.get('/api/history', (req, res) => {
  try {
    const data = getHistoryData();
    res.json(data);
  } catch (err) {
    log('Error fetching historical data', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create HTTP server
const server = http.createServer(app);

// WebSocket server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  log('Client connected via WebSocket');

  const sendRandomData = () => {
    const data = {
      timestamp: new Date().toISOString(),
      cpu: (Math.random() * 100).toFixed(2) + '%',
      memory: (Math.random() * 16).toFixed(2) + 'GB',
      users: Math.floor(Math.random() * 1000),
    };
    ws.send(JSON.stringify(data));
  };

  const interval = setInterval(() => {
    try {
      if (ws.readyState === ws.OPEN) {
        sendRandomData();
      }
    } catch (err) {
      log('WebSocket send error', err);
    }
  }, 5000);

  ws.on('close', () => {
    clearInterval(interval);
    log('WebSocket connection closed');
  });

  ws.on('error', (err) => {
    log('WebSocket error', err);
  });
});

// Start server
const PORT = 4000;
server.listen(PORT, () => {
  log(`Server listening on http://localhost:${PORT}`);
});

