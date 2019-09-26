var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(tableInput, tableCol, tableVal, cb) {
    orm.insertOne("burgers", tableInput, tableCol, tableVal, cb, function(res) {
      cb(res);
    });
  },
  updateOne: function(colVal, condition, cb) {
    orm.updateOne("burgers", colVal, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;