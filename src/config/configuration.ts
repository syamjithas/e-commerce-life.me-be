import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => ({
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '60s',
  },
  anotherService: {
    apiKey: process.env.ANOTHER_SERVICE_API_KEY,
    url: process.env.ANOTHER_SERVICE_URL,
  },
}));
