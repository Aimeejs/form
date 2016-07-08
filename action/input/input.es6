import App from 'form/app';
import guid from 'guid';

class Input extends App{

    constructor() {
        super('input');
        this.guid = guid();
        // 初始化
        this.attr({type: 'text', class: 'area form-control', guid: this.guid});
    }

    reset() {
        this.$.val('');
        return this;
    }
}

export default Input;
