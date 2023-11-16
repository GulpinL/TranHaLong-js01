let count = 60;

const timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Ket Thuc Count Down");
  }
}, 1000);
// setInterval (callback, milliseconds); //1000 milliseconds = 1 second