// app.js

// Input elementine erişmek
var input = document.querySelector(".search-box");

// Generate button'a erişmek
var generateBtn = document.querySelector(".create-button");

// Download button'a erişmek
var downloadBtn = document.querySelector(".download-button");

// QR kodun oluşturulacağı elementi seçmek
var qrCode = document.querySelector("#qr-code");

// QR kodu oluşturma ve gösterme işlevi
function showQRCode() {
  // Eski QR kodu varsa, önce sil
  qrCode.innerHTML = "";

  // Yeni QR kodunu oluştur
  var qr = new QRCode(qrCode, {
    text: input.value,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

// QR kodu oluşturmak için generate butonuna tıklanması
generateBtn.addEventListener("click", showQRCode);

// QR kodunu indirmek için download butonuna tıklanması
downloadBtn.addEventListener("click", downloadQRCode);

// QR kodunu indirme işlevi
function downloadQRCode() {
  // QR kodunu içeren canvas elementini seç
  var canvas = qrCode.querySelector("canvas");

  // QR kodunu indirme için bir link oluştur
  var link = document.createElement("a");
  link.download = "qrcode.png";

  // Canvas elementini image/png formatına dönüştürmek için URL oluştur
  link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

  // Link'e tıklanmasını simüle etmek için bir mouse eventi oluştur
  var clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  // Link'e tıklanması için event'i tetikle
  link.dispatchEvent(clickEvent);
}
