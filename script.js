function qr() {


  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var date = document.getElementById("birth").value;
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  var regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(email) || name == "" || surname == "") {
      alert("Inserire correttamente dati")
  } else {
    // La mail è valida, procedere con la registrazione
      var data = name + ", " + surname + ", " + email + ", " + date;
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
  document.getElementById("container").style.display = "block";
  }
  

  
downloadBtn.addEventListener("click", function() {
  var canvas = document.getElementById("qrcode").querySelector("canvas");
  var imgData = canvas.toDataURL("image/png");
  var pdf = new jsPDF();
  pdf.addImage(imgData, "PNG", 10, 10, 180, 180);
  pdf.save("qrcode.pdf");
});
}