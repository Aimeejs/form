# Form
Aimee的form模块，用于生成表单

### Install
```sh
aimee i form
```

### Jade
```jade
.form
    .form-group
        source(name="username")
    .form-group
        source(name="passowrd")
    .form-group
        source(name="telphone")
    .form-group
        source(name="remark")

    .form-ctrl
        button.btn.btn-submit 提交

```

### Example
```javascript
var Form = require('form');
var form = new Form;

form.load('input').attr({name: 'username'})
form.load('input').attr({name: 'password', type: 'password'})
form.load('input').attr({name: 'telphone', type: 'number', placeholder: '请输入手机号'})
form.load('textarea').attr({name: 'remark'})

// Form控件渲染到.form
form.render($('.form'))

// 获取form数据
$('.form').delegate('.btn-submit', 'click', () => {
    console.log(form.getData())
})
```


### Preview
<img class="shadow" src="preview.png" alt="" width="414">
