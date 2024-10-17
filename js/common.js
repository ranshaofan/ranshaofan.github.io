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
function ajaxRequest(url, params, successCallback, errorCallback) {
    // 创建一个唯一的回调函数名
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());

    // 将参数对象转换为字符串形式
    var paramString = '';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            paramString += key + '=' + encodeURIComponent(params[key]) + '&';
        }
    }
    paramString = paramString.slice(0, -1); // 移除末尾的'&'

    // 创建一个 script 元素
    var script = document.createElement('script');

    // 设置回调函数名
    window[callbackName] = function(response) {
        try {
            successCallback(response);
        } finally {
            // 清理
            script.parentNode.removeChild(script);
            delete window[callbackName];
        }
    };

    // 设置请求地址，包括回调函数名
    script.src = url + '?' + paramString + '&callback=' + callbackName;

    // 注册错误处理函数
    script.onerror = function() {
        errorCallback('请求失败');
        // 清理
        delete window[callbackName];
    };

    // 将 script 元素添加到文档中
    document.body.appendChild(script);
}