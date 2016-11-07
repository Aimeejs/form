/*!
 * apps For Aimeejs.from
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-05-25
 * 所有表单控件的基础类，所有表单控件应该继承此类
 *
 */

import tree from 'tree';
import Config from 'config';
import extend from 'aimee-extend';

class App{

    // 初始化tagName
    // 创建基础dom
    constructor(tagName) {
        this.attributes = {};
        this.extend = extend;
        this.CONFIG = new Config;
        this.CONFIG.init();
        this.tagName = tagName || 'div';
        this.dom = document.createElement(this.tagName);
        this.$dom = $(this.dom);
    }

    show() {
        this.$dom.show()
    }

    hide() {
        this.$dom.hide()
    }

    /**
     * 配置方法
     * @param   {Object}  config 配置项
     * @example this.setting({css: true})
     */
    setting(config) {
        this.CONFIG.merge(config);
        return this;
    }

    config() {
        return this.CONFIG.general.apply(this.CONFIG, arguments) || this;
    }

    /**
     * 属性设置 ** 不建议重写
     * @param   {String}  key   要设置的属性KEY
     * @param   {Object}  key   要设置的属性MAP
     * @param   {Any}     value 为真时单一针对key进行赋值
     * @return  {Object}        根据参数返回
     * @example [example]
     */
    attr(key, value) {
        // KEY为字符串
        if(typeof key === 'string'){
            // VALUE为真是赋值
            if(value){
                this.$dom.attr(key, value);
                this.attributes[key] = value;
                return this;
            }
            else{
                this.attributes[key] = this.$dom.attr(key);
                return this.attributes[key];
            }
        }
        else if(typeof key === 'object'){
            this.$dom.attr(key);
            $.extend(this.attributes, key);
            return this;
        }
    }

    /**
     * 不建议重写
     * @param   {Selector}  selector string|zepto|jquery
     */
    appendTo(selector) {
        this.$dom.appendTo(selector);
        return this;
    }

    /**
     * 不建议重写
     * @param   {Selector}  selector string|zepto|jquery
     */
    prependTo(selector) {
        this.$dom.prependTo(selector);
        return this;
    }

    // 返回DOM
    getHTML() {
        return this.dom;
    }

    //! 建议重写，重置为初试状态
    reset() {
        this.tagName === 'input' || this.tagName === 'textarea' ?
            this.$dom.val('') : this.$dom.text('')
        return this;
    }

    //! 建议重写，获取数据方法
    getData() {
        return this.tagName === 'input' || this.tagName === 'textarea' ?
            this.$dom.val() : this.$dom.text()
    }

    //! 建议重写，设置数据
    setData(data) {
        this.tagName === 'input' || this.tagName === 'textarea' ?
            this.$dom.val(data) : this.$dom.text(data)
    }

    //! 建议重写，自定义执行方法
    action() {
        if(this.disabled){
            return this;
        }
        this.$dom.on('input', () => this.onChange());
        return this;
    }

    // 禁用表单控件，可根据需要重写
    disable() {
        this.disabled = true;
        this.$dom.attr('disabled', 'disabled').addClass('disabled');
        return this;
    }

    // 启用表单控件，可根据需要重写
    enable() {
        this.disabled = false;
        this.$dom.removeAttr('disabled').removeClass('disabled');
        return this;
    }

    // 表单控件根据data渲染dom的处理方法，如果有需要可重写此方法
    create(data) {
        return this;
    }

    // 无需重写，所有表单控件app数据改变都需要调用此方法
    onChange() {
        tree.fire('form.data', this)
        return this;
    }
}

export default App;
