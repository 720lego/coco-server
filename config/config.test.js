module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: '193.112.222.220',
    port: 2306,
    database: 'coco',
    username: 'eze',
    password: '443288zyy$$&&',
    logging: false
  },
  cors: {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  },
  security: {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [
      'http://localhost:8080',
      'http://localhost:8081',
    ],
  },
  cluster: {
    listen: {
      port: 8080,
    }
  }
}
