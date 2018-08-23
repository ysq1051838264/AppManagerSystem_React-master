/**
 * 添加广告
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

class AddAd extends Component {

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
                title="添加轮播图">

                <Form>
                    <FormItem label="图片地址">
                        {getFieldDecorator('projectName', {
                            rules: [{
                                required: true,
                                message: '请输入手机号码',
                            }],
                            // initialValue: "默认值"
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="图片点击链接">
                        {getFieldDecorator('projectCode', {
                            rules: [{
                                required: true,
                                message: '请输入初始密码'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="图片类型">
                        {getFieldDecorator('projectDes', {
                            rules: [{
                                required: true,
                                message: '请输入昵称'
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

const createProjectForm = Form.create()(AddAd);
export default createProjectForm;