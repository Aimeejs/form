import guid from 'guid';
import App from 'form/app';
import handler from './handler';

class Input extends App{

    constructor(tagName) {
        super();
        this.guid = guid();
        this.handler = handler;
        this.name = 'selectPro';
        this.template = require('selectPro.jade');
        this.attr({type: 'text', class: 'dropdown', guid: this.guid});
    }

    // SELECT渲染时所需数据
    render(map) {
        var prop, data, defaultItem;

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
        }

        // 渲染SELECT
        this.$.append(this.template({list: data, options: defaultItem}));

        // 缓存重要子元素
        this.MENU = this.$.find('.dropdown-menu');
        this.TOGGLE = this.$.find('.dropdown-toggle');
        this.OPTION = this.$.find('.dropdown-option');

        return this;
    }

    reset() {
        this.TOGGLE
            .attr('data-value', this.dataMap['default'])
            .text(this.dataMap[this.dataMap['default']])
        return this;
    }

    // 设置表单数据
    setData(data) {
        this.TOGGLE.attr('data-value', data).text(this.dataMap[data])
    }

    // 获取数据
    getData() {
        return this.TOGGLE.attr('data-value');
    }

    // 启动自定义事件
    action() {
        if(this.disabled){
            return this;
        }

        // Option onChange
        this.OPTION.on('click', this.handler.onchange.bind(this));

        // Select Toggle
        this.TOGGLE.on('click', this.handler.toggle.bind(this));

        // Hide MENU
        $(document).on('click', this.handler.globalClick.bind(this));

        return this;
    }

    // Data on change
    onChange() {
        this.parent.dataChange(this)
    }
}

export default Input;
