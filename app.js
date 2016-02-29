var Form = require('./form');
var Class = require('class');
var Feature = module.exports = Class.create();

Feature.include({

    // 绑定自定义事件
    // eg: form.app.input().action();
    action: function(){
        return this;
    },

    // 获取Feature数据
    // eg: form.map.username.getData();
    getData: function(){
        return this.hasClass('selected') ? true : false;
    },

    // 注册 Feature 到 Form
    register: function(){
        var app = this;
        Form.prototype.app[this.name] = function Feature(data){
            var touch;

            // Data
            data = aimee.extend({}, {className: ''}, app.data, data);

            // Zepto Instance
            touch = $(app.template(data));

            // Extend app
            aimee.extend(touch, app);

            // Set data
            // 默认数据与用户数据合并后的结果
            // 并且以用户数据为主
            touch.data = data;

            // Reg touch
            data.name ? Form.prototype.map[data.name] = touch : touch;

            return touch;
        }
    }
})
