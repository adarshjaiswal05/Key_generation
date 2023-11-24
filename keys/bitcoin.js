const CoinKey = require("coinkey");

//**************************************    bitcoin    ************************************************ */

function generateBitcoinKeys() {
  const keyPair = new CoinKey.createRandom("bitcoin"); // Generate a random key pair for Bitcoin
  const { address, publicKey, privateKey } = {
    address: keyPair.publicAddress,
    publicKey: keyPair.publicKey.toString("hex"),
    privateKey: keyPair.privateKey.toString("hex"),
  };
  console.log("BITCOIN ====================: ");
  console.log("Bitcoin Address:", address);
  console.log("Bitcoin Public Key:", publicKey);
  console.log("Bitcoin Private Key:", privateKey);
  return { address, publicKey, privateKey };
}

module.exports = {
  generateBitcoinKeys,
};
