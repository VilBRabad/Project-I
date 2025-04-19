import { ERRORS } from "../utils/constants/messages.js";
import sequelize from "./sequelize.js";

async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log("Connected to db!");
    } catch (error) {
        console.error(ERRORS.DATABASE_ERROR);
    }
}

export default connectDb;