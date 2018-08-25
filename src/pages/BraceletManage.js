import {Table, Icon, Divider, message, Popconfirm, Button, Card, Breadcrumb} from 'antd';
import '../css/Home.css';
import React, {Component} from 'react';
import AddBracelet from "../components/AddBracelet";
import EditBracelet from "../components/EditBracelet";

import {doPost, requestParams} from '../utils/HttpUtil';
import {ADD_MANAGER, DELETE_PROJECT, UPDATE_PROJECT} from '../utils/URL';

/***
 * 手环管理
 */
class BraceletManage extends Component {

    state = {
        visible: false,
        editVisible: false,
        current: 1,
        item: null,
    };

    showCurRowMessage(item) {
        // 停用启用
        alert("停用手环");
    }

    /*弹出对话框*/
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

    /*添加手环*/
    _handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (!err) {
                let p = {};
                p.account = values.projectName;
                p.password = values.projectCode;
                p.username = values.projectDes;

                // doPost(ADD_MANAGER, p)
                //     .then(res => {
                //         message.success("添加成功");
                //         form.resetFields();
                //         this.setState({
                //             visible: false,
                //         });
                //     })
                //     .catch(err => {
                //         console.error(err)
                //         message.error("添加失败")
                //     })
            }
        });
    };

    changePage = (page) => {

        console.log("ysq的页面", page)
        this.setState({
            current: page,
        }, () => {
            // let param = JSON.parse(JSON.stringify(this.state.param))
            // param = {
            //     ...param,
            //     pageNum: this.state.current,
            //     pageSize: 10,
            // }
            // this.getActivityRestDetailList(param)
        })
    }

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
            key: 'equip_name',
        }, {
            title: '手环编号',
            dataIndex: 'bracelet_no',
            key: 'bracelet_no',
        }, {
            title: '手环名字',
            dataIndex: 'name',
            key: 'name',
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
      }}>停用</a>
      <Divider type="vertical"/>
                 <Popconfirm placement="left" title="确定要停用该手环么?" okText="确定" cancelText="取消" onConfirm={() => {
                     this.deleteItem(item)
                 }}>
                 <a>删除</a>
                 </Popconfirm>
    </span>),
        }];

        const data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                id: i,
                equip_no: 188832806 + i,
                equip_name: `Edward King ${i}`,
                bracelet_no: 32,
                name: '上海市',
                time: `2018-7-. ${i}`,
            });
        }

        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>管理</Breadcrumb.Item>
                        <Breadcrumb.Item>手环管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Card title="手环列表"
                      extra={<Button className="ant-layout-end" type="primary" onClick={this._showModal}>添加</Button>}
                      bordered={false}>

                    <AddBracelet
                        wrappedComponentRef={this._saveFormRef}
                        visible={this.state.visible}
                        onCancel={this._handleCancel}
                        onCreate={this._handleCreate}/>

                    <Table columns={columns} dataSource={data}
                           pagination={{  //分页
                               pageSize: 15,  //显示几条一页
                           }}
                           pagination={{  // 分页
                               simple: true,
                               current: this.state.current,
                               total: 46,
                               onChange: this.changePage,
                           }}/>
                </Card>
            </div>
        )

    }
}

export default BraceletManage;
