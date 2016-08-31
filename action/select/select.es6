import guid from 'guid';
import App from 'form/app';

class Input extends App{

    constructor() {
        super('select');
        this.guid = guid();
        this.name = 'select';
        this.template = require('select.jade');
        this.attr({type: 'text', class: 'select form-item', guid: this.guid});
    }

    // SELECT渲染时所需数据
    render(map) {
        var prop, data, defaultItem, index;

        // 缓存data
        this.data = data = [];
        // 缓存dataMap
        this.dataMap = map;

        defaultItem = {
            value: '',
            alias: '请选择'
        };

        for(prop in map){
            if(prop === 'default'){
                defaultItem.value = map[prop];
                defaultItem.alias = map[map[prop]];
            }
            else{
                data.push({
                    value: prop,
                    alias: map[prop]
                })
            }
        };

        // DefaultItem in the data
        index = data.findIndex((item) => item.value === defaultItem.value);
        index = index >= 0 ? index : 0;

        // 渲染SELECT
        this.$.append(this.template({list: data, options: defaultItem}));

        // Set Select SelectedIndex
        this.dom.selectedIndex = index;

        // 缓存重要子元素
        this.SELECT = this.$;

        return this;
    }

    reset() {
        this.dom.selectedIndex = 0;
        return this;
    }

    // 设置表单数据
    setData(data) {
        var index;
        // String
        if(typeof data === 'string'){
            index = this.data.findIndex((item) => item.value === data)
        }
        // Map
        else if(typeof data === 'object'){
            index = this.data.findIndex((item) => item.value in data)
        }
        index = index >= 0 ? index : 0;
        this.dom.selectedIndex = index;
    }

    // 获取数据
    getData() {
        return this.SELECT.find('option').eq(this.dom.selectedIndex).val()
    }

    // 启动自定义事件
    action() {
        if(this.disabled){
            return this;
        }

        this.SELECT.on('change', this.onChange.bind(this));

        return this;
    }

    // Data on change
    onChange() {
        this.parent.dataChange(this)
    }
}

export default Input;
