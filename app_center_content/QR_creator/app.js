var input = document.querySelector(".search-box");
var generateBtn = document.querySelector(".create-button");
var downloadBtn = document.querySelector(".download-button");
var qrCode = document.querySelector("#qr-code");
function showQRCode() {
qrCode.innerHTML = "";
var qr = new QRCode(qrCode, {
text: input.value,
width: 256,
height: 256,
colorDark: "#000000",
colorLight: "#ffffff",
correctLevel: QRCode.CorrectLevel.H,
});
}
generateBtn.addEventListener("click", showQRCode);
downloadBtn.addEventListener("click", downloadQRCode);
function downloadQRCode() {
var canvas = qrCode.querySelector("canvas");
var link = document.createElement("a");
link.download = "qrcode.png";
link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var clickEvent = new MouseEvent("click", {
view: window,
bubbles: true,
cancelable: true,
});
link.dispatchEvent(clickEvent);
}