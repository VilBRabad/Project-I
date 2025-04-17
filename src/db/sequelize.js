import { Sequelize } from "sequelize";
import chalk from "chalk";

const DB_URI = process.env.DATABASE_URI;

if (!DB_URI) {
    console.error(chalk.red("DATABASE URI is not define"));
}

const sequelize = new Sequelize(
    DB_URI,
    {
        define: {
            freezeTableName: true,
        },
        logging: false
    }
)

export default sequelize;