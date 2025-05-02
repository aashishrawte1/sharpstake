function getHistoryData() {
    const now = Date.now();
    return Array.from({ length: 10 }, (_, i) => ({
      timestamp: new Date(now - i * 30000).toISOString(),
      cpu: (Math.random() * 100).toFixed(2) + '%',
      memory: (Math.random() * 16).toFixed(2) + 'GB',
      users: Math.floor(Math.random() * 1000),
    })).reverse();
  }
  
  module.exports = { getHistoryData };
  