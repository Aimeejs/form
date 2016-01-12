# Form
Aimee的form模块，用于生成表单

#### Install
```
aimee i form
```

#### Example
```javascript
this.exports('form')
```

#### Example
```javascript
this.exports('form', {
    layers: [
        {
            type: 'text',
            title: '用户名',
            required: true,
            name: 'username',
            placeholder: '请输入用户名'
        },
        {
            type: 'password',
            title: '密码',
            required: true,
            name: 'password',
            placeholder: '请输入密码'
        },
        {
            type: 'password',
            title: '确认密码',
            required: true,
            name: 'cpassword',
            placeholder: '请再次输入密码'
        },
        {
            type: 'text',
            required: true,
            title: '邮箱地址',
            name: 'email',
            placeholder: '请输入邮箱地址'
        },
        {
            type: 'button',
            title: '注册',
            btnType: 'submit'
        }
    ]
})
```

#### Example
```javascript
this.exports('form', function(app){
    app.init().render()
})
```

#### Example
```javascript
this.exports('form', function(app){
    app.init({
        layers: [
            {
                type: 'text',
                title: '用户名',
                required: true,
                name: 'username',
                placeholder: '请输入用户名'
            },
            {
                type: 'password',
                title: '密码',
                required: true,
                name: 'password',
                placeholder: '请输入密码'
            },
            {
                type: 'password',
                title: '确认密码',
                required: true,
                name: 'cpassword',
                placeholder: '请再次输入密码'
            },
            {
                type: 'text',
                required: true,
                title: '邮箱地址',
                name: 'email',
                placeholder: '请输入邮箱地址'
            },
            {
                type: 'button',
                title: '注册',
                btnType: 'submit'
            }
        ]
    }).render()
})
```

#### Preview
<img class="shadow" src="preview.png" alt="" width="414">