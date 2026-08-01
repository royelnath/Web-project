const input = document.getElementById("text");
const generateBtn = document.getElementById("generateBtn");
const qrcodeBox = document.getElementById("qrcode");
const downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;

  qrcodeBox.innerHTML = `<img src="${url}" alt="QR Code for ${text}" />`;
  downloadBtn.href = url;
  downloadBtn.style.display = "inline-block";
}

generateBtn.addEventListener("click", generateQR);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateQR();
});
