const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const uint8 = new Uint8Array(publicKey);
    const array1 = uint8.slice(1, uint8.length+1);
    const keccak = keccak256(array1);
    return keccak.slice(-20);
}

module.exports = getAddress;
