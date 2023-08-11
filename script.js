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

//! Callback Fonksiyonu

const sayHello = (Callback) => {
  setTimeout(() => {
    console.log('Hello 1');
  }, 1000);
  Callback();
};

function sayHello2() {
  console.log('Hello 2');
}

sayHello(sayHello2);

sayHello2();
