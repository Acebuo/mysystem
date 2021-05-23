const cards = document.querySelectorAll('.game-card');

let clickedcard;

function flipCard() {
  this.classList.add('flip');

clickedcard = this;
setTimeout(() => {
    
    
    // 找到翻開的圖片
    let pic= document.querySelector('.flip .front-face')
    console.log(pic)
    let pp =  document.getElementById('test')
     pp.outerHTML = pic
    
        
    }, 2000);

}





(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));