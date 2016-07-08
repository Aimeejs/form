export default {

    show(e, menu) {
        menu.show().parent().addClass('open');
    },

    hide(e, menu) {
        menu.hide().parent().removeClass('open');
    },

    toggle(e) {
        if(this.opened){
            this.opened = false;
            this.handler.hide(e, this.MENU);
        }
        else{
            this.opened = true;
            this.handler.show(e, this.MENU);
        }
    },

    onchange(e) {
        var prev = this.TOGGLE.attr('data-value');
        var curr = e.target.getAttribute('data-value');

        if(prev !== curr){
            // 更新表单数据
            this.TOGGLE.text(e.target.innerText);
            this.TOGGLE.attr('data-value', curr);
            // 发射数据更新事件
            this.onChange();
        }
        this.TOGGLE.trigger('click');
    },

    globalClick(e) {
        if(
            // MENU Opened
            this.opened &&
            // Target !== This
            e.target !== this.$.get(0) &&
            // Target !== This.chilren
            $(e.target).parents().index(this.$.get(0)) < 0
        ){
            // Hide Menu
            this.TOGGLE.trigger('click')
        }
    }
}
