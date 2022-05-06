const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/connection")

const User = sequelize.define("User", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = User