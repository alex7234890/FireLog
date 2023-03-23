function qr() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  if(name == "" || surname == "" || email == ""){
    alert("Inserire correttamente dati")
  } else {
    var data = name + " " + surname + ", " + email;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: data,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
    });
  
  var canvas = document.getElementById("qrcode").querySelector("canvas");
  if (canvas) {
    downloadBtn.disabled = false;
  }
}
  
downloadBtn.addEventListener("click", function() {
  var canvas = document.getElementById("qrcode").querySelector("canvas");
  var imgData = canvas.toDataURL("image/png");
  var pdf = new jsPDF();
  pdf.addImage(imgData, "PNG", 10, 10, 180, 180);
  pdf.save("qrcode.pdf");
});
}