/**
 * 修改超级管理员教练资料
 *
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;


class EditVersion extends Component {

    render() {
        const {visible, onCancel, onCreate, form, item} = this.props;
        const {getFieldDecorator} = form;

        if (item === null)
            return (<div></div>);
        else
            return (
                <Modal
                    visible={visible}
                    onCancel={onCancel}
                    onOk={onCreate}
                    okText="提交"
                    cancelText="取消"
                    title="编辑版本">

                    <Form>
                        <FormItem label="版本号">
                            {getFieldDecorator('projectName', {
                                initialValue: item.edition_no,
                                rules: [{
                                    required: true,
                                    message: '请输入版本号'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>

                        <FormItem label="版本下载地址">
                            {getFieldDecorator('projectCode', {
                                initialValue: item.edition_url,
                                rules: [{
                                    required: true,
                                    message: '请输入版本下载地址'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>

                        <FormItem label="升级内容">
                            {getFieldDecorator('projectDes', {
                                initialValue: item.content,
                                rules: [{
                                    required: true,
                                    message: '请输入升级内容'
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

const editForm = Form.create()(EditVersion);
export default editForm;