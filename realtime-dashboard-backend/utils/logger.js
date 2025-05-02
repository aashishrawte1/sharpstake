function log(message, error = null) {
    const time = new Date().toISOString();
    if (error) {
      console.error(`[${time}] ERROR: ${message}`, error);
    } else {
      console.log(`[${time}] ${message}`);
    }
  }
  
  module.exports = { log };
  