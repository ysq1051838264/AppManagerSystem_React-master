/**
 * 添加广告
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Input, Select, Upload, Icon, message, Button} from 'antd';
import {UPLOAD_ICON} from '../utils/URL';

const FormItem = Form.Item;
const Option = Select.Option;

class AddAd extends Component {

    render() {
        const {visible, onCancel, onCreate, form} = this.props;
        const {getFieldDecorator} = form;

        const props = {
            name: 'icon',
            data: {
                projectCode: "",
            },
            // action: UPLOAD_ICON,
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                'Access-Control-Allow-Headers': "x-requested-with",
                authorization: 'authorization-text'
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                    //projectCode
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
                onOk={onCreate}
                onCancel={onCancel}
                okText="添加"
                cancelText="取消"
                title="添加轮播图">

                <Form>

                    <FormItem label="图片">
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
                                <span style={{color: 'red'}}>*图标的大小为750x1280</span>
                            </div>
                        )}
                    </FormItem>

                    <FormItem label="图片链接">
                        {getFieldDecorator('projectName', {
                            rules: [{
                                required: true,
                                message: '请输入图片链接地址',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        label="图片类型"
                        hasFeedback>
                        {getFieldDecorator('projectDes', {
                            rules: [
                                {required: true, message: '请选择图片类型'},
                            ],
                        })(
                            <Select placeholder="请选择图片类型">
                                <Option value="小程序">小程序</Option>
                                <Option value="PC端">PC端</Option>
                            </Select>
                        )}
                    </FormItem>

                </Form>
            </Modal>
        );
    }

}

const createProjectForm = Form.create()(AddAd);
export default createProjectForm;