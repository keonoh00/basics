let a = 1; // 변수
const b = 2; // 상수
var c = 3; // ES6 이전에 사용하던 변수 선언 방식

a + b; // 3
a - b; // -1
a * b; // 2
a / b; // 0.5
a % b; // 1
a ** b; // 1
a++; // 2
a--; // 1
a += b; // 3
a -= b; // 1
a *= b; // 2
a /= b; // 1
a %= b; // 1
a **= b; // 1

if (a > b) {
  console.log("a가 b보다 큽니다.");
} else if (a < b) {
  console.log("a가 b보다 작습니다.");
} else {
  console.log("a와 b가 같습니다.");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (a < b) {
  console.log("a가 b보다 작습니다.");
  a++;
}

function add(a, b) {
  return a + b;
}

// es6 이후
const add = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;