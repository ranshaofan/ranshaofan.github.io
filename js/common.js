const MIMIKEY = "rSf1009Ydy00Kxkl88yq66hxfhmh";
const Thief = "FangJunZiBuFangXiaoRen";
const MIMIKEY1 = "YqhhbZaZz/A=";
//DES加密
function encryptDes(message, key) {
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

// DES解密
function decryptDes(ciphertext, key) {
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    // direct decrypt ciphertext
    const decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}