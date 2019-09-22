import { CardData } from '../data/card';

// https://blog.oldj.net/2017/01/23/shuffle-an-array-in-javascript/
export default (card: CardData[]) => {
  const sortCard = [...card, ...card];
  let i = sortCard.length;
  while (i) {
    // eslint-disable-next-line no-plusplus
    const j = Math.floor(Math.random() * i--);
    [sortCard[j], sortCard[i]] = [sortCard[i], sortCard[j]];
  }
  return sortCard;
};
