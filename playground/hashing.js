const {SHA256, AES, enc, MD5} = require('crypto-js');

//Hashing/ encyption - decryption text
let message = 'Hey, I am Tony';
let hash = SHA256(message).toString();
let md5Hash = MD5(message).toString();
console.log(`message: ${message}`);
console.log(`hash: ${hash}`);
console.log(`MD5 hash: ${md5Hash}`);
let key = 'hooha';
let encText = AES.encrypt(message, key);
let decText = AES.decrypt(encText, key).toString(enc.Utf8);
console.log(`AES encrypted: ${encText}`);
console.log(`AES decrypted: ${decText}`);

//Hashing/ encyption - decryption objects
let data = {
  id: 4
};
let token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'xxx').toString()
};
//token.data.id = 5
//token.hash = SHA256(JSON.stringify(data)).toString();
let resultHash = SHA256(JSON.stringify(token.data) + 'xxx').toString();
console.log(token.hash);
console.log(resultHash);
if(token.hash === resultHash){
  console.log('Message was not modified');
} else {
  console.log('Message was modified');
}
