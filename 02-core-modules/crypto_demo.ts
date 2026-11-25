import crypto from 'node:crypto';

console.log('--- 1. CRYPTO.RANDOMBYTES ---');




const resetTokenSync = crypto.randomBytes(32).toString('hex');
console.log('Sync Reset Token (Hex):', resetTokenSync);
console.log('Length of Hex string:', resetTokenSync.length);


crypto.randomBytes(16, (err, buffer) => {
  if (err) {
    console.error('Error generating random bytes:', err);
    return;
  }
 
  console.log('Async Session Token (Base64):', buffer.toString('base64'));
});



const hash = 
crypto.createHash("sha256").update("passwprd25").digest("hex");
console.log("Hash:", hash);



const algoithim = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const cipher = crypto.createCipheriv(algoithim,key,iv);
let encrypted = cipher.update("secret data", "utf8", "hex")
+ cipher.final("hex");


const decipher = crypto.createDecipheriv(algoithim,key,iv);
let decrypted = decipher.update(encrypted, "hex", "utf8") +
decipher.final("utf8");