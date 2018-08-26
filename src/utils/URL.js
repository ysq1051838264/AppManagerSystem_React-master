/**
 * 网络请求URL
 * Created by panyz on 2018/6/8.
 */
const BASE_URL = "http://192.168.43.25:8080/fifo/admin/";

export const LOGIN = BASE_URL + "sign";//登录接口

export const ADD_MANAGER = BASE_URL + "anagers";//添加管理员

export const GET_PLACE = BASE_URL + "gym/page";//获取场馆列表

export const PLACE_INFO = BASE_URL + "gym/info";//添加或者编辑场馆信息

export const QUERY_PLACE_INFO = BASE_URL + "gym/gym";//根据id查询信息

export const QUERY_ALL_PLACE_INFO = BASE_URL + "gym/detail";//查询所有场馆id和名字信息

export const ADD_DEVICE = BASE_URL + "equip/info";//添加设备信息
export const DEVICE_LIST = BASE_URL + "equip/page";//获取设备列表






export const GET_ALL_PROJECT = BASE_URL + "projectList/getAllProject";//获取项目接口

export const ADD_PROJECT = BASE_URL + "projectList/addProject";//添加项目

export const UPDATE_PROJECT = BASE_URL + "projectList/updateProject";//编辑项目

export const DELETE_PROJECT = BASE_URL + "projectList/deleteProject";//删除项目

export const GET_APP_BY_SYSTEM = BASE_URL + "app/getAppList";//通过App系统获取App列表

export const UPLOAD_INSTALL_PACKAGE = BASE_URL + "upload/uploadAppPackage";//上传安装包

export const GET_PROJECT_INFO = BASE_URL + "app/getProjectInfo";//获取项目信息

export const ADD_APP_VERSION = BASE_URL + "app/addApp";//版本发布

export const GET_TEST_APP = BASE_URL + "app/getTestApp";//获取测试App

export const ADD_TEST_APP = BASE_URL + "testApp/addTestApp";//测试App版本发布

export const UPLOAD_ICON = BASE_URL + "upload/uploadIcon";//上传图标

export const GET_DOWNLOAD_STATISTICS = BASE_URL + "appDownloadStatistics/getDownloadStatistics";//获取下载统计数据

export const GET_LOGIN_STATISTICS_CHART = BASE_URL + "appLoginStatistics/getLoginStatisticsChart";//获取登录统计图表数据

export const GET_LOGIN_STATISTICS_TABLE = BASE_URL + "appLoginStatistics/getLoginStatisticsTable";//获取登录统计报表数据








