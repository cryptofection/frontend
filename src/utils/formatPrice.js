const formatPrice = (price) => {
  const [number, floatPoint = '00'] = price.toString().split('.');
  if (number === '0') {
    return `$0.${floatPoint.slice(0, 6)}`;
  }
  return `$${number
    .split('')
    .reverse()
    .join('')
    .match(/\d{1,3}/g)
    .join(',')
    .split('')
    .reverse()
    .join('')}.${floatPoint.slice(0, 2).padEnd(2, '0')}`;
};

export default formatPrice;
