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
}
