'use strict';


/**
 * Creates a new farm
 * Crates a new farm within the staking portal &#127481;&#127479;, after the farm was bought within the backoffice portal &#127462;&#127481;
 *
 * body FarmSale Information about the farm and the user
 * returns FarmContract
 **/
exports.farmStore = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastRewardTime" : "2023-03-28T09:41:19Z",
  "stakeStartTime" : "2023-03-28T09:41:19Z",
  "uniqueId" : "uniqueId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

