import React, { useState } from 'react';
import styled from 'styled-px2vw';
import RankListAvatarPng from '../assets/image/RankListAvatar.png';
import RankListMyPng from '../assets/image/RankListMy.png';
import RankListRankPng from '../assets/image/RankListRank.png';
import RankListCardPng from '../assets/image/RankListCard.png';
import APng from '../assets/image/1.png';
import BPng from '../assets/image/2.png';
import CPng from '../assets/image/3.png';
import { Theme } from '../styled';
import BaseBack from '../component/BaseBack';
import { Back } from './Choose';
import { usePassAll, useRank } from '../utils/useFetch';
import convertFloatToInt from '../utils/convertFloatToInt';

const Wrapper = styled.div`
  position: absolute;
  background-color: ${Theme.color.backgroundColor};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.div`
  background-size: cover;
  height: 169px;
  width: 196px;
  background-image: url("${RankListAvatarPng}");
  margin: 0 auto 25px auto;
  position: relative;
  & > div {
    position: absolute;
    top: 15px;
    left: 40px;
    height: 131px;
    width: 131px;
    border-radius: 100%;
    background-size: cover;
  }
`;

export const RankListMyIcon = styled.div`
  background-image: url("${RankListMyPng}");
  height: 31px;
  width: 33px;
  background-size: cover;
  margin-right: 14px;
`;
export const RankListRankIcon = styled.div`
  background-image: url("${RankListRankPng}");
  height: 32px;
  width: 48px;
  background-size: cover;
  margin-right: 14px;
  margin-left: 100px;
`;
const Info = styled.div`
  color: #f46d36;
  font-size: 32px;
  font-family: LeZhen, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  background-size: cover;
  background-image: url("${RankListCardPng}");
  height: 882px;
  width: 678px;
  margin: 11px auto 0 auto;
`;

const Title = styled.div`
  font-size: 52px;
  color: #7c3d3f;
  padding-top: 190px;
  text-align: center;
  font-family: LeZhen, sans-serif;
`;

const ItemWrapper = styled.div`
  width: 90%;
  display: flex;
  height: 61px;
  margin: 36px auto 0 auto;
  justify-content: space-between;
  span {
    height: 61px;
    line-height: 61px;
    font-size: 32px;
    color: #7c3d3f;
    text-align: center;
  }
  & > span:nth-child(1) {
    width: 69px;
    font-family: LeZhen, sans-serif;
  }
  & > span:nth-child(2) {
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > span:nth-child(3) {
    font-family: LeZhen, sans-serif;
  }
`;

const CommonIcon = styled.div`
  background-size: cover;
  height: 61px;
  width: 69px;
`;

const SwiperWrapper = styled.div`
  width: 560px;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  height: 600px;
  & > div {
    margin-left: -16px;
  }
`;

interface data {
  RedId?: string;
  NickName: string;
  Total: number;
  index?: number;
}

const Item: React.FC<data> = ({ NickName, Total, index = 0 }) => {
  const image = [APng, BPng, CPng];
  return (
    <ItemWrapper>
      {index < 3 && (
        <CommonIcon
          style={{
            backgroundImage: `url(${image[index]})`,
          }}
        />
      )}
      {index > 2 && <span className="list">{index + 1}</span>}
      <span>{NickName}</span>
      <span>{convertFloatToInt(Total)}s</span>
    </ItemWrapper>
  );
};

const RankListPage: React.FC = () => {
  let result = { rank: -1, totalTime: -1 };
  if (localStorage.getItem('rank')) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = usePassAll();
    result = data;
  }
  const [avatar] = useState(
    (
      localStorage.getItem('headImgUrl') ||
      `https://cdn.v2ex.com/gravatar/${localStorage.getItem(
        'redId',
      )}?s=128&d=retro`
    ).replace(/^http:\/\//i, 'https://'),
  );
  const { data: rq } = useRank();
  return (
    <Wrapper>
      <Back>
        <BaseBack />
      </Back>
      <Avatar>
        <div
          style={{
            backgroundImage: `url("${avatar}")`,
          }}
        />
      </Avatar>
      {result.totalTime > 0 ? (
        <Info>
          <RankListMyIcon />
          <span>我的: {convertFloatToInt(result.totalTime)}s</span>
          <RankListRankIcon />
          <span>排名: {result.rank}</span>
        </Info>
      ) : (
        ''
      )}
      <Card>
        <Title>排行榜</Title>
        <SwiperWrapper>
          <div>
            {rq.map((item, index) => (
              <Item
                NickName={item.NickName}
                Total={item.Total}
                index={index}
                key={item.RedId}
              />
            ))}
          </div>
        </SwiperWrapper>
      </Card>
    </Wrapper>
  );
};

export default RankListPage;
