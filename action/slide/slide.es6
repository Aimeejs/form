import App from 'form/app';
import guid from 'guid';

class Input extends App{

    constructor() {
        super();
        this.guid = guid();
        this.name = 'slide';
        this.$ = aimee.$('.form-ui-slide>button.slideBtn')
        this.dom = this.$.get(0);
        this.attr({guid: this.guid});
        this.CONFIG.merge({
            animate: true
        });
    }

    action() {
        this.$.on('click', function(){
            $(this).toggleClass('selected')
        })

        this.data = this.data || {}

        if(this.CONFIG.get('animate')){
            this.$.addClass('animate');
        }

        if(this.CONFIG.get('selected')){
            this.$.addClass('selected')
        }

        return this;
    }

    render(data) {
        this.$.find('.slideBtn').text(data.value || data);
        return this;
    }

    getData() {
        return this.$.hasClass('selected') ? true : false;
    }

    onChange() {
        this.$.on('input', () => { this.parent.dataChange(this) });
        return this;
    }

    reset() {
        this.$.removeClass('selected');
        return this;
    }
}

export default Input;
