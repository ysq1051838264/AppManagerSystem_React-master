/**
 * 添加版本
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

class AddVersion extends Component {

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
                title="添加版本">

                <Form>
                    <FormItem label="版本号">
                        {getFieldDecorator('projectName', {
                            rules: [{
                                required: true,
                                message: '请输入版本号',
                            }],
                            // initialValue: "默认值"
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="下载链接">
                        {getFieldDecorator('projectCode', {
                            rules: [{
                                required: true,
                                message: '请输入下载链接'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="升级内容">
                        {getFieldDecorator('projectDes', {
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

const createProjectForm = Form.create()(AddVersion);
export default createProjectForm;