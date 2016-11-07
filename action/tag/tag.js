import App from 'form/app';
import guid from 'guid';
import handler from './handler';

class Input extends App{

    constructor() {
        super();
        this.guid = guid();
        this.name = 'tag';
        this.handler = handler;
        this.handler.parent = this;
        // 初始化
        this.attr({class: 'form-ui-tag', guid: this.guid});
        this.template = require('tag.jade');

        this._config = {
            more: false,      // 多项选择 依赖selected
            input: false,     // 可输入
            deleted: false,   // 可删除 不可与selected共存
            selected: true,   // 可选择
            autoclear: 'placeholder'   // 输入成功后自动选中之前输入数据，方便清除 (select | placeholder)
        };
        this.config.init(this._config);
    }

    create(map) {
        this.$dom.append(this.template({map: map}))
        return this
    }

    getData() {
        return !this._config.selected ?
            // !Selected
            this.$dom.find('.tag').map((i, tag) => tag.innerText):
            // Selected && More
            this._config.more ?
                this.$dom.find('.tag.selected').map((i, tag) => tag.innerText):
                // Selected && !More
                this.$dom.find('.tag.selected').eq(0).text();
    }

    input() {
        if(this._config.input){
            this.$dom.find('.tags').before(
                aimee.$('input[type="text"]')
                    .addClass('area form-control')
                    .attr('placeholder', this.attributes.placeholder)
                    .on('keypress', (e) => handler.input(e))
            )
        }
    }

    action() {
        this.input();
        this.$dom.delegate('.tag', 'click', (e) => handler.selected(e));
        this.$dom.delegate('.tag', 'dblclick', (e) => handler.deleted(e));
        this.$dom.delegate('.area', 'blur', (e) => handler.blur(e));
        return this;
    }

    reset() {
        this.$dom.val('');
        return this;
    }
}

export default Input;
