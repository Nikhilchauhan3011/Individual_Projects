

const image = document.getElementById("ImageQr");
const qrBtn = document.getElementById("ClickQr");
const urlInput = document.getElementById("InputQr");

console.log(image,qrBtn,urlInput);

qrBtn.addEventListener('click',()=>{
    let data = urlInput.value;

    if(!data){
        window.alert("Enter URL Please");
    }else{

    
        image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${data}`;

        image.alt = `QR code of ${data}`;


    }
});