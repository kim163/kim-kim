import './betting.less';
import { notification } from 'antd';
import Util from '../ajax';
import React , { Component } from 'react';

export default class Betting extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ''
        };
    }
    componentWillMount(){
        const params = {
            url:'http://f.apiplus.cn/bj11x5.json',
            type:'jsonp'
        }
        Util.ajax(params, (data) => {
            if(data){
                this.setState({data: data.data})
            }else{
                notification.open({
                    message: '啊哦',
                    description: '数据请求出错了~',
                    duration: 5.2,
                });
            }
        })
    }
    add0(m){return m<10?'0'+m:m }

    format(date){
        var time = new Date(date);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '' + this.add0(m) + '' + this.add0(d);
    }
    render(){
        const {data} = this.state
        let nowPeriod = ''
        let prevPeriod = ''
        let openNum = ''
        let openBallList = ''
        let hisList = ''
        if(data.length > 0){
            nowPeriod = data[0].expect
            prevPeriod = data[1].expect
            openNum = data[1].opencode.split(',')
            openBallList = openNum.map((item,index) => (
                <span className="ball-info">{item}</span>
            ))
            const hisArr = data.splice(1,data.length-1)
            hisList = hisArr.map((item,index) => (
                <li className="list-info">
                    <div className="text-left">{this.format(item.opentimestamp * 1000)}</div>
                    <div className="text-right">
                        {item.opencode.split(',').map((info,index) => (
                            <span>{info}</span>
                        ))}
                    </div>
                </li>
            ))
        }

        return (
            <div className="bc-container">
                <div className="bc-header  clearfix">
                    <div className="bc-time">
                        <div className="bc-title">第<span className="text-hot">{nowPeriod}</span>期 离截止时间</div>
                        <div className="bc-time-count-down">00:18:58</div>
                    </div>
                    <div className="line"></div>
                    <div className="bc-open-num">
                        <div className="bc-title">11选5  <span className="text-hot">{prevPeriod}</span>期号码</div>
                        <div className="bc-open-ball">
                            {openBallList ? openBallList
                            :  <div>
                                <span className="ball-info">等</span>
                                <span className="ball-info">待</span>
                                <span className="ball-info">开</span>
                                <span className="ball-info">奖</span>
                                </div>}
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="bc-open-his">
                        <div className="bc-his-title clearfix">
                            <div className="text-left">期次</div>
                            <div className="text-right">开奖号码</div>
                        </div>
                        <ul className="open-his-list">
                            {hisList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}