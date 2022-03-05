console.log(1111111111);
console.log(222222222);
console.log(3333333333);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(4444444444);
for (let index = 0; index < 400000; index++) {
  console.log(index);
}
