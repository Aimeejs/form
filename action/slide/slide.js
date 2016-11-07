import App from 'form/app';
import guid from 'guid';

class Input extends App{

    constructor() {
        super();
        this.guid = guid();
        this.name = 'slide';
        this.$ = aimee.$('.form-ui-slide>button.slideBtn')
        this.dom = this.$dom.get(0);
        this.attr({guid: this.guid});
        this.CONFIG.merge({
            animate: true
        });
    }

    action() {
        this.$dom.on('click', function(){
            $(this).toggleClass('selected')
        })

        this.data = this.data || {}

        if(this.CONFIG.get('animate')){
            this.$dom.addClass('animate');
        }

        if(this.CONFIG.get('selected')){
            this.$dom.addClass('selected')
        }

        return this;
    }

    create(data) {
        this.$dom.find('.slideBtn').text(data.value || data);
        return this;
    }

    getData() {
        return this.$dom.hasClass('selected') ? true : false;
    }

    onChange() {
        this.$dom.on('input', () => { this.parent.dataChange(this) });
        return this;
    }

    reset() {
        this.$dom.removeClass('selected');
        return this;
    }
}

export default Input;
