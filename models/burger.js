var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },
    insertOne: function(columns, values, callback){
        orm.insertOne("burgers", columns, values, (res) => {
            callback(res);
        });
    },
    updateOne: function(objectColumnValues, condition, callback){
        orm.updateOne("burgers", objectColumnValues, condition, (res) => {
            callback(res);
        });
    }
};


module.exports = burger;