//! Asenkron Javascript

// console.log('1');
// console.log('2');
// setTimeout(() => {
//   console.log('3');
// }, 400);
// console.log('4');

//?---------------------------
//?---------------------------
//?---------------------------

// //! Callback Fonksiyonu

// const sayHello = (Callback) => {
//   setTimeout(() => {
//     console.log('Hello 1');
//   }, 1000);
//   Callback();
// };

// function sayHello2() {
//   console.log('Hello 2');
// }

// sayHello(sayHello2);

// sayHello2();

//?---------------------------
//?---------------------------
//?---------------------------

//! Calback hell

const userList = () => {
  console.log('kullanıcı listesi');
};

const productList = () => {
  console.log('ürün listesi');
};

const priceList = () => {
  console.log('fiyat listesi');
};

// function dataList(waitTime, callback) {
//   setTimeout(function () {
//     callback();
//   }, waitTime * 1000);
// }
// dataList(1, function () {
//   userList();
//   dataList(2, function () {
//     productList();
//     dataList(3, function () {
//       priceList();
//     });
//   });
// });

//?---------------------------
//?---------------------------
//?---------------------------

//! Javasicript Promise

// const myPromise = (waitTime, callback) => {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (callback) {
//         resolve(callback());
//       } else {
//         reject();
//       }
//     }, waitTime * 1000);
//   });
// };

// myPromise(1, userList).then(() =>
//   myPromise(2, productList).then(() => myPromise(1, priceList))
// );

//?---------------------------
//?---------------------------
//?---------------------------

//! Javasicript async/await

const dataList = (waitTime, callback) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (callback) {
        resolve(callback());
      } else {
        reject();
      }
    }, waitTime * 1000);
  });
};

const executeDataList = async () => {
  try {
    await dataList(1, userList);
    await dataList(2, productList);
    await dataList(3, priceList);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('İşlem Tamamalndı');
  }
};

executeDataList();
