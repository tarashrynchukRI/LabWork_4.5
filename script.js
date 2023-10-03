// Lab_4.5
// Гринчук Тарас
// Лабораторна робота № 4.5
// «Попадання» у плоску фігуру
// Варіант №4

let x, y, R;

// Перший спосіб
for (let i = 0; i < 10; i++) {
   x = parseInt(prompt("Введіть значення x:"));
   y = parseInt(prompt("Введіть значення y:"));
   R = parseInt(prompt("Введіть значення R:"));

   if ((x * x + y * y <= R * R && y >= 0) || (y >= x - R && y <= 0)) {
      console.log("Yes");
   } else {
      console.log("No");
   }
}

R = parseInt(prompt("R = "));

const getRandomNumber = (min, max) => {
   return Math.random() * (max - min) + min;
};

for (let i = 0; i < 10; i++) {
   x = getRandomNumber(-R, R);
   y = getRandomNumber(-R, R);
   if ((x * x + y * y <= R * R && y >= 0) || (y >= x - R && y <= 0)) {
      console.log(x.toFixed(2), y.toFixed(2), "yes");
   } else {
      console.log(x.toFixed(2), y.toFixed(2), "no");
   }
}
