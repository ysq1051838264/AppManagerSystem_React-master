/**
 * 新增用户
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Upload, Icon, message, Button} from 'antd';

const FormItem = Form.Item;

class UserManagePage extends Component {

    render() {
        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                onOk={onCreate}
                okText="提交"
                cancelText="取消"
                title="编辑项目">

                <Form>
                    <FormItem label="项目名称">
                        {getFieldDecorator('projectName', {
                            initialValue:"111",
                            rules: [{
                                required: true,
                                message: '请输入项目名称'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="项目编码">
                        {getFieldDecorator('projectCode', {
                            initialValue: "项目编码",
                            rules: [{
                                required: true,
                                message: '请输入项目编码'
                            }]
                        })(
                            <Input disabled/>
                        )}
                    </FormItem>

                    <FormItem label="项目描述">
                        {getFieldDecorator('projectDes', {
                            initialValue: "项目描述",
                            rules: [{
                                required: true,
                                message: '请输入项目描述'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="项目图标">

                        {getFieldDecorator('appIcon', {
                            rules: [{
                                required: false,
                            }]
                        })(
                            <div>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload"/> 上传图标
                                    </Button>
                                </Upload>
                                <span style={{color:'red'}}>*图标的大小为48x48</span>
                            </div>
                        )}
                    </FormItem>

                </Form>
            </Modal>
        );
    }

}

const UserManagePageForm = Form.create()(UserManagePage);

export default UserManagePageForm;