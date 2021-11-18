function bookmark() {
   document.getElementById('bookmark').classList.toggle("active");
   document.getElementById('bookmark-text').style.display = "none";
   document.getElementById('demo').innerHTML = `<p>Bookmarked</p>`;

}

var modal = document.querySelector(".modal");
var btn = document.querySelector(".openModal");
var span = document.querySelector(".close");
btn.addEventListener("click", () => {
   modal.style.display = "block";
});
span.addEventListener("click", () => {
   modal.style.display = "none";
});
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
};

function bamboo() {
   document.getElementById("bamboo-box").style.border = "2px solid hsl(176, 50%, 47%)";
   document.getElementById("bamboo-btn").style.backgroundColor = "hsl(176, 50%, 47%)";

}

function activeBoxOne() {
   document.getElementById("modal").style.display = "block";
   document.getElementById("bamboo-box").style.border = "2px solid hsl(176, 50%, 47%)";
   document.getElementById("bamboo-btn").style.backgroundColor = "hsl(176, 50%, 47%)";

}
function bambooContinue() {
   var pledge = document.getElementById("number-input");
   var succesModal = document.getElementById("succes");
   if (pledge.value >= 25) {
      succesModal.style.display = "block";
   } else {
      succesModal.style.display = "none";
   }
}

function gotIt() {
   document.getElementById("succes").style.display = "none";
}

function bleckActiveBox() {
   document.getElementById("bamboo-box").style.border = "2px solid  silver";
   document.getElementById("bamboo-btn").style.backgroundColor = "silver";
   document.getElementById("black-edition-box").style.border = "2px solid hsl(176, 50%, 47%)";
   document.getElementById("black_edition_radio").style.backgroundColor = "hsl(176, 50%, 47%)";
   document.getElementById("modal").style.display = "block";
}
function blackContinue() {
   var pledge = document.getElementById("number-input-black");
   var succesModal = document.getElementById("succes");
   if (pledge.value >= 75) {
      succesModal.style.display = "block";
   } else {
      succesModal.style.display = "none";
   }
}