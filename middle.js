const middle = function(array) {
  const middleArray = [];
  if (array.length === 1 || array.length === 2) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[Math.floor(array.length / 2)]);
  } else {
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[array.length / 2]);
  }
  return middleArray;
};

module.exports = middle;


