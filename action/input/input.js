var app = require('form/app').instance();

app.extend({
    name: 'input',
    template: require('./input.jade'),

    getData: function(){
        return this.val()
    }
})

app.register();
