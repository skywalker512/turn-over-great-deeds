import React, { CSSProperties, useRef, useState } from 'react';
import useRouter from 'use-react-router';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-px2vw';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';
import cardDatas, { cardsSize } from '../data/card';
import sortCard from '../utils/sortCard';
import CardBackPng from '../assets/image/CardBack.png';
import CardFrontPng from '../assets/image/CardFront.png';
import BaseMask from './BaseMask';
import SectionMask from './SectionMask';

interface ICardProps {
  img: string;
  content: string;
  height: string;
  width: string;
  isShow: boolean;
  isHide: boolean;
  onClick: () => void;
  marginRight: string;
  marginBottom: string;
  imageHeight: string;
  imageWidth: string;
  fontSize: string;
}

// eslint-disable-next-line no-unexpected-multiline
const CardContent = styled(animated.div)`
  background-size: cover;
  position: absolute;
  border-radius: 5px;
`;
const CardBackContent = styled(CardContent)`
  background-image: url(${CardBackPng});
`;
const CardFrontContent = styled(CardContent)`
  background-image: url(${CardFrontPng});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    background-size: cover;
    border-radius: 5px;
  }
  span {
    margin-top: 16px;
    transform-origin: top;
    text-align: center;
  }
`;
const CardWrapper = styled(animated.div)`
  position: relative;
`;

const Card: React.FC<ICardProps> = ({
  img,
  content,
  height,
  width,
  isShow = false,
  isHide = false,
  onClick,
  marginRight,
  marginBottom,
  imageHeight,
  imageWidth,
  fontSize,
}) => {
  const { transform, opacity } = useSpring({
    opacity: isShow ? 1 : 0,
    transform: `perspective(600px) rotateY(${isShow ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const props = useSpring({ opacity: !isHide ? 1 : 0, delay: 500 });
  // 浏览器限制 12px 下面的中文字不能用，所以使用 scale 配合
  // white-space: nowrap;
  // transform-origin: top;
  // 达到更小字体
  // 但是他又没有改变元素的大小但是 zoom 又正好改变了元素的大小又不会小于 12px
  let fontSizes: CSSProperties;
  if (parseFloat(fontSize) < 3) {
    const transforms = `scale(${parseFloat(fontSize) / 3.2})`;
    fontSizes = {
      zoom: `${parseFloat(fontSize) / 3.2}`,
      transform: transforms,
      WebkitTransform: transforms,
      fontSize: '12px',
    };
  } else {
    fontSizes = {
      fontSize,
    };
  }
  return (
    <CardWrapper
      style={{
        height,
        width,
        marginRight,
        marginBottom,
        ...props,
      }}
      onClick={onClick}
    >
      <CardBackContent
        style={{
          opacity: opacity.interpolate((o: any) => 1 - Number(o)),
          transform,
          height,
          width,
        }}
      />
      <CardFrontContent
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
          height,
          width,
        }}
      >
        <div
          style={{
            backgroundImage: `url('${img}')`,
            height: imageHeight,
            width: imageWidth,
          }}
        />
        <span style={fontSizes}>{content}</span>
      </CardFrontContent>
    </CardWrapper>
  );
};

const SectionCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  justify-content: center;
  align-content: center;
`;

const SectionCard: React.FC = () => {
  const {
    match: { params },
  } = useRouter<ISectionRouterProp>();
  const { step } = params;
  const [stepNum] = useState(Number(step));
  const [cardData, setCardData] = useState(
    sortCard(cardDatas[stepNum - 1]).map((item, index) => ({
      ...item,
      isShow: false,
      isHide: false,
      id: index,
    })),
  );
  const [cardSize] = useState(cardsSize[stepNum - 1]);
  const [showMask, setShowMask] = useState(false);
  const setTimeoutRef = useRef<number>();
  const handelCardClick = (index: number) => {
    if (cardData[index].isHide) return; // 如果隐藏了就不执行了
    // 先查询上一次的 -> 是否已经有两张已经翻开了
    const temp = cardData.filter(item => item.isShow && !item.isHide);
    // 如果有两张已经翻开 只能将已经翻开的返回去 而不能新翻开牌
    if (temp.length !== 2 || cardData[index].isShow) {
      // 将牌的状态调转
      cardData[index].isShow = !cardData[index].isShow;
      // 设定新的 state
      setCardData([...cardData]);
      // 查找调整过后翻开的的牌
      const isShowCard = cardData.filter(item => item.isShow && !item.isHide);
      // 如果当前是新翻开的牌的情况 并且牌的数量为 2 检查是否满足消灭的条件
      if (cardData[index].isShow && isShowCard.length === 2) {
        if (isShowCard[0].content === isShowCard[1].content) {
          // 将牌的状态调转
          cardData[isShowCard[0].id].isHide = true;
          cardData[isShowCard[1].id].isHide = true;
          // 设定新的 state
          setCardData([...cardData]);
          // 在这种情况下查看是否还有牌没有隐藏
          // 如果没有那么就触发时间暂停
          if (!cardData.some(item => !item.isHide)) {
            const cardFinished = new Event('cardFinished');
            window.dispatchEvent(cardFinished);
            setShowMask(true);
          }
        } else {
          // 设定新的 state
          clearTimeout(setTimeoutRef.current);
          setTimeoutRef.current = setTimeout(() => {
            cardData[isShowCard[0].id].isShow = false;
            cardData[isShowCard[1].id].isShow = false;
            setCardData([...cardData]);
          }, 500);
        }
      }
    }
  };
  return (
    <>
      <SectionCardWrapper>
        {cardData.map((item, index) => (
          <Card
            height={cardSize.height}
            width={cardSize.width}
            marginRight={cardSize.marginRight}
            marginBottom={cardSize.marginBottom}
            imageHeight={cardSize.imageHeight}
            imageWidth={cardSize.imageWidth}
            fontSize={cardSize.fontSize}
            img={item.img}
            content={item.content}
            isShow={item.isShow}
            isHide={item.isHide}
            onClick={() => handelCardClick(index)}
            key={item.id}
          />
        ))}
      </SectionCardWrapper>
      {showMask && (
        <BaseMask delay={600}>
          <SectionMask />
        </BaseMask>
      )}
    </>
  );
};
export default SectionCard;
