//1
const promiseArr = [];
function multyNumbers(num1, num2, num3) {
  const first = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 * 2);
    }, 1000);
  });
  promiseArr.push(first);
  const secont = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num2 * 2);
    }, 1000);
  });
  promiseArr.push(secont);
  const third = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num3 * 2);
    }, 1000);
  });
  promiseArr.push(third);
  return Promise.all(promiseArr);
}
multyNumbers(1, 4, 4)
  .then((data) => data.forEach(element ,i => {
    console.log(data[i])
  }));        

//2
// const numarr = [1, -2, 4, 6, 89];
// const arrPromise = [];
// let res = 0;
// let rej = 0;
// function pronum(numarr) {
// numarr.forEach((element) => {
//   const numPromise = new Promise((resolve, reject) => {
//     if (element >= 0) {
//       resolve(element);
//       res++;
//     } else {
//       reject(error);
//       rej ++;
//     }
//     arrPromise.push(numPromise);
//   });
// });
// }
