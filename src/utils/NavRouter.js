/**
 * 自定义菜单导航路由
 * Created by panyz on 2018/6/12.
 */
import React, {Component} from 'react';
import ErrorPage from "../pages/ErrorPage";
import ProjectListPage from '../pages/ProjectListPage';
import AppPage from '../pages/AppPage';
import ReleaseVersionPage from '../pages/ReleaseVersionPage';
import DataStatisticsPage from '../pages/DataStatisticsPage';
import UserManagePage from '../pages/UserManagePage';
import VersionManage from '../pages/VersionManage';
import CoachManage from "../pages/CoachManage";
import DeviceManage from "../pages/DeviceManage";
import AdManage from "../pages/AdManage";
import PlaceManage from "../pages/PlaceManage";
import BraceletManage from "../pages/BraceletManage";

class NavRouter extends Component {

    /*判断页面是否存在*/
    _handleViewVisible = (page) => {
        return page === 'projectList' || page === 'android' || page === 'game'
            || page === 'releaseVersion' || page === 'dataStatistics' || page === 'user' || page === 'upload'
            || page === 'device' || page === 'coach' || page === 'place' || page === 'ad' || page === 'bracelet';
    };

    /*返回对应的页面*/
    _handleView = (page) => {
        if (page === 'projectList') {
            return (<ProjectListPage/>);//项目管理
        } else if (page === 'android' || page === 'ios') {
            return (<AppPage appSystem={page}/>);//App管理
        } else if (page === 'releaseVersion') {
            return <ReleaseVersionPage/>//版本发布
        } else if (page === 'dataStatistics') {
            return <DataStatisticsPage/>;//数据统计
        } else if (page === 'user') {
            return <UserManagePage/>;
        } else if (page === 'upload') {
            return <VersionManage/>;
        } else if (page === 'game') {
            return <VersionManage/>;
        } else if (page === 'device') {
            return <DeviceManage/>;
        } else if (page === 'coach') {
            return <CoachManage/>;
        } else if (page === 'place') {
            return <PlaceManage/>;
        } else if (page === 'ad') {
            return <AdManage/>;
        } else if (page === 'bracelet') {
            return <BraceletManage/>;
        }
    };

    render() {
        let page = this.props.match.params.id;
        return (
            <div>
                {this._handleViewVisible(page) ? this._handleView(page) : (<ErrorPage/>)}
            </div>
        );
    }
}

export default NavRouter;