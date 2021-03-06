import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',

        host: `${process.env.POSTGRES_HOST}`,
        port: Number(process.env.POSTGRES_PORT),
        username: `${process.env.POSTGRES_USER}`,
        password: `${process.env.POSTGRES_PASSWORD}`,
        database: `${process.env.POSTGRES_DATABASE}`,
        synchronize: true,
        logging: true,

        entities: ['dist/**/**/*.entity{.ts,.js}'],

        migrationsTableName: 'migration',
        migrations: ['src/migration/*.ts'],

        cli: {
          migrationsDir: 'src/migration',
        },
      }),
  },
];
