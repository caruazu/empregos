const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false,
    LogLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
