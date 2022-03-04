function intro() {
  console.log("my name is bk");
}
setTimeout(function () {
  console.log("sum ", 2 + 5);
}, 4000);
setTimeout(intro, 3000);
setTimeout(() => {
  console.log("happy man");
}, 2000);
// JSandBrowserWorks