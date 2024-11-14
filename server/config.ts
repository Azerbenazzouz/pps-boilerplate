export const config = {
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    database: {
      url: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/mydb',
    },
    cors: {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    }
  };