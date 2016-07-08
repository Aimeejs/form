export default {

    selected(e) {
        var target = $(e.target);
        var selected = 'selected';
        var _selected = '.selected';

        if(!this.parent._config.selected){
            return
        }

        // More
        if(this.parent._config.more){
            target.hasClass(selected) ?
                target.removeClass(selected):
                target.addClass(selected);
        }
        // Only
        else{
            target.hasClass(selected) ?
                target.removeClass(selected) :
                target.addClass(selected).siblings(_selected).removeClass(selected);
        }
    },

    deleted(e) {
        if(this.parent._config.deleted){
            $(e.target).remove()
        }
    },

    input(e) {
        e.keyCode !== 13 || this.add(this.parseValue(e.target.value))
    },

    add(data) {
        this.parent.$.find('.tags').append(aimee.$('i.tag').attr('data-type', data.key).text(data.value));
    },

    hide(e, menu) {
        menu.hide().parent().removeClass('open');
    },

    parseValue(val) {
        var arr;

        if(val.indexOf('\\:') > 0 || val.indexOf(':') < 0){
            return {
                key: null,
                value: val
            }
        }
        else{
            arr = val.split(':');
            return {
                key: arr[0],
                value: arr[1]
            }
        }
    }
}
