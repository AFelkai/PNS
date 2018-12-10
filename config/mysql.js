 module.exports = {
    // mysql settings
    mysql_client: {
      // host
      host: process.env.DATABASE_HOST || 'mysql',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      database: 'default_database',
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
    },
    app: true,
    agent: false,
};