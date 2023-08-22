const calcAverage = (a, b, c) => (a + b + c) / 3;

//data 1
const scoreSeals = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreSeals, scoreKoalas);

//data 2
const scoreSeals1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);
console.log(scoreSeals1, scoreKoalas1);

const checkWinner = function (avgSeals, avgKoalas) {
  if (avgSeals >= 2 * avgKoalas) {
    console.log(`Seals win (${avgSeals} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgSeals) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgSeals})`);
  } else {
    console.log(`No one win`);
  }
};

checkWinner(scoreKoalas, scoreSeals);
checkWinner(scoreKoalas1, scoreSeals1);
