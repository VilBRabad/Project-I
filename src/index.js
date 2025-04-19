import "dotenv/config";
import connectDb from "./db/connectDb.js";
import { app } from "./app.js";
import { ERRORS } from "./utils/constants/messages.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDb();

        app.listen(PORT, () => {
            console.log("Server running on PORT: ", PORT);
        });

    } catch (error) {
        console.error(ERRORS.FAILED_SERVER);
        process.exit(1);
    }
};


startServer();
