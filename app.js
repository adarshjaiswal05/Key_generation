const AlgorandKeys = require("./keys/algorand");
const AvalancheKeys = require("./keys/avalanche");
const BinanceKeys = require("./keys/binance");
const BitcoinKeys = require("./keys/bitcoin");
const DogecoinKeys = require("./keys/dogecoin");
const EthereumKeys = require("./keys/ethereum");
const FilecoinKeys = require("./keys/fileCoin");
const PolygonKeys = require("./keys/polygon");
const SolanaKeys = require("./keys/solana");
const StellarKeys = require("./keys/stellar");
const VeChainKeys = require("./keys/veChain");
const XRPKeys = require("./keys/xrp");

//***********************************************   KEYS    ********************************************************************* */

AlgorandKeys.generateAlgorandKeys();
AvalancheKeys.generateAvalancheKeys();
BinanceKeys.generateBinanceKeysAndAddress();
BitcoinKeys.generateBitcoinKeys();
DogecoinKeys.generateDogecoinKeys();
EthereumKeys.generateEthereumKeys();
FilecoinKeys.generateFilecoinKeys();
PolygonKeys.generatePolygonKeys();
SolanaKeys.generateSolanaKeys();
StellarKeys.generateStellarKeys();
VeChainKeys.generateVeChainKeys();
XRPKeys.generateXRPKeys();
