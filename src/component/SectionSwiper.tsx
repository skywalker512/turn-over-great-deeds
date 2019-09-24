import React from 'react';
import useRouter from 'use-react-router';
import Swiper from 'react-id-swiper';
import { SwiperOptions } from 'swiper';
import styled from 'styled-px2vw';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';
import CardDatas from '../data/card';

const Wrapper = styled.div`
  .swiper-pagination {
    top: 325px !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #fe887f !important;
  }
  .swiper-pagination-bullet {
    background-color: #fed5a5;
    opacity: 1;
  }
`;

const Image = styled.div`
  background-size: cover;
  height: 325px;
  width: 485px;
  margin: 0 auto;
  border-radius: 10px;
`;

const Content = styled.div`
  margin: 50px 50px 0 50px;
  color: #7c3d3f;
  text-align: center;
  .title {
    font-size: 36px;
    margin-bottom: 22px;
  }
  .describe {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 53px;
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
    spaceBetween: -30,
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
              <div className="describe">{item.describe}</div>
            </Content>
          </div>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default SectionSwiper;
