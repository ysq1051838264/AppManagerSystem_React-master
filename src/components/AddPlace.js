/**
 * 添加场地
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Select, Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;
const Option = Select.Option;

class AddPlace extends Component {

    render() {
        const {visible, onCancel, onCreate, form} = this.props;
        const {getFieldDecorator} = form;

        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 14},
        };

        return (
            <Modal
                visible={visible}
                onOk={onCreate}
                onCancel={onCancel}
                okText="添加"
                cancelText="取消"
                title="添加场地">

                <Form>
                    <FormItem   {...formItemLayout} label="设备编号">
                        {getFieldDecorator('projectName', {
                            rules: [{
                                required: true,
                                message: '请输入设备编号',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="设备名称">
                        {getFieldDecorator('projectCode', {
                            rules: [{
                                required: true,
                                message: '请输入设备名称',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="选择设备"
                        hasFeedback>
                        {getFieldDecorator('projectDes', {
                            rules: [
                                {required: true, message: '请选择设备'},
                            ],
                        })(
                            <Select placeholder="请选择设备">
                                <Option value="1号">1号</Option>
                                <Option value="2号">2号</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="选择教练"
                        hasFeedback>
                        {getFieldDecorator('projectDes', {
                            rules: [
                                {required: true, message: '请选择教练'},
                            ],
                        })(
                            <Select placeholder="请选择教练">
                                <Option value="1">阳教练</Option>
                                <Option value="2">毛教练</Option>
                            </Select>
                        )}
                    </FormItem>

                    <a> 请输入企业信息</a>

                    <FormItem  {...formItemLayout} label="公司全称">
                        {getFieldDecorator('company_name', {
                            rules: [{
                                required: false,
                                message: '请输入公司',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="统一社会信用代码">
                        {getFieldDecorator('credit_code', {
                            rules: [{
                                required: false,
                                message: '请输入统一社会信用代码',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="公司注册地址">
                        {getFieldDecorator('address', {
                            rules: [{
                                required: false,
                                message: '请公司注册地址',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="法人">
                        {getFieldDecorator('legal_person', {
                            rules: [{
                                required: false,
                                message: '请输入公司法人',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>


                    <FormItem  {...formItemLayout} label="联系电话">
                        {getFieldDecorator('company_phone', {
                            rules: [{
                                required: false,
                                message: '请输入联系电话',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>


                </Form>
            </Modal>
        );
    }

}

const createProjectForm = Form.create()(AddPlace);
export default createProjectForm;