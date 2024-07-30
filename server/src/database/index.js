const { Sequelize } = require('sequelize');
const path = require('path');

const dbPath = path.join(__dirname, "./database.sqlite");

const sequelize = new Sequelize({
    storage: dbPath,
    dialect: 'sqlite',
    logging: console.log,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync(); // sync database
    })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    sequelize
};
