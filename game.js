const cards = document.querySelectorAll('.game-card');

let clickedcard;

function flipCard() {
  this.classList.add('flip');

clickedcard = this;
setTimeout(() => {
    
    
    // 找到翻開的圖片,印在div上
    //let pp =  document.getElementById('print');
    //pp.appendChild(clickedcard);


    //互動modal
    var myModal = new bootstrap.Modal(document.getElementById('test'), )
    myModal.show();
    

        
    }, 2000);

}





(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));