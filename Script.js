let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadLink = document.getElementById("downloadlink");

function generateQR() {
    const text = qrText.value.trim();
    if (text.length > 0) {
        const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(text);
        qrImage.src = qrUrl;

        qrImage.onload = () => {
            imgBox.classList.add("show-img");
            downloadLink.href = qrUrl;
            downloadLink.style.display = "block";
        };
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        imgBox.classList.remove("show-img");
        downloadLink.style.display = "none";
    }
}
