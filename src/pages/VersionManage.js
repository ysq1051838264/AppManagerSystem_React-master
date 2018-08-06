import {Table, Icon, Divider, Button} from 'antd';
import React, {Component} from 'react';


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

    showCurRowMessage(record) {
        alert("key:" + record.key + " name:" + record.name + " age:" + record.age + " address:" + record.address);
    }

    render() {
        let self = this;

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
      <a href="javascript:;" onClick={function () {
          self.showCurRowMessage(record)
      }}>查看</a>
      <Divider type="vertical"/>
      <a href="javascript:;">删除</a>
    </span>),
        }, {
            title: '添加',
            dataIndex: '添加',
            render: () => (
                <div>
                    <Button type="primary">Primary</Button>
                </div>),
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
            <Table columns={columns} dataSource={data}
                   pagination={{  //分页
                       pageSize: 15,  //显示几条一页
                   }}/>
        )

    }
}

export default VersionManage;
