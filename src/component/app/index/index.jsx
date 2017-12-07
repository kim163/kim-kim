import './poss.less';
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel, notification } from 'antd';
import { getCurrent } from './action';

import logoImg from '../../../images/logo.png';
import Loading from '../../public/loading/index';
import computer from '../../../images/computer.png';
import qmark from  '../../../images/qmark.png';
import chat from  '../../../images/chat.png';

@connect(state =>{
    return {
        current:state.possRs.current
    }
},dispatch =>({
    setCurrent:(cur) => dispatch(getCurrent(cur))
}))
export default class Enroll extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.setCurrent(0);
    }
    clickHandle(){
        notification.open({
            message: '亲爱的 你好呀！',
            description: '这个功能还没完成，攻城狮正在努力加班中...',
            duration: 5.2,
        });
    }
    render(){
        return (
        <div className="index-container">
            <div className="header-top">
                <div className="top-main clearfix">
                    <div className="top-announcement">
                        <Carousel vertical dots="false" autoplay="true">
                            <div><h3>公告: 欢迎来到xx娱乐，祝您游戏愉快！赚大钱~</h3></div>
                            <div><h3>公告: 大吉大利！今晚吃鸡！</h3></div>
                        </Carousel>
                    </div>
                    <div className="top-btn-group">
                        <a href="bc" className="top-btn">
                            <img src={computer} />
                            客户端下载
                        </a>
                        <a href="#" className="top-btn">
                            <img src={qmark} />
                            在线帮助
                        </a>
                        <a onClick={this.clickHandle.bind(this)} className="top-btn">
                            <img src={chat} />
                            在线客服
                        </a>
                    </div>
                </div>
            </div>
            <div className="header-bottom clearfix">
                <div className="bottom-main">
                    <div className="logo-box" >
                        <a href="#" className='logoImg'>
                            <img src={logoImg} alt=""/>
                        </a>
                    </div>
                    <ul className="entry-list">
                        <li className="entry-info">
                            <a href="#">我的账户</a>
                        </li>
                        <li className="entry-info">
                            <a href="#">银行充提</a>
                        </li>
                        <li className="entry-info">
                            <a href="#">投注记录</a>
                        </li>
                        <li className="entry-info">
                            <a href="#">账户报表</a>
                        </li>
                        <li className="entry-info">
                            <a href="#">代理管理</a>
                        </li>
                        <li className="entry-info">
                            <a href="#">优惠活动</a>
                        </li>
                        <li className="entry-info">
                            <a href="#">企业文化</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-box clearfix">
                <div className="children-box">
                    {this.props.children}
                </div>
                <Loading />
            </div>
        </div>
        )
    }
}