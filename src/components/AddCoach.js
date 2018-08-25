/**
 * 添加教练
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Select,Input} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class AddCoach extends Component {

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

                <FormItem
                    label="请选择场地">
                    {getFieldDecorator('place', {
                        rules: [
                            {required: true, message: '请选择场地'},
                        ],
                    })(
                        <Select placeholder="请选择场地">
                            <Option value="1号">1号</Option>
                            <Option value="2号">2号</Option>
                        </Select>
                    )}
                </FormItem>

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

const createProjectForm = Form.create()(AddCoach);
export default createProjectForm;