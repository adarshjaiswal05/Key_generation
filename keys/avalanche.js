const NodeRSA = require("node-rsa");
//******************************************    Avalanche  ********************************************************** */

function generateAvalancheKeys() {
  const key = new NodeRSA({ b: 512 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  console.log("AVALANCHE ====================: ");
  console.log("Avalanche Public Key:", publicKey);
  console.log("Avalanche Private Key:", privateKey);
  return { publicKey, privateKey };
}

module.exports = {
  generateAvalancheKeys,
};
