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
    version: '1.1.0',
    template: require('./form.jade'),

    // Feature
    app: {},

    // Feature Instance
    map: {},

    // Feature功能js地址
    feature: function(name){
        return ['form/action', name, name].join('/')
    },

    // 解析配置项
    parse: function(data){
        var layerModel, titleTemplate;

        // 获取Title
        titleTemplate = require('./action/title.jade');

        // 解析配置项
        data.layers.forEach(function(layer){
            var app, title, wrapper;

            try{
                require(this.feature(layer.form))
            }
            catch(e){
                throw new Error('Can\'t find ' + layer.form + ' feature.')
            }

            // Get wrapper
            wrapper = this.wrapper();
            // Get app | type: Zepto
            app = this.app[layer.form](layer);
            // If title
            title = $(titleTemplate(app.data));

            // 是否启用默认事件绑定
            app.data.action ? app = app.action() : app;

            // 处理并行
            if(app.data.inline){
                title.append(app)
                wrapper.append(title)
            }
            else{
                wrapper.append(title).append(app)
            }

            // 写入到Form
            this.append(wrapper)

        }.bind(this))
    },

    // 外层包装 layer.layer
    wrapper: function(app){
        return aimee.$('layer.layer')
    },

    prerender: function(app){
        this.parse(this.getData());
    },

    // 获取表单数据
    getFormData: function(data){
        data = {};
        $.each(this.map, function(key, value){
            value.getData ?
                data[key] = value.getData() : '';
        })
        return data;
    },

    // 表单默认事件
    action: function(){
        var app = this;
        this.find('.btn-submit').click(function(){
            console.log(app.getFormData())
        })
    }
});

module.exports = app;
