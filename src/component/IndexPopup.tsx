import React from 'react';
import { SwiperOptions } from 'swiper';
import Swiper from 'react-id-swiper';
import styled from 'styled-px2vw';
import IndexPopupPng from '../assets/image/IndexPopup.png';

const Wrapper = styled.div`
  background-image: url("${IndexPopupPng}");
  background-size: cover;
  height: 775px;
  width: 666px;
  margin-top: -60px;
  position: relative;
`;

const Content = styled.div`
  width: 549px;
  & > div {
    padding-top: 300px;
  }
  margin: 0 auto;
  position: relative;
  p {
    width: 472px;
    margin: 0 auto 30px auto;
    font-size: 24px;
    line-height: 28px;
  }
  .swiper-pagination {
    position: absolute;
    left: 0;
    right: 0;
    top: 210px;
  }
  .swiper-pagination-bullet-active {
    background: transparent;
    color: #f46d36 !important;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    background: transparent;
    width: auto;
    font-size: 40px;
    margin: 0 32px !important;
    color: #7c3d3f;
    font-family: LeZhen, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const IndexPopup: React.FC = () => {
  const title = ['活动规则', '活动背景'];
  const config: SwiperOptions = {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        console.log(className);
        return `<span class="${className}">${title[index]}</span>`;
      },
    },
  };
  return (
    <Wrapper>
      <Content>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Swiper {...config}>
          <div>
            <p>1.玩家进入游戏后，可选择关卡参与挑战</p>
            <p>
              2.游戏结束后，玩家可以根据通关时间参与排名，排名靠前的玩家可获得奖品。
            </p>
            <p>
              3.每关通关成绩按照关卡难度进行汇总：第五关*0.8+第四关*1.0+第三关*1.1+第二关*1.2+第一关*1.3
            </p>
            <p>
              4.在活动时间截止前，排行榜前30名玩家，将可获得精美奖品。奖品发布时间将在活动结束后通知，请关注重邮小帮手抢先了解获奖情况
            </p>
          </div>
          <div>
            <p style={{ lineHeight: '5.7vw' }}>
              2019年是新中国成立70周年。
              70年砥砺奋进，祖国发生了翻天覆地变化，取得辉煌成就，
              在中华民族历史甚至是世界历史上，写下了感天动地的奋斗史诗。
              重庆邮电大学红岩网校工作站特开发小游戏“伟大成就翻翻乐”，
              与广大青年学子一起回顾新中国成立70年来取得的历史性成就，
              用青春为祖国点赞，共同祝愿祖国繁荣昌盛！
            </p>
          </div>
        </Swiper>
      </Content>
    </Wrapper>
  );
};

export default IndexPopup;
