require('dotenv').config()

module.exports = {
  development: {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
      keepAlive: true
    },
    ssl: true,
    logging: false,
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}
