const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbconnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Post.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
title: {
type: DataTypes.STRING, allowNull: false, required: true
},
body: {
type: DataTypes.STRING, allowNull: false, required: true
}},
{
sequelize: sequelizeInstance, modelName: 'posts', // uselowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = Post;
// firstName: 
//     lastName: 
//     emailId: 
//     password: