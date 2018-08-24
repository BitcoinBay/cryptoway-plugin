// encode BIP21 URI of the form:
// bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=50&label=Merchant-Name&message=123aB
// message is the reciept number, which must be in base 58 to save space, and to elimenate l, i, O, and 0

var DarshansKey = "bc1qdj09ed6jz2qule8pd8hgufff8um3pqdvy59esx";
function encodeBip21Uri(address, amount, name, receipt){
  var encodedUri = 'bitcoin:' + address + '?amount='+ amount + '&label=' + name + '&message=' + reciept;
  return encodedUri;
}
function getDataAsync(urlToGoTo){
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      document.getElementById('toChange').innerHTML = this.responseText;
      return "hello";
    }
  }
  req.open(method="GET", url=urlToGoTo, async=true);
  req.send();
}
function confirmTx(dataText, address, reciept, amount=null){
    document.getElementById('toChange').innerHTML = dataText;
    //var dataObj = JSON.parse(dataText);
    /*for(i=0; i<addressInfoObj.txs.length; i++){
      var currentTx = addressInfoObj[i]

    }*/
}
// Generate the QR Code with Nayuki's qrcodegen library (see QR-Code-generator folder)
//from https://github.com/nayuki/QR-Code-generator
function generateQR(message) {
  var QRC = qrcodegen.QrCode;
  var scale = 8;
  var border = 4;
  var canvas = document.getElementById('qrCanvas');
  var qr0 = QRC.encodeText(message, QRC.Ecc.HIGH);
  qr0.drawCanvas(scale, border, canvas);
}
var message = encodeBip21Uri(DarshansKey, 1, 'Harry-Potter', reciept='Y3r-4-Wiz4rd');
//var realmessage = getDataAsync("?currency="+currency);
generateQR(message);
var response = getDataAsync("README.txt");
//confirmTx(getDataAsync("README.txt"), DarshansKey, 5);
setTimeout(function() {confirmTx(response, DarshansKey, 5)}, 2000);
