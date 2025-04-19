
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../configs/config.js");
const UserModel = require("./user.model.js");

const sequelize = new Sequelize(
    config.DB_URL, 
    {
        define: {
            freezeTableName: true
        },
        logging: false
    }
);

const db = {};

//Initialize models
db.User = UserModel(sequelize, DataTypes);

//Add associations


// sequelize.sync({ force: false });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;