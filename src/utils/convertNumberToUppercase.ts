const zh = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
// 只处理个位
export default (n: number | string): string => zh[Number(String(n))];
