
module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => {
    element.forEach(e => {
      if (e == "^^") {
        count++;
      }
    });
  })
  return count;
};
