const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require('config');
const cors = require("cors");
const todoRouter = require("./routes/todoRoutes");
const itemRouter = require("./routes/ItemRoute");
const PORT = config.get('port') || 5000;
const dbAdress = config.get('mongoUri');

app.use(cors())
app.use(express.json())

const runServer = async () => {
    try {
        await mongoose.connect(
            dbAdress,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true
            }, () => console.log('connect to mongo'));
        app.listen(PORT, () => console.log(`server has been started on ${PORT}`))
    } catch (error) {
        console.log(error.message)
    }
};

runServer();

app.use('/', todoRouter)
app.use('/', itemRouter)