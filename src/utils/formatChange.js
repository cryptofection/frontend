const formatChange = (change) => {
  const [number, floatPoint = '00'] = Math.abs(change).toString().split('.');
  return `${
    change < 0 ? '-' : change > 0 ? '+' : ''
  }${number}.${floatPoint.slice(0, 2)}%`;
};

export default formatChange;
