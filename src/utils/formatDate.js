const formatDate = (date) => {
  const d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();

  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export default formatDate;
