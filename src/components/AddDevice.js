/**
 * 添加设备
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

class AddDevice extends Component {

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
                title="添加设备">

                <Form>
                    <FormItem label="设备编号">
                        {getFieldDecorator('projectName', {
                            rules: [{
                                required: true,
                                message: '请输入设备编号',
                            }],
                            // initialValue: "默认值"
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="设备名称">
                        {getFieldDecorator('projectCode', {
                            rules: [{
                                required: true,
                                message: '请输入设备名称'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="手环个数">
                        {getFieldDecorator('projectDes', {
                            rules: [{
                                required: true,
                                message: '请输入该设备手环个数'
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

const createProjectForm = Form.create()(AddDevice);
export default createProjectForm;