/*!
 * form For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2015-11-25
 */

var app, App;

App = require('app');
app = App.create({
    name: 'form',
    version: '1.0.0',
    template: require('./form.jade'),

    prerender: function(app){
        var layer;
        var template = {};
        var data = app.getData();
        template.text = require('./text.jade');
        template.button = require('./button.jade');
        template.password = require('./password.jade');
        template.textarea = require('./textarea.jade');
        // 根据配置生成DOM
        data.layers.forEach(function(item){
            template[item.type] && app.append(template[item.type](item));
        })
    },

    getFormData: function(){
        var data = {};
        this.find('.dataInput').each(function(el){
            data[this.name] = this.value;
        })
        return data;
    }
});

module.exports = app;
