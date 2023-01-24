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