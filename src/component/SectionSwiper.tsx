import React from 'react';
import useRouter from 'use-react-router';
import Swiper from 'react-id-swiper';
import { SwiperOptions } from 'swiper';
import styled from 'styled-px2vw';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';
import CardDatas from '../data/card';

const Wrapper = styled.div`
  .swiper-pagination {
    top: 305px !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #fe887f !important;
  }
  .swiper-pagination-bullet {
    background-color: #fed5a5;
    opacity: 1;
    width: 10px;
    height: 10px;
  }
`;

const Image = styled.div`
  background-size: cover;
  height: 315px;
  width: 560px;
  margin: 0 auto;
`;

const Content = styled.div`
  margin: 40px 20px 0 20px;
  color: #7c3d3f;
  .title {
    font-size: 36px;
    margin-bottom: 12px;
    text-align: center;
  }
  .describe {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    line-height: 32px;
  }
`;

const SectionSwiper: React.FC = () => {
  const {
    match: { params },
  } = useRouter<ISectionRouterProp>();
  const { step } = params;
  const stepNum = Number(step);
  const cardData = CardDatas[stepNum - 1];
  const config: SwiperOptions = {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return (
    <Wrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Swiper {...config}>
        {cardData.map(item => (
          <div key={item.content}>
            <Image
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            />
            <Content>
              <div className="title">{item.content}</div>
              <div className="describe">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {item.describe}
              </div>
            </Content>
          </div>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default SectionSwiper;
