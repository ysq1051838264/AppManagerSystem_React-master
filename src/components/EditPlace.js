/**
 * 修改场地资料
 *
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;


class EditPlace extends Component {

    render() {
        const {visible, onCancel, onCreate, form, item} = this.props;
        const {getFieldDecorator} = form;

        if(item ===null)
            return (<div></div>);

        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                onOk={onCreate}
                okText="提交"
                cancelText="取消"
                title="编辑场地">

                <Form>
                    <FormItem label="场管名字">
                        {getFieldDecorator('projectName', {
                            initialValue: item.gym_name,
                            rules: [{
                                required: true,
                                message: '请输入场管名字'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="设备名称">
                        {getFieldDecorator('projectCode', {
                            initialValue: item.equip_name,
                            rules: [{
                                required: true,
                                message: '请输入设备名称'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="超级管理员">
                        {getFieldDecorator('projectDes', {
                            initialValue: item.phone,
                            rules: [{
                                required: true,
                                message: '请输入超级管理员称'
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

const editForm = Form.create()(EditPlace);
export default editForm;