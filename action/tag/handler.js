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
        // For Enter
        if(e.keyCode === 13){
            // 添加tag项
            this.add(this.parseValue(e.target.value));

            // 输入后选中当前文本
            if(this.parent._config.autoclear === 'select'){
                return e.target.select();
            }

            // 输入后当前文本 => Placeholder
            if(this.parent._config.autoclear === 'placeholder'){
                e.target.placeholder = e.target.value;
                return e.target.value = '';
            }

            // 输入后清空当前文本
            if(this.parent._config.autoclear){
                return e.target.value = '';
            }
        }
    },

    add(data) {
        this.parent.$.find('.tags').append(aimee.$('i.tag').attr('data-type', data.key).text(data.value));
    },

    hide(e, menu) {
        menu.hide().parent().removeClass('open');
    },

    blur(e) {
        e.target.placeholder = this.parent.attributes.placeholder || '';
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
