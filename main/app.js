const buttons = document.getElementsByClassName("select-btn");
const orderContainer = document.getElementById("order-list");
const expenses = document.getElementById("expenses");

const playersNameArr = [];
for (const button of buttons) {
  button.addEventListener("click", function (e) {
    const playersName = e.target.parentElement.children[0].innerText;
    // console.log(e.target.parentElement.children[0]);

    playersNameArr.push(playersName);
    if (playersNameArr.length <= 5) {
      const li = document.createElement("li");
      li.style.color = "gray";
      li.innerText = playersName;
      orderContainer.appendChild(li);
      button.setAttribute("disabled", true);
      button.style.backgroundColor = "lightgray";
      button.style.color = "darkgray";
      /* let players = playersNameArr.length;
        console.log(players); */

      document.getElementById("btn-calculation").addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        const firstInput = document.getElementById("first-field");
        const firstField = parseFloat(firstInput.value);
        firstInput.value = "";
        // console.log( firstInput.value);

        // catch the array of length
        let players = playersNameArr.length;
        const playersExpensesTotal = firstField * players;
        // console.log(playerscalculation);

        // get the player expenses
        if (isNaN(firstField) || firstField < 0) {
          Swal.fire({
            color: "#fff",
            background: "#212529",
            icon: "error",
            title: "Oops...",
            text: "Your value must have any positive number.",
          });
        } else {
          expenses.innerText = playersExpensesTotal;
        }
      });
    } else {
      Swal.fire({
        color: "#fff",
        background: "#212529",
        icon: "error",
        title: "Oops...",
        text: "cannot add more than 5 player at a time!",
      });
    }
  });
}

document.getElementById("total-btn").addEventListener("click", function () {
  const secondInput = document.getElementById("second-filed");
  const secondField = parseFloat(secondInput.value);
  secondInput.value = '';

  const thirdInput = document.getElementById("third-field");
  const thirdField = parseFloat(thirdInput.value);
  thirdInput.value = '';
  console.log(thirdField);

  // get the expenses from here
  const totalExpensesValue = parseFloat(expenses.innerText);
  console.log(totalExpensesValue);
  const totalEquation = totalExpensesValue + secondField + thirdField;
  console.log(totalEquation);

  if (isNaN(totalEquation) || secondField < 0 || thirdField < 0) {
    Swal.fire({
      color: "#fff",
      background: "#212529",
      icon: "error",
      title: "Oops...",
      text: "Your value must have any positive number.",
    });
  } else {
    document.getElementById("total").innerText = totalEquation;
  }
});


/* ------------------------------------------------------------------- */
/* ------------------------loading js start-------------------------- */
/* -------------------------------------------------------------------- */



let loader = document.getElementById('preloader');
  window.addEventListener('load',function(){
    loader.style.display = "none";
  })




/* ------------------------------------------------------------------- */
/* ------------------------loading js End-------------------------- */
/* -------------------------------------------------------------------- */