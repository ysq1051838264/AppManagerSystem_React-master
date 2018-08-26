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
                title="编辑场馆">

                <Form>
                    <FormItem label="场管名称">
                        {getFieldDecorator('gym_name', {
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
                        {getFieldDecorator('supervisor', {
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
                        {getFieldDecorator('gym_address', {
                            initialValue: item.gym_address,
                            rules: [{
                                required: true,
                                message: '请输入场馆地址'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <a> 企业信息</a>

                    <FormItem  label="公司全称">
                        {getFieldDecorator('company_name', {
                            initialValue: item.company_name,
                            rules: [{
                                required: false,
                                message: '请输入公司',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem  label="统一社会信用代码">
                        {getFieldDecorator('credit_code', {
                            initialValue: item.credit_code,
                            rules: [{
                                required: false,
                                message: '请输入统一社会信用代码',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem  label="公司注册地址">
                        {getFieldDecorator('address', {
                            initialValue: item.address,
                            rules: [{
                                required: false,
                                message: '请输入公司注册地址',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem  label="法人">
                        {getFieldDecorator('legal_person', {
                            initialValue: item.legal_person,
                            rules: [{
                                required: false,
                                message: '请输入公司法人',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>


                    <FormItem  label="联系电话">
                        {getFieldDecorator('company_phone', {
                            initialValue: item.company_phone,
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

const editForm = Form.create()(EditPlace);
export default editForm;