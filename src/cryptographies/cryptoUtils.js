import CryptoJS from "crypto-js";
import forge from "node-forge";

// 📌 AES Encryption
export const encryptAES = (message, secretKey) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

export const decryptAES = (ciphertext, secretKey) => {
  return CryptoJS.AES.decrypt(ciphertext, secretKey).toString(CryptoJS.enc.Utf8);
};

// 📌 SHA-2 Hashing
export const hashSHA256 = (message) => {
  return CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
};

// 📌 RSA Key Generation
export const generateRSAKeys = () => {
  const keys = forge.pki.rsa.generateKeyPair(2048);
  return {
    publicKey: forge.pki.publicKeyToPem(keys.publicKey),
    privateKey: forge.pki.privateKeyToPem(keys.privateKey),
  };
};

// 📌 RSA Encryption
export const encryptRSA = (message, publicKeyPem) => {
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
  return forge.util.encode64(publicKey.encrypt(forge.util.encodeUtf8(message)));
};

// 📌 RSA Decryption
export const decryptRSA = (ciphertext, privateKeyPem) => {
  const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
  return forge.util.decodeUtf8(privateKey.decrypt(forge.util.decode64(ciphertext)));
};
