var app = require('form/app').instance();

app.extend({
    name: 'textarea',
    template: require('./textarea.jade'),

    getData: function(){
        return this.val()
    }
})

app.register();
