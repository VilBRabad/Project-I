import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";
import bcrypt from "bcrypt";

const User = sequelize.define(
    "User",
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile_photo_url: {
            type: DataTypes.STRING,
            defaultValue: "https://lh3.googleusercontent.com/ogw/AF2bZyjoIVAU7AAkown0qqulMfBGcSoS0M5J8tF4Ijvs5Dvt2A=s64-c-mo"
        }
    }
);


User.beforeCreate('hashed-password', async(user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});


(async () => {
    await User.sync();
})();

export default User;