/**
 * 菜单导航栏
 * Created by panyz on 2018/5/29.
 */
import React, {Component} from 'react';
import '../css/AppLogo.css';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';


const SubMenu = Menu.SubMenu;

class MenuNavigation extends Component {

    state = {
        key: ['1'],
    };


    componentDidMount() {
        let pathname = window.location.pathname;
        let key = pathname.split("/")[2];
        this.setState({
            key: [key],
        });

    }

    _onKeySelected = (item) => {
        this.setState({
            key: [item.key]
        });
    };


    render() {
        const urlPath = this.props.baseUrl;
        return (
            <div>
                <div className="logo">
                    <h2 style={{color: '#fff'}}><img src={require('../images/icon.png')} alt="logo"/>FiFo管理平台</h2>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['ad']} selectedKeys={this.state.key}
                      onSelect={this._onKeySelected}
                      defaultOpenKeys={['ad']}>

                    {/*<Menu.Item key="dataStatistics">*/}
                        {/*<NavLink to={`${urlPath}/dataStatistics`}>*/}
                            {/*<Icon type="bar-chart"/>*/}
                            {/*<span>数据统计</span>*/}
                        {/*</NavLink>*/}
                    {/*</Menu.Item>*/}

                    <Menu.Item key="ad">
                        <NavLink to={`${urlPath}/ad`}>
                            <Icon type="rocket"/>
                            <span>广告</span>
                        </NavLink>
                    </Menu.Item>

                    {/*<SubMenu key="systemsKey" title={<span><Icon type="tablet"/><span>版本管理</span></span>}>*/}
                        {/*<Menu.Item key="android">*/}
                            {/*<NavLink to={`${urlPath}/android`}>*/}
                                {/*<span>Android</span>*/}
                            {/*</NavLink>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="ios">*/}
                            {/*<NavLink to={`${urlPath}/ios`}>*/}
                                {/*<span>iOS</span>*/}
                            {/*</NavLink>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="releaseVersion" disabled={sessionStorage.getItem("userAuth") !== "1"}>*/}
                            {/*<NavLink to={`${urlPath}/releaseVersion`}>*/}
                                {/*<span>版本发布</span>*/}
                            {/*</NavLink>*/}
                        {/*</Menu.Item>*/}
                    {/*</SubMenu>*/}

                    <SubMenu  title={<span><Icon type="layout"/><span>管理</span></span>}>
                        <Menu.Item key="coach">
                            <NavLink to={`${urlPath}/coach`}>
                                <span>教练管理</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item key="device">
                            <NavLink to={`${urlPath}/device`}>
                                <span>设备管理</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item key="place">
                            <NavLink to={`${urlPath}/place`}>
                                <span>场地管理</span>
                            </NavLink>
                        </Menu.Item>

                    </SubMenu>

                    <SubMenu  title={<span><Icon type="setting"/><span>设置</span></span>}>
                        <Menu.Item key="user">
                            <NavLink to={`${urlPath}/user`}>
                                <span>用户管理</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item key="upload">
                            <NavLink to={`${urlPath}/upload`}>
                                <span>升级管理</span>
                            </NavLink>
                        </Menu.Item>

                    </SubMenu>

                </Menu>
            </div>

        );
    }
}

export default MenuNavigation;