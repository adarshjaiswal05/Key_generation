//******************************************    XRP  ********************************************************** */
const keypairs = require("ripple-keypairs");
const { decodeAccountID } = require("ripple-address-codec");

function generateXRPKeys() {
  const seed = keypairs.generateSeed();

  // Derive the key pair from the seed
  const keyPair = keypairs.deriveKeypair(seed);

  const privateKey = keyPair.privateKey;
  const publicKey = keyPair.publicKey;

  // Generate the XRP (Ripple) address from the public key
  //   const address = decodeAccountID(keypairs.deriveAddress(publicKey));

  console.log("XRP ====================: ");
  console.log("XRP Private Key:", privateKey);
  console.log("XRP Public Key:", publicKey);
  //   console.log("XRP Address:", address);

  return {
    privateKey: privateKey,
    publicKey: publicKey,
    // address: address,
  };
}
