import App from 'form/app';
import guid from 'guid';

class Input extends App{

    constructor(tagName) {
        super('textarea');
        this.guid = guid();
        // 初始化
        this.attr({class: 'form-area', guid: this.guid});
    }

    reset() {
        this.$dom.val('');
        return this;
    }
}

export default Input;
