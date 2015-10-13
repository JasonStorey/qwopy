let domTools = require('./dom-tools');

let textArea,
    qrCode;

function init(config) {
    let qrCodeElement = domTools.createElement('div');

    textArea = domTools.createElement('textarea');

    domTools.appendChild(textArea, config.container);
    domTools.appendChild(qrCodeElement, config.container);

    qrCode = new QRCode(qrCodeElement, 'Hi there, buddy!');
}

function updateQR() {
    let dataToQR = textArea.value;
    qrCode.clear();
    qrCode.makeCode(dataToQR);    
}

module.exports = {
    init: init,
    updateQR: updateQR
};
