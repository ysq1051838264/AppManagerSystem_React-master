import {Table, Icon, Divider, message, Popconfirm, Button, Card, Breadcrumb} from 'antd';
import '../css/Home.css';
import React, {Component} from 'react';
import AddVersion from "../components/AddVersion";
import EditVersion from "../components/EditVersion";

import {doPost, requestParams} from '../utils/HttpUtil';
import {ADD_MANAGER, DELETE_PROJECT, UPDATE_PROJECT} from '../utils/URL';

/***
 * 版本管理
 */
class VersionManage extends Component {

    state = {
        visible: false,
        editVisible: false,
        item:null,
    };


    showCurRowMessage(item) {
        this.setState({
            editVisible: true,
            item:item,
        })

        console.log("打印---",this.state.item)
        // alert("序列:" + item.id + " 手机:" + item.phone + " 密码:" + item.pwd + " 昵称:" + item.nick_name);
    }

    /*弹出对话框*/
    _showModal = () => {
        this.setState({
            visible: true
        })
    };

    deleteItem = (item) => {
        alert("序列:" + item.id + " 手机:" + item.phone + " 密码:" + item.pwd + " 昵称:" + item.nick_name);

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

                console.log("打印请求参数：",params)
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

    /*添加教练*/
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

    render() {
        let self = this;

        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '下载链接',
            dataIndex: 'edition_url',
            key: 'edition_url',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '升级内容',
            dataIndex: 'content',
            className: 'column-center',
            key: 'content',
        }, {
            title: '版本号',
            dataIndex: 'edition_no',
            key: 'edition_no',
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '操作',
            key: 'action',
            render: (text, item) => (<span>
      <a href="javascript:;" onClick={function () {
          self.showCurRowMessage(item)
      }}>查看</a>
      <Divider type="vertical"/>
                 <Popconfirm placement="left" title="确定要删除该版本记录么?" okText="确定" cancelText="取消" onConfirm={() => {
                     this.deleteItem(item)
                 }}>
                 <a>删除</a></Popconfirm>
    </span>),
        }];

        const data = [];
        for (let i = 0; i < 5; i++) {
            data.push({
                id: i,
                content: `升级内容. ${i}`,
                edition_url: `htttp://www.baidu.com?/ ${i}`,
                edition_no: 32,
                time: `2018-7-. ${i}`,
            });
        }

        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>设置</Breadcrumb.Item>
                        <Breadcrumb.Item>升级管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Card title="版本记录列表"
                      extra={<Button className="ant-layout-end" type="primary" onClick={this._showModal}>添加</Button>}
                      bordered={false}>

                    <AddVersion
                        wrappedComponentRef={this._saveFormRef}
                        visible={this.state.visible}
                        onCancel={this._handleCancel}
                        onCreate={this._handleCreate}/>

                    <Table columns={columns} dataSource={data}
                           pagination={{  //分页
                               pageSize: 15,  //显示几条一页
                           }}/>
                </Card>

                <EditVersion
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

export default VersionManage;
