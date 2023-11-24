const CoinKey = require("coinkey");

//**************************************    dogecoin    ************************************************ */

function generateDogecoinKeys() {
  const keyPair = new CoinKey.createRandom("dogecoin"); // Generate a random key pair for Dogecoin
  const { address, publicKey, privateKey } = {
    address: keyPair.publicAddress,
    publicKey: keyPair.publicKey.toString("hex"),
    privateKey: keyPair.privateKey.toString("hex"),
  };
  console.log("DOGE ====================: ");
  console.log("Dogecoin Address:", address);
  console.log("Dogecoin Public Key:", publicKey);
  console.log("Dogecoin Private Key:", privateKey);
  return { address, publicKey, privateKey };
}

module.exports = {
  generateDogecoinKeys,
};
