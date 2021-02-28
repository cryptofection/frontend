const countWords = (text) => {
  const output = {};

  const tokens = text.split` `;
  for (const token of tokens) {
    if (output[token] === undefined) {
      output[token] = 1;
    } else {
      output[token] += 1;
    }
  }
  return Object.keys(output).map((item) => ({
    text: item,
    value: output[item],
  })).sort((a, b) => b.value - a.value).slice(0, 30);
};

export default countWords;
