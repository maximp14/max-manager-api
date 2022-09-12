import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  jwtsecret: process.env.JWT_SECRET,
  expires: process.env.JWT_EXPIRES,
}));
