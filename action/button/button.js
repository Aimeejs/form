var app = require('form/app').instance();

app.extend({
    name: 'button',
    template: require('./button.jade')
})

app.register();
