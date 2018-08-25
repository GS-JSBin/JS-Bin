'use strict';
const fs = require('fs');

let binsList;
let writeLocation;

writeLocation = `${__dirname}/bins.json`;
binsList = require(writeLocation);
binsList = JSON.parse(fs.readFileSync(writeLocation, 'utf-8'));

const db = {};

db.create = name => {
  const newBin = {
      "terminal": "",
      "code": ""
    }
  binsList[name] = newBin;
  fs.writeFileSync(writeLocation, JSON.stringify(binsList, null, 2));
  // return binsList.slice(-1)[0];
}

db.findOne = name => {
  if (binsList[name] === undefined) {return false}
  else {return binsList[name]}
}

db.findAll = () => binsList;

db.deleteOne = name => {
  if (binsList[name] === undefined) {return false}
  else {
    delete binsList[name]
    fs.writeFileSync(writeLocation, JSON.stringify(binsList, null, 2));
    return true;
  }
}

db.drop = () => {
  binsList = [];
  fs.writeFileSync(writeLocation, JSON.stringify(binsList, null, 2));
  return true;
};

db.reset = () => {
  binsList = JSON.parse(fs.readFileSync(writeLocation))
};

module.exports = db;