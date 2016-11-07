import App from 'form/app';
import guid from 'guid';

class Input extends App{

    constructor() {
        super('input');
        this.guid = guid();
        // 初始化
        this.attr({type: 'text', class: 'form-item form-control', guid: this.guid});
    }

    reset() {
        this.$dom.val('');
        return this;
    }
}

export default Input;
