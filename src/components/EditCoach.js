/**
 * 修改超级管理员教练资料
 *
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Select,Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;
const Option = Select.Option;

class EditCoach extends Component {

    render() {
        const {visible, onCancel, onCreate, form, item} = this.props;
        const {getFieldDecorator} = form;

        if(item ===null)
            return (<div></div>);

        console.log("打印数据---",item)

        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                onOk={onCreate}
                okText="提交"
                cancelText="取消"
                title="编辑教练">

                <Form>
                    <FormItem label="手机号">
                        {getFieldDecorator('projectName', {
                            initialValue: item.phone,
                            rules: [{
                                required: true,
                                message: '请输入手机号'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="密码">
                        {getFieldDecorator('projectCode', {
                            initialValue: item.pwd,
                            rules: [{
                                required: true,
                                message: '请输入密码'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="昵称">
                        {getFieldDecorator('projectDes', {
                            initialValue: item.nick_name,
                            rules: [{
                                required: true,
                                message: '请输入昵称'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        label="请选择场地">
                        {getFieldDecorator('place', {
                            initialValue: item.gym_name,
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

                </Form>
            </Modal>
        );
    }
}

const editForm = Form.create()(EditCoach);
export default editForm;