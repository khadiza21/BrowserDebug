const coming = () => {
  alert("coming soon");
};
console.log(23);
const confirming = () => {
  const takeAns = confirm("are you want to go the picnic with us?");
  console.log(takeAns);
  //   0 == true

  if (takeAns === 1) {
    alert(
      "Thank you! You have to pay fee for join this tour! Please pay and join with us."
    );
  } else {
    alert("Thank you! See you again.");
  }
};
const amount = () => {
  const getAmount = prompt("Enter your Amount: ");

  if (getAmount) {
    console.log(parseInt(getAmount));
  }
};
