/* eslint-disable global-require */

import convertPxToVw from '../utils/convertPxToVw';

export interface CardData {
  content: string;
  img: any;
  describe: string;
}

export default [
  [
    {
      content: '开国大典',
      img: require('../assets/image/card/1A.jpg'),
      describe:
        '1949年10月1日下午3时，首都北京30万军民在天安门广场隆重举行开国大典。毛泽东庄严宣告：“中华人民共和国中央人民政府今天成立了！”',
    },
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1B.jpg'),
      describe:
        '为纪念中国近现代史上的革命烈士而修建的纪念碑。正面碑心镌刻着毛泽东同志题写的“人民英雄永垂不朽”八个金箔大字。',
    },
  ],
  [
    {
      content: '中国第一颗原子弹爆炸成功',
      img: require('../assets/image/card/2A.jpg'),
      describe:
        '1964年10月16日，我国自行制造的第一颗原子弹于在新疆罗布泊爆炸成功，有力地打破超级大国核垄断和核讹诈，提高了中国国际地位。1967年6月17日，第一颗氢弹成功爆炸。',
    },
    {
      content: '南京长江大桥',
      img: require('../assets/image/card/2B.jpg'),
      describe:
        '长江上第一座由中国自行设计和建造的双层式铁路、公路两用桥梁，在中国桥梁史乃至世界桥梁史上具有重要意义，是20世纪60年代中国经济建设的重要成就、中国桥梁建设的重要里程碑，具有极大的经济意义、政治意义和战略意义，有“争气桥”之称。',
    },
    {
      content: '恢复联合国合法席位',
      img: require('../assets/image/card/2C.jpg'),
      describe:
        '1971年10月25日，中国恢复联合国合法席位，并成为联合国常任理事国之一，这是中国外交史上具有历史意义的伟大胜利。中国国际地位日益提高，在维护世界和平、促进世界发展过程中发挥重要作用。',
    },
  ],
  [
    {
      content: '杂交水稻',
      img: require('../assets/image/card/3A.jpg'),
      describe:
        '“世界杂交水稻之父”袁隆平培养的水稻被称为“东方魔稻”，不仅解决了中国人吃饭问题，也为世界粮食安全作出重要贡献。1973年，我国在世界上首次培育成功强优势的籼型杂交水稻。',
    },
    {
      content: '香港回归祖国',
      img: require('../assets/image/card/3B.jpg'),
      describe:
        '1997年7月1日，经历百年沧桑的香港回到祖国怀抱；1999年12月20日，澳门也回归祖国，平稳过渡、顺利交接，有力推进祖国和平统一大业进程。',
    },
    {
      content: '“神舟”系列飞船',
      img: require('../assets/image/card/3C.jpg'),
      describe:
        '神舟飞船是中国自行研制，具有完全自主知识产权，达到或优于国际第三代载人飞船技术的飞船。1999年11月20，“神舟”一号发射成功；2003年10月15日，我国进行首次载人航天飞行取得圆满成功，中华民族探索太空的千年梦想实现了！',
    },
    {
      content: '中国加入WTO',
      img: require('../assets/image/card/3D.jpg'),
      describe:
        '2001年12月11日，我国正式加入世界贸易组织，成为其第143个成员。这是我国改革开放和现代化建设的历史必然，为推进全方位、多层次、宽领域的对外开放提供重要契机，对我国经济发展产生深远影响。',
    },
  ],
  [
    {
      content: '青藏铁路',
      img: require('../assets/image/card/4A.jpg'),
      describe:
        '世界上海拔最高和线路最长的高原铁路，被誉为天路。与南水北调、西气东输、西电东送并称为“中国新世纪四大工程”。青藏铁路使西藏自治区与祖国内地的联系更加紧密。',
    },
    {
      content: '2008北京奥运会',
      img: require('../assets/image/card/4B.jpg'),
      describe:
        '2008年8月8日晚，北京奥运会开幕式上，著名篮球运动员姚明及汶川抗震小英雄林浩引领中国代表团步入会场，全场欢声雷动。北京奥运会的成功举办，体现了中国政府高超的组织能力，彰显了中国体制优势。',
    },
    {
      content: '长江三峡水利枢纽工程',
      img: require('../assets/image/card/4C.jpg'),
      describe:
        '三峡工程，世界上规模最大的水电站，也是中国有史以来建设最大型的工程项目，迄今世界上综合效益最大的水利枢纽，在防洪、发电、航运等方面发挥巨大效益。',
    },
    {
      content: '天河一号',
      img: require('../assets/image/card/4D.jpg'),
      describe:
        '中国首台千万亿次超级计算机，使用由中国自行研发的“龙”芯片，具有高性能、高能效、高安全和易使用等显著特点，综合技术水平进入世界前列。2010年投入使用后，在航天、天气预报、气候预报和海洋环境模仿方面均取得显著成就。',
    },
    {
      content: '辽宁号航空母舰',
      img: require('../assets/image/card/4E.jpg'),
      describe:
        '中国人民解放军海军隶下的一艘可以搭载固定翼飞机的航空母舰，也是中国第一艘服役的航空母舰。2012年9月25日，正式更名辽宁号，交付予中国人民解放军海军。',
    },
    {
      content: '“一带一路”国际合作高峰论坛',
      img: require('../assets/image/card/4F.jpg'),
      describe:
        '2013年9月、10月，习近平主席先后提出共建“丝绸之路经济带”和“21世纪海上丝绸之路”的重大倡议。六年实践证明，共建“一带一路”，推进了经济全球化健康发展，为全球治理体系变革提供了中国方案，成为推动构建人类命运共同体的重要实践平台。',
    },
  ],
  [
    {
      content: '北斗导航定位卫星',
      img: require('../assets/image/card/5A.jpg'),
      describe:
        '中国自行研制的全球卫星导航系统，继美国全球定位系统（GPS）、俄罗斯格洛纳斯卫星导航系统（GLONASS）之后第三个成熟的卫星导航系统。2014年11月，中国北斗卫星获联合国正式认可可媲美GPS。青蒿素的发现。中国抗疟新药的研究源于1967年成立的五二三项目。',
    },
    {
      content: '青蒿素的发现',
      img: require('../assets/image/card/5B.jpg'),
      describe:
        '中国抗疟新药的研究源于1967年成立的五二三项目。屠呦呦带领团队多年探索发现青蒿素，可有效降低疟疾患者死亡率，2015年10月5日，荣获诺贝尔生理学或医学奖，成为中国大陆第一个获得自然科学领域诺贝尔奖的科学家。',
    },
    {
      content: '中国天眼',
      img: require('../assets/image/card/5C.jpg'),
      describe:
        '世界上最大口径射电望远镜。由六根钢索拉起馈源舱，将重达30吨的仓体在高空精准定位，误差不超过十毫米。工程难度，世界上前所未有。具有中国独立自主知识产权的FAST，是世界上已经建造完成的口径最大、最具威力的单天线射电望远镜，其设计综合体现了我国高技术创新能力。',
    },
    {
      content: '2016中国杭州G20峰会',
      img: require('../assets/image/card/5D.png'),
      describe:
        '2016年9月4日-5日在中国杭州召开的G20峰会，以“构建创新、活力、联动、包容的世界经济”为主题。G20峰会为中国参与世界治理、贡献中国智慧提供了非常好的契机和平台。',
    },
    {
      content: '中国C919大型客机',
      img: require('../assets/image/card/5E.jpg'),
      describe:
        'COMACC919，中国首款按照最新国际适航标准，具有自主知识产权的干线民用飞机。2017年5月5日成功首飞。让中国的大飞机飞上蓝天，是国家的意志，人民的意志。',
    },
    {
      content: '港珠澳大桥',
      img: require('../assets/image/card/5F.jpg'),
      describe:
        '跨越伶仃洋，东接香港，西接珠海和澳门，是“一国两制”框架下粤港澳三地首次合作建设的大型跨海交通工程，路线总长55公里，也是世界上最长的跨海大桥工程。',
    },
    {
      content: '三江源国家公园',
      img: require('../assets/image/card/5G.jpg'),
      describe:
        '三江源地区地处青藏高原腹地，是长江、黄河、澜沧江三大河流的发源地。2018年1月，国家发改委明确2020年正式设立三江源国家公园。三江源国家公园是全国首个国家公园体制试点，中国面积最大的国家公园。',
    },
    {
      content: '5G商用牌照发放',
      img: require('../assets/image/card/5H.png'),
      describe:
        '2019年6月6日，工信部向中国电信、中国移动、中国联通、中国广电发放5G商用牌照，中国正式进入5G商用元年。这也是全球5G发展的标志性事件。',
    },
  ],
] as CardData[][];

// 单位 px
export const cardsSize: {
  width: string;
  height: string;
  marginRight: string;
  marginBottom: string;
  imageHeight: string;
  imageWidth: string;
  fontSize: string;
}[] = convertPxToVw([
  {
    width: 282,
    height: 359,
    marginRight: 17,
    marginBottom: 18,
    imageHeight: 232,
    imageWidth: 245,
    fontSize: 24,
  },
  {
    width: 235,
    height: 300,
    marginRight: 36,
    marginBottom: 36,
    imageHeight: 205,
    imageWidth: 195,
    fontSize: 22,
  },
  {
    width: 195,
    height: 250,
    marginRight: 12,
    marginBottom: 13,
    imageHeight: 160,
    imageWidth: 165,
    fontSize: 20,
  },
  {
    width: 166,
    height: 212,
    marginRight: 14.5,
    marginBottom: 14.5,
    imageHeight: 137,
    imageWidth: 145,
    fontSize: 16,
  },
  {
    width: 149,
    height: 190,
    marginRight: 14,
    marginBottom: 15,
    imageHeight: 125,
    imageWidth: 131,
    fontSize: 14,
  },
]);
