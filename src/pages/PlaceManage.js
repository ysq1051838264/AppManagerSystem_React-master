import {Table, message, Popconfirm, Button, Card, Breadcrumb} from 'antd';
import '../css/Home.css';
import React, {Component} from 'react';
import {getTimes} from '../utils/DateUtil';
import AddPlace from "../components/AddPlace";
import EditPlace from "../components/EditPlace";
import {doGet, doPost, doURLGet} from '../utils/HttpUtil';
import {GET_PLACE, PLACE_INFO, QUERY_PLACE_INFO} from '../utils/URL';

/***
 * 场地管理
 */
class PlaceManage extends Component {
// 构造
    constructor(props) {
        super(props);
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
        doGet(GET_PLACE, p)
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
        doURLGet(QUERY_PLACE_INFO + '/' + item.id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    editVisible: true,
                    item: json,
                });
            })
            .catch(err => {
                console.error(err);
                message.error("没有数据")
            })
    }

    _showModal = () => {
        this.setState({
            visible: true
        })
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
                let p = {};
                p = values;
                p.id = this.state.item.id;

                console.log("请求参数：", p);

                doPost(PLACE_INFO, p)
                    .then(res => {
                        message.success("修改成功");
                        this.getData();
                        form.resetFields();
                        this.setState({
                            editVisible: false,
                        });
                    })
                    .catch(err => {
                        message.error("修改失败，请检查是否场地已经存在")
                        this.setState({
                            editVisible: false,
                        });
                    })
            }
        });
        form.resetFields();
    };

    /*添加场地*/
    _handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (!err) {
                let p = {};
                p = values;

                console.log("请求参数：", p);

                doPost(PLACE_INFO, p)
                    .then(res => {
                        message.success("添加成功");
                        form.resetFields();
                        this.setState({
                            visible: false,
                        });
                    })
                    .catch(err => {
                        message.error("添加失败，请检查是否场地已经存在")
                    })
            }
        });
    };

    render() {
        let self = this;

        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '场管名字',
            dataIndex: 'gym_name',
            key: 'gym_name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '场馆联系人',
            dataIndex: 'supervisor',
            key: 'supervisor',
        }, {
            title: '场馆地址',
            dataIndex: 'gym_address',
            key: 'gym_address',
        }, {
            title: '注册时间',
            dataIndex: 'created_at',
            key: 'created_at',
            render: text => <a>{getTimes(text)}</a>,
        }, {
            title: '操作',
            key: 'action',
            render: (text, item) => (<span>
       <a href="javascript:;" onClick={function () {
           self.showCurRowMessage(item)
       }}>编辑</a>
    </span>),
        }];


        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>管理</Breadcrumb.Item>
                        <Breadcrumb.Item>场馆管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Card title="场馆列表"
                      extra={<Button className="ant-layout-end" type="primary" onClick={this._showModal}>添加</Button>}
                      bordered={false}>

                    <AddPlace
                        wrappedComponentRef={this._saveFormRef}
                        visible={this.state.visible}
                        onCancel={this._handleCancel}
                        onCreate={this._handleCreate}
                    />

                    <Table dataSource={this.state.data} columns={columns}
                           pagination={{  //分页
                               pageSize: 5,  //显示几条一页
                               current: this.state.current,
                               total: this.state.total,
                               onChange: this.changePage,
                           }}/>
                </Card>

                <EditPlace
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

export default PlaceManage;
