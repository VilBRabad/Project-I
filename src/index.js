import "dotenv/config";
import chalk from "chalk";
import connectDb from "./db/connectDb.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDb();

        app.listen(PORT, () => {
            console.log(chalk.green(`Server running on PORT: ${PORT}`));
        });

    } catch (error) {
        console.error(chalk.red("Failed to start server:"), error);
        process.exit(1);
    }
};


startServer();
