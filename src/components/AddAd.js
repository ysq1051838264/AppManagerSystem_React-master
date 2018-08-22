/**
 * 添加广告
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

class AddAd extends Component {

    render() {
        const {visible, onCancel, onCreate, form} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Modal
                visible={visible}
                onOk={onCreate}
                onCancel={onCancel}
                okText="添加"
                cancelText="取消"
                title="添加超级管理员">

                <Form>
                    <FormItem label="手机号码">
                        {getFieldDecorator('projectName', {
                            rules: [{
                                required: true,
                                message: '请输入手机号码',
                            }],
                            // initialValue: "默认值"
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="密码">
                        {getFieldDecorator('projectCode', {
                            rules: [{
                                required: true,
                                message: '请输入初始密码'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="昵称">
                        {getFieldDecorator('projectDes', {
                            rules: [{
                                required: true,
                                message: '请输入昵称'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }

}

const createProjectForm = Form.create()(AddAd);
export default createProjectForm;