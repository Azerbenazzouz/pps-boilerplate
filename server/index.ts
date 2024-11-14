import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { apiRouter } from './routes';
import { errorHandler } from './middleware/error-handler';
import { config } from './config';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api', apiRouter);

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});