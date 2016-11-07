/*!
 * form For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-05-25
 *
 * @example:
 * 		var form = new Form;
 * 		form.load('input').attr({name: 'username'}).render();
 * 		form.load('input').attr({name: 'password'}).render();
 *
 */

import tree from 'tree';

class Form{

    constructor() {
        this.name = 'form';
        // 所有表单控件
        // 用于渲染
        this.all = [];
        // 表单appMap表, key为name字段
        this.map = {};
        // 表单map表
        // 防止重复添加
        this.hash = {};
    }

    // 创建表单
    load(id) {
        var app = new (require(['form/action', id, id].join('/')));

        app.form = this;
        app.parent = this;
        this.all.push(app);
        this.hash[app.guid] = app;
        return app;
    }

    reset() {
        this.all.forEach(app => app.reset());
        return this;
    }

    // 设置数据
    setData(data) {
        this.all.forEach(app => {
            app.attr('name');
            app.setData(data[app.attributes.name]);
        })
        return this;
    }

    /**
     * 获取数据
     * @param   {Boolean}  full 是否显示空值，默认为true
     * @return  {Object}        Form表单数据
     * @example this.getData()
     */
    getData(full) {
        var data = {};
        var isFull = typeof full === 'boolean' ? full : true;

        // 获取独立表单数据
        this.all.forEach(app => {
            var res;
            // Update attributes.name
            app.attr('name');
            // 检查是否有name属性
            if(app.attributes.name){
                res = app.getData();
                isFull ?
                    data[app.attributes.name] = res:
                    res ?
                        data[app.attributes.name] = res:
                        res;
            }

        })
        return data;
    }

    // 根据app的name字段来查找占位符进行渲染
    render(selector) {
        selector = selector || document;
        this.all.forEach(app => {
            // 建立appMap
            this.map[app.attributes.name] = app;
            // 渲染表单控件
            $(selector).find(`[name=${app.attributes.name}]`).replaceWith(app.$dom);
        });
        return this;
    }

    on(type, handler) {
        tree.on([this.name, type].join('.'), () => handler(this.getData()));
        return this;
    }
}

export default Form;
