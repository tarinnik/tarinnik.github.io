let key = prompt("Enter password");
let text = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
document.getElementsByTagName("body")[0].innerHTML = text;

