document.getElementById('generateBtn').addEventListener('click', function() {
    var inputValue = document.getElementById('input').value;
    if (inputValue.trim() === '') {
      alert('Please enter text or URL');
      return;
    }
  
    var qrcode = new QRCode(document.getElementById('qrcode'), {
      text: inputValue,
      width: 256,
      height: 256,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H
    });
  
    qrcode.makeCode(inputValue);
  });
  