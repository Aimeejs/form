var slide = require('form/app').instance();

slide.extend({
    name: 'slide',
    template: require('./slide.jade'),

    action: function(){
        this.on('click', function(){
            $(this).toggleClass('selected')
        })

        this.data = this.data || {}

        if(this.data.animate){
            this.addClass('animate');
        }

        if(this.data.selected){
            this.addClass('selected')
        }

        return this;
    },

    getData: function(){
        return this.hasClass('selected') ? true : false;
    }
})

slide.register();
