const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      from: "0x447b0Ae98A1A020F912c6CD5CFc721518A20ef46"
    }
  }
};
