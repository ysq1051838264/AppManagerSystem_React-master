import {Table, Icon, Divider, message, Button, Card, Breadcrumb} from 'antd';
import '../css/Home.css';
import React, {Component} from 'react';
import AddCoach from "../components/AddCoach";
import {doPost} from '../utils/HttpUtil';
import {ADD_MANAGER} from '../utils/URL';
/***
 * 教练管理
 */
class CoachManage extends Component {

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
            title: '手机',
            dataIndex: 'phone',
            key: 'phone',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '密码',
            dataIndex: 'pwd',
            className: 'column-center',
            key: 'pwd',
        }, {
            title: '昵称',
            dataIndex: 'nick_name',
            key: 'nick_name',
        } , {
            title: '注册时间',
            dataIndex: 'time',
            key: 'time',
        },{
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
                id: i,
                phone:188832806+i,
                nick_name: `Edward King ${i}`,
                pwd: 32,
                time: `2018-7-. ${i}`,
            });
        }


        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>管理</Breadcrumb.Item>
                        <Breadcrumb.Item>教练管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Card title="超级管理员列表"
                      extra={<Button className="ant-layout-end" type="primary" onClick={this._showModal}>添加</Button>}
                      bordered={false}>

                    <AddCoach
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

export default CoachManage;
