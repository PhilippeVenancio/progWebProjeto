

const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('postgres://iorgers@localhost/anfib')

class User extends Model { }

User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    lucky_number: DataTypes.NUMBER
}, { sequelize, modelName: 'users'});

module.exports = User
