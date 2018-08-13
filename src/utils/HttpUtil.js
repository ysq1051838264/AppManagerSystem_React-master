/**
 * 网络请求组件
 * Created by panyz on 2018/6/7.
 */
import 'es6-promise';
import 'whatwg-fetch';

/**
 * 网络请求处理
 * @param url
 * @param method
 * @param body
 */
export default function httpRequest(url, method, p) {
    method = method.toUpperCase();
    var body = JSON.stringify(p);

    if (method === 'GET') {
        body = undefined;
    }

    var token = localStorage.getItem("token");

    console.log("阳书权请求参数：", body);

    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',

            'Accept': 'application/json;charset=utf-8'
        },
        body: body
    })
        .then(
            (res) => {
                if (res.status >= 200 && res.status < 400) {
                    return res;
                }else if(res.status =100010){
                    console.log("登录失效，重新登录：");
                }else {
                    return Promise.reject('请求失败');
                }
            }
        )
};

/**
 * 请求参数处理
 * @return {string}
 */
function addParams(map) {
    let params = new StringBuffer();
    if (map.size !== 0) {
        for (let [key, value] of map) {
            params.append(key).append('=').append(value).append("&");
        }
    }
    return params.toString();

}

function StringBuffer() {
    this.__strings__ = [];
}

StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
    return this;
};

StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
};

export const doGet = (url) => httpRequest(url, "GET");
export const doPost = (url, body) => httpRequest(url, "POST", body);
export const requestParams = (map) => addParams(map);

