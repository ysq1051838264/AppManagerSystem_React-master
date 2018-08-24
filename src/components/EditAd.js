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
                title="编辑图片">

                <Form>
                    <FormItem label="图片URL地址">
                        {getFieldDecorator('projectName', {
                            initialValue: item.pic_url,
                            rules: [{
                                required: true,
                                message: '请输入图片URL地址'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="图片链接">
                        {getFieldDecorator('projectCode', {
                            initialValue: item.address,
                            rules: [{
                                required: true,
                                message: '请输入图片链接'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="图片类型">
                        {getFieldDecorator('projectDes', {
                            initialValue: item.type,
                            rules: [{
                                required: true,
                                message: '请输入图片类型'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="上传图片">
                        {getFieldDecorator('appIcon', {
                            rules: [{
                                required: false,
                            }]
                        })(
                            <div>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload"/> 上传图片
                                    </Button>
                                </Upload>
                                <span style={{color:'red'}}>*图标的大小为750*1028</span>
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