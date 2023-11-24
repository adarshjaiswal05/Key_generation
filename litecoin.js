//**************************************    litecoin    ************************************************ */
const bitcoin = require("bitcoinjs-lib");

function generateLitecoinKeys() {
  // Generate a random 256-bit private key
  const keyPair = bitcoin.ECPair.makeRandom({
    network: bitcoin.networks.litecoin,
  });

  // Get the Litecoin address from the public key
  const { address } = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network: bitcoin.networks.litecoin,
  });

  (privateKey = keyPair.toWIF()),
    (publicKey = keyPair.publicKey.toString("hex")),
    console.log("LITECOIN====================: ");
  console.log("Litecoin Private Key:", privateKey);
  console.log("Litecoin Public Key:", publicKey);
  console.log("Litecoin Address:", address);
  return {
    privateKey,
    publicKey,
    address,
  };
}

generateLitecoinKeys();
