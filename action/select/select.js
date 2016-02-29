var app = require('form/app').instance();

app.extend({
    name: 'select',
    template: require('./select.jade'),

    getData: function(){
        return this.val()
    }
})

app.register();
