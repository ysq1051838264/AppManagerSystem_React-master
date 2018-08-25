/**
 * 修改设备资料
 *
 */
import React, {Component} from 'react';
import {Modal, Form, Input,Select, Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;
const Option = Select.Option;

class EditDevice extends Component {

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
                title="编辑设备">

                <Form>
                    <FormItem label="设备编号">
                        {getFieldDecorator('projectName', {
                            initialValue: item.equip_no,
                            rules: [{
                                required: true,
                                message: '请输入设备编号'
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

                    <FormItem label="手环个数">
                        {getFieldDecorator('projectDes', {
                            initialValue: item.num,
                            rules: [{
                                required: true,
                                message: '请输入手环个数'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        label="请选择场地">
                        {getFieldDecorator('place', {
                            initialValue: item.equip_name,
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

const editForm = Form.create()(EditDevice);
export default editForm;