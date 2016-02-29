var app = require('form/app').instance();

app.extend({
    name: 'tag',
    template: require('./tag.jade'),

    data: {
        action: true,
        title: '云标签',
        placeholder: '请输入tag并回车'
    },

    getData: function(){
        var arr = [];
        this.find('.tags').find('i').each(function(){
            arr.push(this.innerText)
        })
        return arr;
    },

    action: function(){
        var tags = this.find('.tags');
        var input = this.find('.dataInput');

        // Add tag
        input.keypress(function(e){
            if(e.keyCode === 13){
                if(this.value){
                    tags.append(aimee.$('i{'+ this.value +'}'));
                    this.value = '';
                }
            }
        })

        // Delete tag
        tags.delegate('i', 'click', function(){
            this.remove();
        })

        return this;
    }
})

app.register();
