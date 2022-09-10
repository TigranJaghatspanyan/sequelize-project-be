export default {
  host: process.env.DB_HOST ?? "localhost",
  database: process.env.DB_DATABASE ?? "db",
  username: process.env.DB_USERNAME ?? "mysql",
  password: process.env.DB_PASSWORD ?? "mysql",
};
