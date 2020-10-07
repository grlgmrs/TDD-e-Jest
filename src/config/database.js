module.exports = {
  host: "127.0.0.1",
  port: "15432",
  username: "postgres",
  password: "docker",
  database: "tddauth",
  dialect: "postgres",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
