module.exports = {
    init: () => {
        console.log('qwopy');
        let someTextToEncode = 'Hey there, buddy.';
        new QRCode(document.getElementById('qrcode'), someTextToEncode);
    }
};

