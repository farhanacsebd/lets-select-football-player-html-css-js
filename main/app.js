const players = document.getElementsByClassName('select-btn');
const orderContainer = document.getElementById('order-list');


const playersNameArr = [];
for (const playersBtn of players) {
    playersBtn.addEventListener("click", function (e){
        const playersName = e.target.parentElement.children[0].innerText;
        // console.log(e.target.parentElement.children[0]);

      playersNameArr.push(playersName)  
      if(playersNameArr.length <= 5){
        const li = document.createElement("li");
        li.style.color = "gray"
        li.innerText = playersName;
        orderContainer.appendChild(li);
        playersBtn.setAttribute('disabled',true)
        playersBtn.style.backgroundColor = "lightgray";
        playersBtn.style.color = "darkgray";
        /* let players = playersNameArr.length;
        console.log(players); */

        document.getElementById('btn-calculation').addEventListener('click',function(e){
          e.stopImmediatePropagation()
          const firstInput = document.getElementById('first-field');
          const firstField = parseFloat(firstInput.value);
          firstInput.value = '';
          // console.log( firstInput.value);

          // catch the array of length
          let players = playersNameArr.length;
          const playersExpensesTotal = firstField * players;
          // console.log(playerscalculation);

          // get the player expenses
          const expenses = document.getElementById('expenses');
          if(isNaN(firstField) || firstField < 0){
            Swal.fire({
              color: '#fff',
              background: '#212529',
              icon: 'error',
              title: 'Oops...',
              text: 'Your value must have any positive number.',
            })
          }
          else{
            expenses.innerText = playersExpensesTotal;
          }
        })
      }
      else{
        Swal.fire({
            color: '#fff',
            background: '#212529',
            icon: 'error',
            title: 'Oops...',
            text: 'cannot add more than 5 player at a time!',
          })
      }
    })
}