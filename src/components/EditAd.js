/**
 * 修改广告
 *
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;


class EditAd extends Component {

    render() {
        const {visible, onCancel, onCreate, form, item} = this.props;
        const {getFieldDecorator} = form;

        if(item ===null)
            return (<div></div>);

        console.log("打印数据---",item)
        const props = {
            name: 'icon',
            data: {
                projectCode: item.phone,
            },
            action: UPLOAD_ICON,
            headers: {
                'Access-Control-Allow-Headers': "x-requested-with",
                authorization: 'authorization-text'
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {

                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功.`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败.`);
                }
            },
        };


        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                onOk={onCreate}
                okText="提交"
                cancelText="取消"
                title="编辑项目">

                <Form>
                    <FormItem label="手机号">
                        {getFieldDecorator('projectName', {
                            initialValue: item.phone,
                            rules: [{
                                required: true,
                                message: '请输入手机号'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="密码">
                        {getFieldDecorator('projectCode', {
                            initialValue: item.pwd,
                            rules: [{
                                required: true,
                                message: '请输入密码'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="昵称">
                        {getFieldDecorator('projectDes', {
                            initialValue: item.nick_name,
                            rules: [{
                                required: true,
                                message: '请输入昵称'
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

const editForm = Form.create()(EditAd);
export default editForm;