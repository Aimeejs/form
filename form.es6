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
 * @example:
 * 		form.group('user').load('input').attr({name: 'username'}).render();
 * 		form.group('user').load('input').attr({name: 'password'}).render();
 *
 */
import config from 'config';
config.init();

class Form{

    constructor() {
        // 所有表单控件
        // 用于渲染
        this.all = [];
        // 表单appMap表, key为name字段
        this.map = {};
        // 表单map表
        // 防止重复添加
        this.hash = {};
        // 独立表单控件
        // 用于采集结构化数据
        this.apps = [];
        // 表单控件组
        // 用于采集结构化数据
        this.groups = {};
        // 一次性函数，用于获取groupname
        this.getGroupname = function(){};
    }

    create(el) {
        return $(document.createElement(el))
    }

    // 标记创建表单组
    group(name) {
        var it = this;
        // 创建一次性函数，用于通知this.load
        this.getGroupname = function(){
            it.getGroupname = function(){};
            return name;
        }
        return this;
    }

    // 创建表单
    load(id) {
        var groupname = this.getGroupname();
        var app = new (require(['form/action', id, id].join('/')));

        // 表单组
        if(groupname){
            // 创建表单组数组
            if(!this.groups[groupname]){
                this.groups[groupname] = [];
            }
            // 推进表单组
            if(!this.hash[app.guid]){
                this.hash[app.guid] = true;
                this.groups[groupname].push(app);
                this.all.push(app);
                app.parent = this;
            }
        }
        // 独立表单
        else if(!this.hash[app.guid]){
            this.hash[app.guid] = true;
            this.apps.push(app);
            this.all.push(app);
            app.parent = this;
        }

        return app;
    }

    reset() {
        this.all.forEach((app) => {
            app.reset();
        })
        return this;
    }

    // 设置数据
    // TODO: 待完善多层数据
    setData(data) {
        this.all.forEach((app) => {
            app.attr('name');
            app.setData(data[app.attributes.name]);
        })
        this._data = data;
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
        this.apps.forEach((app) => {
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
        // 获取表单组数据
        $.each(this.groups, (groupname, group) => {
            data[groupname] = {};
            group.forEach((app) => {
                var res;
                // Update attributes.name
                app.attr('name');
                // 检查是否有name属性
                if(app.attributes.name){
                    res = app.getData();
                    isFull ?
                        data[groupname][app.attributes.name] = res:
                        res ?
                            data[groupname][app.attributes.name] = res:
                            res;
                }
            })
        })
        return data;
    }

    /**
     * 从app列表中查询
     * @param   {String}    key   要查询的key, value为空是默认为id
     * @param   {Function}  key   自定义查询条件
     * @param   {String}    value 要查询的value
     * @return  {Object}          查询结果
     * @example [example]
     */
    getApp(key, value) {
        var fn, app;

        // 自定义查询条件
        if(typeof key === 'function'){
            fn = key;
            this.apps.forEach((res) => {
                fn(res) ? app = res : res;
            });
            return app;
        }

        // 查询子元素
        if(typeof key === 'string'){
            value ?
                this.apps.forEach((res) => {
                    if(key in res){
                        res.attributes[key] === value ? app = res : res;
                    }
                }):
                // 默认key为id
                this.apps.forEach((res) => {
                    res.attributes.id === key ? app = res : res;
                });

            return app;
        }
    }

    // 加载form默认样式
    css() {
        config.set('css', true);
        return this;
    }

    // 根据app的name字段来查找占位符进行渲染
    render(selector, options) {
        config.merge(options);
        selector = selector || document;
        this.all.forEach((app) => {
            // 建立appMap
            this.map[app.attributes.name] = app;
            // 渲染表单控件
            $(selector).find(`[name=${app.attributes.name}]`).replaceWith(app.$);
        });
        // 加载默认样式
        if(config.get('css')){
            $(selector).addClass('lincoapp-form');
        };
        return this;
    }

    // 表单内控件数据改变时会调用此方法
    dataChange() {

    }
}

export default Form;
