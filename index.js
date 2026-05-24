// Mostrar mensaje oculto
function showMessage(){
  document.getElementById("message").style.display = "block";
}

// Reproducir música
function playMusic(){
  let musica = document.getElementById("musica");

  musica.volume = 0.3;
  musica.play();
}

// Crear corazones animados
const heartsContainer = document.getElementById("hearts");

function createHeart(){
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);