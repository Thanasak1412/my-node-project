import winston from 'winston';

const API_PORT = process.env.API_PORT;

console.log('API_PORT => ', API_PORT);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export { API_PORT, logger };
