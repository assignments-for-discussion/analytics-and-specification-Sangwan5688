function filterOutliers(numbers) {
  if(numbers.length < 4)
    return numbers;
  
  var values = numbers.slice().sort((a, b) => a - b);

  var firstQuartile = values[Math.floor(values.length / 4)];
  var thirdQuartile = values[Math.ceil(values.length * (3 / 4)) - 1];
  
  var interQuartileRange = thirdQuartile - firstQuartile;

  var maxValue = thirdQuartile + interQuartileRange * 1.5;
  var minValue = firstQuartile - interQuartileRange * 1.5;

  return values.filter((x) => x <= maxValue && x >= minValue);
}

function average(numbers) {
  const nonNanNumbers = numbers.filter(value => !Number.isNaN(value));
  const filteredNonNanNumbers = filterOutliers(nonNanNumbers);
  return filteredNonNanNumbers.reduce((p, c)=> p + c, 0) / filteredNonNanNumbers.length;
}

module.exports = {average};
