/**
 * Created by panyz on 2018/7/2.
 */
function getMonthDate() {
    let date=new Date;
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    month =(month<10 ? "0"+month:month);
    return (year.toString()+"-"+month.toString());
}

function formatDateTime(inputTime) {
    var date = new Date(inputTime*1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};


export const getCurrentYearMonth = () => getMonthDate();
export const getTimes = (time) => formatDateTime(time);