import chalk from "chalk";
import sequelize from "./sequelize.js";

async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log(chalk.yellowBright("Connected to db!"));
    } catch (error) {
        console.error(chalk.red('Unable to connect to the database:'), error);
    }
}

export default connectDb;