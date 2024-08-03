const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Muitas requisições vindas deste IP, por favor tente novamente mais tarde.',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = apiLimiter;
