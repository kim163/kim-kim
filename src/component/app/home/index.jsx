import './home.less';
import React , { Component } from 'react';
import { Carousel, Timeline   } from 'antd';
import { connect } from 'react-redux';
import { getCurrent } from '../index/action'
import banner1 from '../../../images/carousel_1.png';
import banner2 from '../../../images/carousel_2.jpg';
import banner3 from '../../../images/carousel_3.jpg';
import banner4 from '../../../images/carousel_4.jpg';

const data = [
    '圣诞狂欢，好礼连连！--12/1',
    '你敢充，我就敢送！--11/20',
    '消费送积分，积分没啥用！--11/1',
    '宠物小精灵上线啦！--10/15',
    '你亏损，我赔钱！--10/1',
];

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="home-container clearfix">
                <div className="home-info-list">
                    <div className="info-list-title"><h2>活动时间轴</h2></div>
                    <Timeline>
                        <Timeline.Item color="green">圣诞狂欢，好礼连连！--12/1</Timeline.Item>
                        <Timeline.Item color="green">你敢充，我就敢送！--11/20</Timeline.Item>
                        <Timeline.Item color="red">
                            <p>消费送积分，积分没啥用！--11/1</p>
                            <p>宠物小精灵上线啦！--11/1</p>
                            <p>你亏损，我赔钱！--11/1</p>
                        </Timeline.Item>
                        <Timeline.Item>叫上你的小伙伴，一起来娱乐啦~ --10/1</Timeline.Item>
                    </Timeline>
                </div>
                <div className="home-right">
                    <Carousel autoplay="true">
                        <div><a href="bc"><img src={banner1} /></a></div>
                        <div><a href="bc"><img src={banner2} /></a></div>
                        <div><a href="bc"><img src={banner3} /></a></div>
                        <div><a href="bc"><img src={banner4} /></a></div>
                    </Carousel>
                </div>
            </div>
        )
    }
}