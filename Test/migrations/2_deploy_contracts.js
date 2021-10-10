var Hashnotes = artifacts.require("./Hashnotes.sol");

module.exports = function(deployer) {
  deployer.deploy(Hashnotes,"Welcome to Hashnotes");
};
