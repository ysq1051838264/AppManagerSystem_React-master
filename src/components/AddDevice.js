/**
 * 添加设备
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Select,Input} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

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

                    <FormItem label="设备编号">
                        {getFieldDecorator('projectName', {
                            rules: [{
                                required: true,
                                message: '请输入设备编号',
                            }],
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