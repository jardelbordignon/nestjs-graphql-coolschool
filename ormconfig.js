module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNCHRONIZE == 'true',
    logging: process.env.DB_LOGGING == 'true',
    entities: ['dist/modules/**/*.entity.js'],
    migrations: ['./dist/database/migrations/*.js'],
    subscribers: ['./src/database/subscriber/*.js'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  },
]
