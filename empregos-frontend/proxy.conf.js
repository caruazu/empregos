const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: process.env.API_URL,
    secure: false,
    LogLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
