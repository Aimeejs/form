import App from 'form/app';
import guid from 'guid';

class Input extends App{

    constructor(tagName) {
        super('textarea');
        this.guid = guid();
        // 初始化
        this.attr({class: 'area', guid: this.guid});
    }

    reset() {
        this.$.val('');
        return this;
    }
}

export default Input;
