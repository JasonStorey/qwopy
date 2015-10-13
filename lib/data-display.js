let domTools = require('./dom-tools');

function init(config) {
    let element = domTools.createElement('div');
    domTools.appendChild(element, config.container);

    new QRCode(element, 'Hi there, buddy!');
}

module.exports = {
    init: init
};
