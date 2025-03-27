let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qr-image");
let qrText = document.getElementById("#text");

function generateQr() {
  if (qrText.value.lenght > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" +
      qrText.value;
    imgBox.classList.add("show-img");
  }
}
