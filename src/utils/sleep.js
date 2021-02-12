const sleep = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout * 1000));

export default sleep;
