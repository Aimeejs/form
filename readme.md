# Form
Aimee的form模块，用于生成表单

#### Install
```
aimee i form
```

#### Example
```javascript
this.exports('form', {
    layers: [
        {
            type: 'text',
            title: '问题',
            required: true,
            placeholder: '请填写要提问的问题'
        },
        {
            type: 'textarea',
            title: '问题描述',
            placeholder: '请填写详细的问题描述'
        },
        {
            type: 'text',
            title: '联系电话',
            placeholder: '请填写您的联系方式'
        }
    ]
})
```

#### Preview
<img src="preview.png" alt="" width="414">