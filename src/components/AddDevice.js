/**
 * 添加设备
 * Created by yangshuquan on 2018/8/12.
 */
import React, {Component} from 'react';
import {Modal, Form, Select, Input} from 'antd';
import {message} from "antd/lib/index";
import {doGet} from "../utils/HttpUtil";
import {QUERY_ALL_PLACE_INFO} from '../utils/URL';

const FormItem = Form.Item;
const Option = Select.Option;

class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrays: [],
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
                    arrays: json,
                });
            })
            .catch(err => {
                console.error(err);
                message.error("没有数据")
            })
    }

    renderOptions = () => {
        return this.state.arrays.map(element =>
            <Option value={element.gym_id}> {element.gym_name}</Option>);
    };

    render() {
        const {visible, onCancel, onCreate, form} = this.props;
        const {getFieldDecorator} = form;

        const models = this.state.arrays;

        return (
            <Modal
                visible={visible}
                onOk={onCreate}
                onCancel={onCancel}
                okText="添加"
                cancelText="取消"
                title="添加设备">

                <Form>
                    <FormItem
                        label="请选择场地">
                        {getFieldDecorator('gym_id', {
                            rules: [
                                {required: true, message: '请选择场地'},
                            ],
                        })(
                            <Select placeholder="请选择场地">
                                {this.renderOptions()}
                            </Select>
                        )}
                    </FormItem>

                    <FormItem label="设备编号(不能修改)">
                        {getFieldDecorator('equip_no', {
                            rules: [{
                                required: true,
                                message: '请输入设备编号',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem label="设备名称">
                        {getFieldDecorator('equip_name', {
                            rules: [{
                                required: true,
                                message: '请输入设备名称'
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

const createProjectForm = Form.create()(AddDevice);
export default createProjectForm;