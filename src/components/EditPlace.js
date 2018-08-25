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
                    <FormItem label="场管名称">
                        {getFieldDecorator('projectName', {
                            initialValue: item.gym_name,
                            rules: [{
                                required: true,
                                message: '请输入场管名称'
                            }]
                        })(
                            <Input disabled/>
                        )}
                    </FormItem>

                    <FormItem label="场馆联系人">
                        {getFieldDecorator('projectCode', {
                            initialValue: item.supervisor,
                            rules: [{
                                required: true,
                                message: '请输入场馆联系人'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="场馆地址">
                        {getFieldDecorator('projectDes', {
                            initialValue: item.gym_address,
                            rules: [{
                                required: true,
                                message: '请输入场馆地址'
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