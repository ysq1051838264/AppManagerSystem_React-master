/**
 * 修改手环
 *
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Select,Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;
const Option = Select.Option;

class EditBracelet extends Component {

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



                </Form>
            </Modal>
        );
    }
}

const editForm = Form.create()(EditBracelet);
export default editForm;