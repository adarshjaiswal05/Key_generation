//******************************************    Filecoin  ********************************************************** */

function generateFilecoinKeys() {
  const key = new NodeRSA({ b: 512 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  console.log("FILECOIN ====================: ");
  console.log("Filecoin Public Key:", publicKey);
  console.log("Filecoin Private Key:", privateKey);
  return { publicKey, privateKey };
}
