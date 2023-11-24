//**************************************    binance    ************************************************ */
const crypto = require("crypto");
const bs58 = require("bs58");

function generateBinanceKeysAndAddress() {
  const privateKey = crypto.randomBytes(32).toString("hex");

  const keyPair = crypto.createECDH("secp256k1");
  keyPair.setPrivateKey(Buffer.from(privateKey, "hex"));
  const publicKey = keyPair.getPublicKey("hex");

  const publicKeyHash = crypto
    .createHash("sha256")
    .update(Buffer.from(publicKey, "hex"))
    .digest();
  const ripeHash = crypto
    .createHash("ripemd160")
    .update(publicKeyHash)
    .digest();
  const versionByte = Buffer.from("00", "hex");
  const extendedRipeHash = Buffer.concat([versionByte, ripeHash]);
  const hash1 = crypto.createHash("sha256").update(extendedRipeHash).digest();
  const hash2 = crypto.createHash("sha256").update(hash1).digest();
  const checksum = hash2.slice(0, 4);
  const extendedHashWithChecksum = Buffer.concat([extendedRipeHash, checksum]);
  const address = bs58.encode(extendedHashWithChecksum);

  console.log("BINANCE ====================: ");
  console.log("Binance Address:", address);
  console.log("Binance Public Key:", publicKey);
  console.log("Binance Private Key:", privateKey);

  return {
    privateKey,
    publicKey,
    address,
  };
}
