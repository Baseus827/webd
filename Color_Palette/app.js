function generatePastelColorHex() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
      
  // doygunluk azaltma
  var pastelR = Math.floor((r + 255) / 2);
  var pastelG = Math.floor((g + 255) / 2);
  var pastelB = Math.floor((b + 255) / 2);

  var hexR = pastelR.toString(16).padStart(2, '0');
  var hexG = pastelG.toString(16).padStart(2, '0');
  var hexB = pastelB.toString(16).padStart(2, '0');

  return "#" + hexR + hexG + hexB;
}

function changeBodyBackground() {
  var colorCode = document.getElementById("colorCode");
  var pastelColor = generatePastelColorHex();
  document.body.style.backgroundColor = pastelColor;
  colorCode.innerHTML = "Kuru pastel renk kodu: " + pastelColor;
  console.log(pastelColor);
}

window.onload = changeBodyBackground; 

