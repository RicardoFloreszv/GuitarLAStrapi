module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfi5unpgp3jh03hhbts0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_a5zj'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '1kDm9vVqrYLIfErehmdTsNwr7ekDxS3o'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
