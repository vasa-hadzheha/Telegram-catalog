const express = require('express');
const options = require("./options");
const channelRouter = require("../telegramChannels");

const cors = require("cors");

const backendServer = express()

backendServer.use(
    cors({
        origin:`http://${options.clientIP}:${options.clientPort}`,
    })
);

backendServer.use(express.urlencoded({extended: false}));

//to get objects and work with json format
backendServer.use(express.json());

backendServer.use("/telegram-channels", channelRouter);

backendServer.all("*", (req,res)=>{
    res.status(404).send("URL not found");
});

backendServer.listen(options.serverPort,()=>{
    console.log(`Backend server was started on http://localhost:${options.serverPort}`);
})