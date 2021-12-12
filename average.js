
function average(numbers) {
  const numbers2 = numbers.filter(value => !Number.isNaN(value));
  return numbers2.reduce((p, c)=> p + c, 0) / numbers2.length;
}

module.exports = {average};
