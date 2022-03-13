const convertDate = (isoDate) => {
  const dt = new Date(isoDate);
  return dt.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // const time = dt.toLocaleTimeString([], {
  //   hour12: true,
  //   hour: "2-digit",
  //   minute: "numeric",
  // });

  // return `${date} ${time}`;
};

export default convertDate;
