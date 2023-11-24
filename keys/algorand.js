//******************************************    Algorand  ********************************************************** */
const algosdk = require("algosdk");

function generateAlgorandKeys() {
  const account = algosdk.generateAccount();

  console.log("ALGORAND ====================: ");
  console.log("Algorand Address:", account.addr);
  console.log("Algorand private Key:", account.sk);

  return account;
}
