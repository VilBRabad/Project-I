const { config } = require("dotenv");
config();

const { app } = require("./app.js");
const { sequelize } = require("./models/index.js");
const { messages } = require("./utils/constants/messages.js");

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        });
    } catch (error) {
        console.log(messages.FAILED_SERVER);
        process.exit(1);
    }
}

startServer();
