import {Table, Icon, Divider, message, Button, Card, Breadcrumb} from 'antd';
import '../css/Home.css';
import React, {Component} from 'react';
import AddProjectForm from "../components/AddProjectForm";
import {doPost} from '../utils/HttpUtil';
import {ADD_MANAGER} from '../utils/URL';

// const data = [{
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
// }, {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
// }];


class VersionManage extends Component {

    state = {
        visible: false,
    };

    showCurRowMessage(record) {
        alert("key:" + record.key + " name:" + record.name + " age:" + record.age + " address:" + record.address);
    }

    /*弹出对话框*/
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

    /*添加项目处理*/
    _handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (!err) {
                // let params = new Map();
                // params.set("projectName", values.projectName);
                // params.set("projectCode", values.projectCode);
                // params.set("projectDes", values.projectDes);

                let p = {};
                p.account = values.projectName;
                p.password = values.projectCode;
                p.username = values.projectDes;

                doPost(ADD_MANAGER, p)
                    .then(res => {
                        message.success("添加成功");
                        form.resetFields();
                        this.setState({
                            visible: false,
                        });
                    })
                    // .then(json => {
                    //     message.success("添加成功");
                    //     // this.props.onSuccess();
                    //
                    //     form.resetFields();
                    //     this.setState({
                    //         visible: false,
                    //     });
                    // })
                    .catch(err => {
                        console.error(err)
                        message.error("添加失败")
                    })
            }
        });
    };

    render() {
        let self = this;

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            className: 'column-center',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            className: 'column-center',
            key: 'address',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (<span>
      <a href="javascript:;" onClick={function () {
          self.showCurRowMessage(record)
      }}>查看</a>
      <Divider type="vertical"/>
      <a href="javascript:;">删除</a>
    </span>),
        }];

        const data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
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

                <Card title="升级记录"
                      extra={<Button className="ant-layout-end" type="primary" onClick={this._showModal}>添加</Button>}
                      bordered={false}>

                    <AddProjectForm
                        wrappedComponentRef={this._saveFormRef}
                        visible={this.state.visible}
                        onCancel={this._handleCancel}
                        onCreate={this._handleCreate}
                    />

                    <Table columns={columns} dataSource={data}
                           pagination={{  //分页
                               pageSize: 15,  //显示几条一页
                           }}/>
                </Card>
            </div>
        )

    }
}

export default VersionManage;
