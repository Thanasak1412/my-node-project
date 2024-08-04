import express from 'express';

import { API_PORT, logger } from './config/config';

const app = express();

app.get('/', (_req, res) => {
  res.send('Health check');
});

app.listen(API_PORT, () => {
  logger.info(`Server is running on port ${API_PORT}`);
});
