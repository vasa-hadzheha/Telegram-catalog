const Channel = require("./model_db.js");
const {Op} = require("sequelize");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const options = require("../src/options.js");
const TOKEN = options.token;

function getChatId(link){
    return 
}

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
            // let queriedChannels = await Channel.findAll(queryObject);
            res.send(channelLink);
            
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