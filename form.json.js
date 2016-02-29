/*!
 * Mock data for mock.js
 * https://github.com/gavinning/aimee
 *
 * Template
 * Date: 2015-11-25
 */

module.exports = {
    layers: [
        {
            form: 'input',
            type: 'text',
            name: 'username',
            placeholder: '请输入用户名',
            title: '用户名',
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
            action: true,
            inline: true,
            animate: true,
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
}
