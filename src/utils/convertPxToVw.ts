const convertPxToVw = (obj: any): any[] => {
  Object.keys(obj).forEach((key: any) => {
    // eslint-disable-next-line no-unused-expressions
    typeof obj[key] === 'object' && convertPxToVw(obj[key]);
    // eslint-disable-next-line no-restricted-globals,no-param-reassign
    if (isNaN(Number(key))) obj[key] = `${(obj[key] / 750) * 100}vw`;
  });
  return obj;
};

export default convertPxToVw;
