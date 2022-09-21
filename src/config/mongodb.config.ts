import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  mongouri: process.env.MONGO_URI,
}));
