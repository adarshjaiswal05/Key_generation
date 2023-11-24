const { ethers } = require("ethers");

//**************************************    ethereum    ************************************************ */

function generateEthereumKeys() {
  const wallet = ethers.Wallet.createRandom();

  const privateKey = wallet.privateKey;

  const publicKey = wallet.publicKey;

  const address = wallet.address;

  console.log("ETHEREUM ====================: ");
  console.log("Ethereum Address:", address);
  console.log("Ethereum Public Key:", publicKey);
  console.log("Ethereum Private Key:", privateKey);

  return { privateKey, publicKey, address };
}
