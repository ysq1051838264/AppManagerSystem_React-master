import {Table, Icon, Divider, message,Popconfirm, Button, Card, Breadcrumb} from 'antd';
import '../css/Home.css';
import React, {Component} from 'react';
import AddPlace from "../components/AddPlace";
import EditPlace from "../components/EditPlace";
import {doPost} from '../utils/HttpUtil';
import {ADD_MANAGER} from '../utils/URL';
/***
 * 场地管理
 */
class PlaceManage extends Component {
// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
        visible: false,
        editVisible: false,
        item:null,
    };
  }

    // state = {
    //     visible: false,
    //     editVisible: false,
    //     item:null,
    // };

    showCurRowMessage(item) {
        this.setState({
            editVisible: true,
            item:item,
        })

        console.log("打印---",this.state.item)
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
            title: '场管名字',
            dataIndex: 'gym_name',
            key: 'gym_name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '设备名称',
            dataIndex: 'equip_name',
            className: 'column-center',
            key: 'equip_name',
        }, {
            title: '超级管理员',
            dataIndex: 'phone',
            key: 'phone',
        } , {
            title: '地址',
            dataIndex: 'gym_address',
            className: 'column-center',
            key: 'gym_address',
        } , {
            title: '注册时间',
            dataIndex: 'time',
            key: 'time',
        },{
            title: '操作',
            key: 'action',
            render: (text, item) => (<span>
       <a href="javascript:;" onClick={function () {
           self.showCurRowMessage(item)
       }}>查看</a>
      <Divider type="vertical"/>
                 <Popconfirm placement="left" title="确定要删除该场地么?" okText="确定" cancelText="取消" onConfirm={() => {
                     this.deleteItem(item)
                 }}>
                 <a>删除</a></Popconfirm>
    </span>),
        }];

        const data = [];
        for (let i = 0; i < 4; i++) {
            data.push({
                id: i,
                phone:188832806+i,
                gym_address: `Edward King ${i}`,
                equip_name: `设备名 ${i}`,
                gym_name: `场馆名 ${i}`,
                time: `2018-7-. ${i}`,
            });
        }


        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>管理</Breadcrumb.Item>
                        <Breadcrumb.Item>设备管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Card title="场地列表"
                      extra={<Button className="ant-layout-end" type="primary" onClick={this._showModal}>添加</Button>}
                      bordered={false}>

                    <AddPlace
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
