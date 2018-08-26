/**
 * 修改设备资料
 *
 */
import React, {Component} from 'react';
import {Modal, Form, Input,Select, Upload, Icon, message, Button} from 'antd';
import {GET_PLACE, QUERY_ALL_PLACE_INFO} from '../utils/URL';
import {doGet, doPost, doURLGet} from '../utils/HttpUtil';

const FormItem = Form.Item;
const Option = Select.Option;

class EditDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        let p = {};
        // p.page = this.state.current;
        // p.limit = 5;
        doGet(QUERY_ALL_PLACE_INFO, null)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json.items,
                });
            })
            .catch(err => {
                console.error(err);
                message.error("没有数据")
            })
    }

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
                title="编辑设备">

                <Form>

                    <FormItem label="设备编号">
                        {getFieldDecorator('projectName', {
                            initialValue: item.equip_no,
                            rules: [{
                                required: true,
                                message: '请输入设备编号'
                            }]
                        })(
                            <Input disabled/>
                        )}
                    </FormItem>

                    <FormItem
                        label="请选择场地">
                        {getFieldDecorator('place', {
                            initialValue: item.equip_name,
                            rules: [
                                {required: true, message: '请选择场地'},
                            ],
                        })(
                            <Select placeholder="请选择场地">
                                <Option value="1号">1号</Option>
                                <Option value="2号">2号</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem label="设备名称">
                        {getFieldDecorator('projectCode', {
                            initialValue: item.equip_name,
                            rules: [{
                                required: true,
                                message: '请输入设备名称'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>

                </Form>
            </Modal>
        );
    }
}

const editForm = Form.create()(EditDevice);
export default editForm;