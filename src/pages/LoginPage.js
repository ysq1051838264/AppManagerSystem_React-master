/**
 * 登录界面
 * Created by panyz on 2018/6/1.
 */
import React, {Component} from 'react';
import '../css/Login.css';
import {Input, Icon, Button, Form, Checkbox, Alert} from 'antd';
import {doPost, requestParams} from '../utils/HttpUtil';
import {LOGIN as url_login} from '../utils/URL';
import {Encrypt} from '../utils/CryptionUtil';

const FormItem = Form.Item;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRemember: localStorage.getItem("password") !== null,
            errorMessage: "",
            visible: false,
            loading: false
        }
    }

    /*是否记住密码*/
    _rememberPwd = (e) => {
        this.setState({
            isRemember: e.target.checked,
        });
    };

    /*登录操作*/
    _hanldSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                sessionStorage.setItem("isAuth", true);
                sessionStorage.setItem("account", values.account);
                sessionStorage.setItem("userAuth", "1111");
                this.props.history.push("/home/ad");

                // let p = {};
                // p.account = values.account;
                // p.password = values.password;
                //
                // doPost(url_login, p)
                //     .then(
                //         res => res.json()
                //     )
                //     .then(json => {
                //         this._handleRememberPwd(values);
                //         localStorage.setItem("token", json.token);
                //
                //         sessionStorage.setItem("isAuth", true);
                //         sessionStorage.setItem("account", values.account);
                //         sessionStorage.setItem("userAuth", "1111");
                //         this.props.history.push("/home/dataStatistics");
                //         console.log(json);
                //     }).catch(err => {
                //     console.warn(err)
                //     this.setState({
                //         visible: true,
                //         loading: false,
                //         errorMessage: "请求失败，请检查账号和密码是否输入正确"
                //     })
                // });
            }
        })
    };

    /*记住密码后进行存储*/
    _handleRememberPwd = (values) => {
        if (this.state.isRemember) {
            localStorage.setItem("account", values.account);
            localStorage.setItem("password", values.password);
        } else {
            localStorage.removeItem("password");
        }
    };

    /*初始化登录信息*/
    _initLoginInfo = (value) => {
        if (value === null || value === undefined) {
            return "";
        } else {
            return value;
        }
    };

    // 验证用户名
    checkUsername = (rule, value, callback) => {
        const form = this.props.form;
        if (!value) {
            callback("请输入账号");
            this.setState({
                loading: false,
            })
        } else {
            callback();
        }
    }
    // 验证密码
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        // if (value && this.state.passwordDirty) {
        //     form.validateFields(['confirm'], { force: true });
        // }
        callback();
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">

                <div className="header">
                    {this.state.visible ? (
                        <Alert
                            className="alert"
                            closable
                            message="温馨提示"
                            description={this.state.errorMessage}
                            type="error"
                            afterClose={() => this.setState({visible: false})}/>
                    ) : null}
                </div>

                <div className="content">
                    <h1 style={{color: '#000', marginTop: 5}}><img src={require('../images/icon.png')} alt="logo"/>App管理平台
                    </h1>
                    <Form onSubmit={this._hanldSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator("account",
                                {
                                    initialValue: this._initLoginInfo(localStorage.getItem("account")),
                                    rules: [{
                                        required: true,
                                        message: '请输入账号！'
                                    }]
                                })(
                                <Input className="inputAccount"
                                       size="large"
                                       placeholder="请输入账号"
                                       prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                />
                            )}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('password', {
                                initialValue: this._initLoginInfo(localStorage.getItem("password")),
                                rules: [{
                                    required: true,
                                    message: '请输入密码！',
                                }]
                            })(
                                <Input
                                    className="inputPwd"
                                    size="large"
                                    type="password"
                                    placeholder="请输入密码"
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: this.state.isRemember
                            })(
                                <Checkbox className="rememberPwd" onChange={this._rememberPwd}>记住密码</Checkbox>
                            )}
                            <Button size="large"
                                    className="btn-login"
                                    loading={this.state.loading}
                                // onClick={() => this.setState({loading: true})}
                                    htmlType='submit'
                                    type="primary"
                            >登录</Button>
                        </FormItem>
                    </Form>
                </div>

                <div className="footer">
                    <span> Copyright©2018 panyz</span>
                </div>

            </div>
        );
    }
}

const LoginForm = Form.create({})(Login);

export default LoginForm;