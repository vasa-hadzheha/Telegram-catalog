const Channel = require("./model_db.js");
const {Op} = require("sequelize");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const options = require("../src/options.js");
const TOKEN = options.token;

function httpRequest(URL, Method)
{
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open(Method, URL, false);
      xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);
};
function getMemberCount(token,chat_id)
{
      return httpRequest(`https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${chat_id}`, "GET");
}

function getChatId(link){
    return `@${link.slice(13)}`
};

const channelController ={
    getAll: async(req, res)=>{
        try {
            res.send(await Channel.findAll());
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    getChat: async(req,res)=>{
        try {
            let queryObject = { where:{} };
        
            if (req.query.id)
                queryObject.where.id = { [Op.substring]:req.query.id }

            console.log(queryObject);
            console.log(queryObject.where.id);
            let channel = await Channel.findByPk(parseInt(req.query.id));
            console.log(channel);
            let channelLink = channel.dataValues.channel_link;
            console.log(`Channel Link: ${channelLink}`);
            let chat_id = getChatId(channelLink);
            console.log(chat_id);
            // let queriedChannels = await Channel.findAll(queryObject);
            res.send(httpRequest(`https://api.telegram.org/bot${TOKEN}/getChat?chat_id=${chat_id}`, "GET"));
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    getMemberCount: async(req,res)=>{
        try {
            let queryObject = { where:{} };
        
            if (req.query.id)
                queryObject.where.id = { [Op.substring]:req.query.id }

            console.log(queryObject);
            console.log(queryObject.where.id);
            let channel = await Channel.findByPk(parseInt(req.query.id));
            console.log(channel);
            let channelLink = channel.dataValues.channel_link;
            console.log(`Channel Link: ${channelLink}`);
            let chat_id = getChatId(channelLink);
            console.log(chat_id);
            // let queriedChannels = await Channel.findAll(queryObject);

            // Send a request to Telegram API to get number of members in a particular group or channel
            let memberCount = httpRequest(`https://api.telegram.org/bot${TOKEN}/getChatMembersCount?chat_id=${chat_id}`, "GET");
            console.log(memberCount);
            let result = String(memberCount.result);
            console.log(result);
            res.send(result);
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    getChannelPhoto: async(req,res)=>{
        try {
            let queryObject = { where:{} };
        
            if (req.query.id)
                queryObject.where.id = { [Op.substring]:req.query.id }

            console.log(queryObject);
            console.log(queryObject.where.id);
            let channel = await Channel.findByPk(parseInt(req.query.id));
            console.log(channel);
            let channelLink = channel.dataValues.channel_link;
            console.log(`Channel Link: ${channelLink}`);
            let chat_id = getChatId(channelLink);
            console.log(chat_id);
            // let queriedChannels = await Channel.findAll(queryObject);

            // Send a request to Telegram API to get number of members in a particular group or channel
            let chat = httpRequest(`https://api.telegram.org/bot${TOKEN}/getChat?chat_id=${chat_id}`, "GET");
            console.log(chat);
            let small_file_id = chat.result.photo.small_file_id;
            console.log("small profile photo file id: ",small_file_id)
            let file_path = httpRequest(`https://api.telegram.org/bot${TOKEN}/getFile?file_id=${small_file_id}`, "GET").result.file_path;
            console.log("profile photo path: ",file_path);
            let channelPhoto = `https://api.telegram.org/file/bot${TOKEN}/${file_path}`
            res.send(channelPhoto);
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    getById: async(req, res)=>{
        try {
            let channel = await Channel.findByPk(parseInt(req.params.id));
            if(channel !== null) res.status(200).send(channel);
            else res.status(404).send("Channel Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    delete: async(req, res)=>{
        try {
            let deletedChannel = await Channel.findByPk(parseInt(req.params.id));
            if(deletedChannel){
                await deletedChannel.destroy();
                res.send(deletedChannel);
            }else res.status(404).send("Channel not found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    post: async(req, res)=>{
        try {
            let newChannel = await Channel.create(req.body);
            res.send(newChannel);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    patch: async(req, res)=>{
        try {
            let updatedChannel = await Channel.findByPk(parseInt(req.params.id));
            if(updatedChannel){
                await updatedChannel.update(req.body);
                res.send(updatedChannel);
            }else res.status(404).send("Channel not found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
};

module.exports = channelController;