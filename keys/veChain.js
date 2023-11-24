const CoinKey = require("coinkey");

//******************************************    VeChain  ********************************************************** */

function generateVeChainKeys() {
  const keyPair = new CoinKey.createRandom("vechain"); // Generate a random key pair for VeChain
  const { address, publicKey, privateKey } = {
    address: keyPair.publicAddress,
    publicKey: keyPair.publicKey.toString("hex"),
    privateKey: keyPair.privateKey.toString("hex"),
  };
  console.log("VECHAIN ====================: ");
  console.log("VeChain Address:", address);
  console.log("VeChain Public Key:", publicKey);
  console.log("VeChain Private Key:", privateKey);
  return { address, publicKey, privateKey };
}

module.exports = {
  generateVeChainKeys,
};
