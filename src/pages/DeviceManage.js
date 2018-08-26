import {Table, Icon, Divider, message, Popconfirm, Button, Card, Breadcrumb} from 'antd';
import '../css/Home.css';
import React, {Component} from 'react';
import AddDevice from "../components/AddDevice";
import EditDevice from "../components/EditDevice";
import {doGet, doPost} from '../utils/HttpUtil';
import {DEVICE_LIST, ADD_DEVICE} from '../utils/URL';

/***
 * 设备管理
 */
class DeviceManage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [],
            total: 0,
            current: 1,
            visible: false,
            editVisible: false,
            item: null,
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        let p = {};
        p.page = this.state.current;
        p.limit = 5;
        doGet(DEVICE_LIST, p)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json.items,
                    total: json.total
                });
            })
            .catch(err => {
                console.error(err);
                message.error("没有数据")
            })
    }

    changePage = (page) => {
        console.log("ysq的页面", page)
        this.setState({
            current: page,
        }, () => {
            this.getData();
        })
    }

    showCurRowMessage(item) {
        this.setState({
            editVisible: true,
            item: item,
        });

        console.log("打印---", this.state.item)
    }

    _showModal = () => {
        this.setState({
            visible: true
        })
    };

    deleteItem = (item) => {
        // alert("序列:" + item.id + " 手机:" + item.phone + " 密码:" + item.pwd + " 昵称:" + item.nick_name);
    };

    _saveFormRef = (formRef) => {
        this.formRef = formRef;
    };

    /*取消对话框*/
    _handleCancel = () => {
        this.setState({
            visible: false,
        })
    };

    _saveEditFormRef = (formRef) => {
        this.editFormRef = formRef;
    };

    /*编辑完成后的处理*/
    _handleEditCancel = () => {
        this.editFormRef.props.form.resetFields();
        this.setState({
            editVisible: false,
            // loading: false
        })
    };

    /*编辑处理*/
    _handleEdit = () => {
        // this.setState({loading: true});
        const form = this.editFormRef.props.form;
        form.validateFields((err, values) => {
            if (!err) {
                let params = new Map();
                params.set("projectId", this.state.item.id);
                params.set("projectName", values.projectName);
                params.set("projectCode", values.projectCode);
                params.set("projectDes", values.projectDes);

                console.log("打印请求参数：", params)
                // doPost(UPDATE_PROJECT, requestParams(params))
                //     .then(res => res.json())
                //     .then(json => {
                //         if (json.code === 1) {
                //             message.success(json.msg);
                //             this._loadProjectListData();
                //         } else {
                //             message.error(json.msg);
                //         }
                //         form.resetFields();
                //         this.setState({
                //             visible: false,
                //         })
                //     })
                //     .catch(err => console.error(err));
            }
        });
        form.resetFields();
    };

    /*添加设备*/
    _handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (!err) {
                let p = {};
                p = values;

                console.log("请求参数：", p);

                doPost(ADD_DEVICE, p)
                    .then(res => {
                        message.success("添加成功");
                        form.resetFields();
                        this.setState({
                            visible: false,
                        });
                    })
                    .catch(err => {
                        message.error("添加失败，请检查设备编号是否已经存在")
                    })
            }
        });
    };

    render() {
        let self = this;

        const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '设备编号',
            dataIndex: 'equip_no',
            key: 'equip_no',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '设备名称',
            dataIndex: 'equip_name',
            className: 'column-center',
            key: 'equip_name',
        }, {
            title: '场馆名称',
            dataIndex: 'gym_name',
            key: 'gym_name',
        }, {
            title: '注册时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '操作',
            key: 'action',
            render: (text, item) => (<span>
        <a href="javascript:;" onClick={function () {
            self.showCurRowMessage(item)
        }}>编辑</a>
      <Divider type="vertical"/>
                 <Popconfirm placement="left" title="确定要停用该设备么?" okText="确定" cancelText="取消" onConfirm={() => {
                     this.deleteItem(item)
                 }}>
                 <a>停用</a></Popconfirm>
    </span>),
        }];


        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>管理</Breadcrumb.Item>
                        <Breadcrumb.Item>设备管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Card title="设备列表"
                      extra={<Button className="ant-layout-end" type="primary" onClick={this._showModal}>添加</Button>}
                      bordered={false}>

                    <AddDevice
                        wrappedComponentRef={this._saveFormRef}
                        visible={this.state.visible}
                        onCancel={this._handleCancel}
                        onCreate={this._handleCreate}
                    />

                    <Table columns={columns} dataSource={this.state.data}
                           pagination={{  //分页
                               pageSize: 5,  //显示几条一页
                               current: this.state.current,
                               total: this.state.total,
                               onChange: this.changePage,
                           }}/>
                </Card>

                <EditDevice
                    wrappedComponentRef={this._saveEditFormRef}
                    visible={this.state.editVisible}
                    item={this.state.item}
                    onCancel={this._handleEditCancel}
                    onCreate={this._handleEdit}
                />


            </div>
        )

    }
}

export default DeviceManage;
