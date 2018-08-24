'use strict';
const fs = require('fs');

let binsList;
let writeLocation;

writeLocation = `${__dirname}/bins.json`;
binsList = require(writeLocation);

const db = {};

db.create = name => {
  const newBin = Object.assign(bin, {
    //
  });
  binsList.push(newBin);
  fs.writeFileSync(writeLocation, JSON.stringify(binsList, null, 2));
  return binList.slice(-1)[0];
}

db.findOne = name => {
  if (binList[name] === undefined) {return false}
  else {return binList[name]}
}

db.findAll = () => binsList;

db.drop = () => {
  binList = [];
  fs.writeFileSync(writeLocation, JSON.stringify(binsList, null, 2));
  return true;
};

db.reset = () => {
  binsList = JSON.parse(fs.readFileSync(writeLocation))
};

module.exports = db;