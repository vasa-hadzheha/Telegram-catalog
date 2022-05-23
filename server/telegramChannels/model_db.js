const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../src/options");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: options.dbPathTelegramChannels
});

class Channel extends Model{}

Channel.init(
    {
        channel_link: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: "Channel",
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = Channel;

