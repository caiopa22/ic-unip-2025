import React, { useState } from "react";
import { encryptAES, decryptAES, hashSHA256, generateRSAKeys, encryptRSA, decryptRSA } from "./cryptographies/cryptoUtils";
import { Button, HStack, Text } from "@chakra-ui/react";

const PyodideComponent = () => {
  const [aesSecretKey] = useState("MySecret123!");
  const [rsaKeys, setRsaKeys] = useState({});
  const [rsaEncrypted, setRsaEncrypted] = useState("");
  const [aesEncrypted, setAesEncrypted] = useState("");
  const [hashedValue, setHashedValue] = useState("");

  const handleGenerateKeys = () => {
    const keys = generateRSAKeys();
    setRsaKeys(keys);
    console.log("🔑 Public Key:\n", keys.publicKey);
    console.log("🔑 Private Key:\n", keys.privateKey);
  };

  const handleEncryptRSA = () => {
    if (rsaKeys.publicKey) {
      const encrypted = encryptRSA("Hello, RSA!", rsaKeys.publicKey);
      setRsaEncrypted(encrypted);
      console.log("🔒 RSA Encrypted:", encrypted);
    }
  };

  const handleDecryptRSA = () => {
    if (rsaKeys.privateKey) {
      const decrypted = decryptRSA(rsaEncrypted, rsaKeys.privateKey);
      console.log("🔓 RSA Decrypted:", decrypted);
    }
  };

  const handleEncryptAES = () => {
    const encrypted = encryptAES("Hello, AES!", aesSecretKey);
    setAesEncrypted(encrypted);
    console.log("🔒 AES Encrypted:", encrypted);
  };

  const handleDecryptAES = () => {
    const decrypted = decryptAES(aesEncrypted, aesSecretKey);
    console.log("🔓 AES Decrypted:", decrypted);
  };

  const handleHashSHA256 = () => {
    const hash = hashSHA256("Hello, SHA-256!");
    setHashedValue(hash);
    console.log("🔐 SHA-256 Hash:", hash);
  };

  return (
    <div>
      <h1>Crypto in React.js 🔐</h1>
      <HStack gap="4">
        <Button onClick={handleGenerateKeys}>Generate RSA Keys</Button>
        <Button onClick={handleEncryptRSA}>Encrypt with RSA</Button>
        <Button onClick={handleDecryptRSA}>Decrypt with RSA</Button>
        <Button onClick={handleEncryptAES}>Encrypt with AES</Button>
        <Button onClick={handleDecryptAES}>Decrypt with AES</Button>
        <Button onClick={handleHashSHA256}>Hash with SHA-256</Button>
      </HStack>

      <h2>SHA-256 Hash:</h2>
      <p>{hashedValue}</p>
    </div>
  );
};

export default PyodideComponent;
