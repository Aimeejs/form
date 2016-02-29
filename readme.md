# Form
Aimee的form模块，用于生成表单

### Install
```
aimee i form
```

### Example
```javascript
this.exports('form')
```

### Example
```javascript
this.exports('form', data)
```

### Example
```javascript
this.exports('form', function(app){
    app.init().render()
})
```

### Example
加载单一表单控件
```js
var Form = require('form');
var form = Form.instance();

// 不执行默认事件
thisPage.append(form.app.slide({animate: true}))
// Or 执行默认事件
thisPage.append(form.app.slide({animate: true}).action())
```

### Example
构建完整表单
```javascript
this.exports('form', function(app){
    app.init({
        layers: [
            {
                // 控件id，必须
                form: 'input',
                // 控件类型，可选
                type: 'text',
                // 控件name，用于返回数据的key，可选
                name: 'username',
                // 可选
                placeholder: '请输入用户名',
                // 可选
                title: '用户名',
                // 是否必填，可选
                required: true
            },
            {
                form: 'input',
                type: 'password',
                title: '密码',
                required: true,
                name: 'password',
                placeholder: '请输入密码'
            },
            {
                form: 'input',
                type: 'password',
                title: '确认密码',
                required: true,
                name: 'cpassword',
                placeholder: '请再次输入密码'
            },
            {
                form: 'input',
                type: 'text',
                required: true,
                title: '邮箱地址',
                name: 'email',
                placeholder: '请输入邮箱地址'
            },
            {
                form: 'slide',
                title: '自动登录',
                // 是否执行控件自带函数，可选，默认为false
                action: true,
                // 是否与title同行，可选，默认为false
                inline: true,
                // 是否启用动画，可选，默认为false
                animate: true,
                // 是否默认选中，可选，默认为false
                selected: true,
                name: 'autologin'
            },
            {
                form: 'textarea',
                name: 'sign',
                placeholder: '个性签名'
            },
            {
                form: 'tag',
                name: 'tag',
                title: '标签云'
            },
            {
                form: 'button',
                value: '注册',
                type: 'submit',
                className: 'long mt'
            }
        ]
    }).render()

    // Get Date
    app.find('.btn-submit').click(function(){
        console.log(app.getFormData())
    })
})
```


### Preview
<img class="shadow" src="preview.png" alt="" width="414">
