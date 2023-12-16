
document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("home").addEventListener("click",function(){
   window.location.href="../past/past1.html"
})
})


function past1(){
   let senha1Correta = "50"; 
   let senha1Digitada = document.getElementById("past1").value;

   if(senha1Correta == senha1Digitada){
    window.location.href = "../past/past2.html"
   } else alert("Resposta incorreta. Tente novamente")

}
function past2(){
   let senha2Correta = "40"; 
   let senha2Digitada = document.getElementById("past2").value;

   if(senha2Correta == senha2Digitada){
    window.location.href = "../past/past3.html"
   } else alert("Resposta incorreta. Tente novamente")

}
function past4(){
   let senha4Correta = "6"; 
   let senha4Digitada = document.getElementById("past4").value;

   if(senha4Correta == senha4Digitada){
    window.location.href = "../past/past5.html"
   } else alert("Resposta incorreta. Tente novamente")

}


/*document.getElementById("past3").addEventListener("click", function(){
   console.log("foi")
})
*/

//para pasta 3:
let moveCount = 0;

function moveImage() {
  const image = document.getElementById('move');
function move(){
   if (moveCount < 3) {
    // Mover a imagem
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    image.style.transform = `translate(${newX}px, ${newY}px)`;

    moveCount++;

    // Aguarde um pouco antes de permitir o próximo movimento
   /* setTimeout(() => {
      moveImage();
    }, 1000);*/
  }else
    // Redirecionar para outra página após os movimentos
    window.location.href = '../past/past4.html';
}
  
    image.addEventListener('click', function(){
      move();
    })
  }
  function past6(){
   let senha6Correta = "4"; 
   let senha6Digitada = document.getElementById("past6").value;

   if(senha6Correta == senha6Digitada){
    window.location.href = "../past/past7.html"
   } else  window.location.href = "../past/pastErro6.html"

}