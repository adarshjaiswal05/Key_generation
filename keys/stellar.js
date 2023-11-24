//******************************************    STELLAR  ********************************************************** */

const StellarSdk = require("stellar-sdk");

function generateStellarKeys() {
  const pair = StellarSdk.Keypair.random();

  const privateKey = pair.secret();
  const publicKey = pair.publicKey();

  const address = pair.publicKey();

  console.log("STELLAR ====================: ");
  console.log("Stellar Private Key:", privateKey);
  console.log("Stellar Public Key:", publicKey);
  console.log("Stellar Address:", address);

  return {
    privateKey: privateKey,
    publicKey: publicKey,
    address: address,
  };
}
