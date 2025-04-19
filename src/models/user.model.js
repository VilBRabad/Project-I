const bcrypt = require("bcrypt");

/**
 * @param {import("sequelize").Sequelize} sequelize
 * @param {import("sequelize").DataTypes} DataTypes
 * @param {import("sequelize").Model}
 */

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User", 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            profile_photo_url: {
                type: DataTypes.STRING,
                defaultValue: "https://lh3.googleusercontent.com/ogw/AF2bZyjoIVAU7AAkown0qqulMfBGcSoS0M5J8tF4Ijvs5Dvt2A=s64-c-mo"
            }
        },
        {
            tableName: "User"
        }
    )

    User.prototype.comparePassword = async (password) => {
        return await bcrypt.compare(this.password, password);
    }

    User.beforeCreate("hashed-password", (user) => {
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
    });

    return User;
}