'use strict';

var utils = require('../utils/writer.js');
var FarmManagement = require('../service/FarmManagementService');

module.exports.farmStore = function farmStore (req, res, next, body) {
  FarmManagement.farmStore(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
