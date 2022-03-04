let second = 0;
const timeId = setInterval(() => {
  second++;
  console.log(second);
  if (second > 15) {
    clearInterval(timeId);
  }
}, 5000);
