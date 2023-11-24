const bitcoin1 = require("bitcoinjs-lib");
const { ethers } = require("ethers");
const NodeRSA = require("node-rsa");

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
// Example usage of the function

//**************************************    bitcoin    ************************************************ */
const CoinKey = require("coinkey");
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

//*********************************************** solana  ***************************************************************** */
const nacl = require("tweetnacl");

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

//******************************************    VeChain  ********************************************************** */

function generateVeChainKeys() {
  const keyPair = new CoinKey.createRandom("vechain"); // Generate a random key pair for VeChain
  const { address, publicKey, privateKey } = {
    address: keyPair.publicAddress,
    publicKey: keyPair.publicKey.toString("hex"),
    privateKey: keyPair.privateKey.toString("hex"),
  };
  console.log("VECHAIN ====================: ");
  console.log("VeChain Address:", address);
  console.log("VeChain Public Key:", publicKey);
  console.log("VeChain Private Key:", privateKey);
  return { address, publicKey, privateKey };
}

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

//******************************************    Avalanche  ********************************************************** */

function generateAvalancheKeys() {
  const key = new NodeRSA({ b: 512 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  console.log("AVALANCHE ====================: ");
  console.log("Avalanche Public Key:", publicKey);
  console.log("Avalanche Private Key:", privateKey);
  return { publicKey, privateKey };
}

//******************************************    Algorand  ********************************************************** */
const algosdk = require("algosdk");

function generateAlgorandKeys() {
  const account = algosdk.generateAccount();

  console.log("ALGORAND ====================: ");
  console.log("Algorand Address:", account.addr);
  console.log("Algorand private Key:", account.sk);

  return account;
}
module.exports = {
  generateBitcoinKeys,
  generateDogecoinKeys,
  generateEthereumKeys,
  generateBinanceKeysAndAddress,
  generateSolanaKeys,
  generateXRPKeys,
  generateStellarKeys,
  generateVeChainKeys,
  generateAvalancheKeys,
  generateFilecoinKeys,
  generatePolygonKeys,
  generateAlgorandKeys,
};
