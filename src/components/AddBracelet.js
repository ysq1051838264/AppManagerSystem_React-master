/**
 * 添加手环
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Select,Input} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class AddBracelet extends Component {

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
                title="添加手环">

                <Form>

                    <FormItem
                        label="请选择设备编号">
                        {getFieldDecorator('equip_no', {
                            rules: [
                                {required: true, message: '请选择设备编号'},
                            ],
                        })(
                            <Select placeholder="请选择设备编号">
                                <Option value="1号">1号</Option>
                                <Option value="2号">2号</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem label="手环编号(不能修改)">
                        {getFieldDecorator('bracelet_no', {
                            rules: [{
                                required: true,
                                message: '请输入手环编号'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="手环名字">
                        {getFieldDecorator('bracelet_name', {
                            rules: [{
                                required: true,
                                message: '请输入手环名字'
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

const createProjectForm = Form.create()(AddBracelet);
export default createProjectForm;