import nacl from "tweetnacl";
import * as util from "tweetnacl-util";

export function generateKeyPair() {
  const keyPair = nacl.box.keyPair();

  return {
    publicKey: util.encodeBase64(keyPair.publicKey),
    privateKey: util.encodeBase64(keyPair.secretKey),
  };
}

export function encryptMessage(message, receiverPublicKey, senderPrivateKey) {
  const nonce = nacl.randomBytes(nacl.box.nonceLength);

  const encrypted = nacl.box(
    util.decodeUTF8(message),
    nonce,
    util.decodeBase64(receiverPublicKey),
    util.decodeBase64(senderPrivateKey)
  );

  return {
    encrypted: util.encodeBase64(encrypted),
    nonce: util.encodeBase64(nonce),
  };
}

export function decryptMessage(encrypted, nonce, senderPublicKey, receiverPrivateKey) {
  const decrypted = nacl.box.open(
    util.decodeBase64(encrypted),
    util.decodeBase64(nonce),
    util.decodeBase64(senderPublicKey),
    util.decodeBase64(receiverPrivateKey)
  );

  return util.encodeUTF8(decrypted);
}