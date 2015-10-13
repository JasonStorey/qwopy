let dataDisplay = require('./lib/data-display'),
    domTools = require('./lib/dom-tools');

module.exports = {
    init: (config) => {
        console.log('QWOPY');
        dataDisplay.init(config);
        let button = domTools.createElement('button');
        button.innerHTML = 'update';
        domTools.appendChild(button, config.container);
        button.addEventListener('click', () => dataDisplay.updateQR());
    }
};

