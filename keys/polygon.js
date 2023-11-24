//******************************************    POLYGON  ********************************************************** */

function generatePolygonKeys() {
  const wallet = ethers.Wallet.createRandom();

  const privateKey = wallet.privateKey;

  const publicKey = wallet.publicKey;

  const address = wallet.address;

  console.log("POLYGON ====================: ");
  console.log("Polygon Address:", address);
  console.log("Polygon Public Key:", publicKey);
  console.log("Polygon Private Key:", privateKey);

  return { privateKey, publicKey, address };
}
