// import TelegramBot from "node-telegram-bot-api";
const Router = require("express").Router;
const channelController = require("./controller_db.js");
const channelRouter = new Router();

channelRouter.get("/", channelController.getAll);
channelRouter.get("/:id", channelController.getById);
channelRouter.delete("/:id", channelController.delete);
channelRouter.post("/", channelController.post);
channelRouter.patch("/:id", channelController.patch);

module.exports = channelRouter;
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const options = require("../options")

// const TOKEN = options.token
// //const bot = new TelegramBot(TOKEN)
// var chat_id = "@telegram";

// var oReq = new XMLHttpRequest();
// oReq.open("GET", "https://api.telegram.org/file/bot5245684585:AAHrIiqn-F83euFvX2YxxZeRw5u5XpeZn2g/profile_photos/file_1.jpg", true);
// oReq.responseType = "arraybuffer";

// oReq.onload = function (oEvent) {
//   var arrayBuffer = oReq.response; // Note: not oReq.responseText
//   if (arrayBuffer) {
//     var byteArray = new Uint8Array(arrayBuffer);
//     for (var i = 0; i < byteArray.byteLength; i++) {
//       // do something with each byte in the array
//     }
//   }
// };

// oReq.send(null);

// function httpRequest(URL, Method)
// {
//       var xmlHttp = new XMLHttpRequest();
//       xmlHttp.open(Method, URL, false);
//       xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//       xmlHttp.send(null);
//       return JSON.parse(xmlHttp.responseText);
// }

// // Send a request to Telegram API to get number of members in a particular group or channel
// function getMemberCount()
// {
//       return httpRequest(`https://api.telegram.org/bot${TOKEN}/getChatMembersCount?chat_id=${chat_id}`, "GET");
// }

// // Run function and parse only the number of members
// var result = getMemberCount()["result"];
// console.log(`${result}: it is number of subscribers`);









// bot.setWebHook()

// const app = new Koa()

// const router = Router()

// const port = options.telegramPort

// router.post('/bot', ctx=>{
//     console.log(ctx)
//     ctx.status = 200
// })

// app.use(router.routes())

// app.listen(port, ()=>{
//     console.log(`Telegram server was started on port: ${port}`)
// })