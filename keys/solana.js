const nacl = require("tweetnacl");

//*********************************************** solana  ***************************************************************** */

function generateSolanaKeys() {
  const privateKey = nacl.sign.keyPair();

  const publicKey = Buffer.from(privateKey.publicKey).toString("base64");

  const privateKeyBase58 = Buffer.from(privateKey.secretKey).toString("base64");

  const address = publicKey;

  console.log("SOLANA ====================: ");
  console.log("address: ", address);
  console.log("Solana Private Key:", privateKeyBase58);
  console.log("Solana Public Key:", publicKey);

  return { privateKeyBase58, publicKey, address };
}

module.exports = {
  generateSolanaKeys,
};
