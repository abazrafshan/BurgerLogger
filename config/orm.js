var connection = require("../config/connection.js");

function printQuestionMarks(number) {
    var array = [];
    for (var i = 0; i < number; i++){
        array.push("?");
    }
    return array.toString();
}

function objectToSql(object){
    var array = [];
    for (var key in object){
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

var orm = {
    selectAll: function(table, callback){
        var query = "select * from " + table + ";";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, columns, values, callback){
        var query = "insert into " + table + " (" + columns.toString() + ") values (" + printQuestionMarks(values.length) + ") ";
        console.log(query);
        connection.query(query, values, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(table, objectColumnValues, condition, callback){
        var query = "update " + table + " set " + objectToSql(objectColumnValues) + " where " + condition;
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

module.exports = orm;