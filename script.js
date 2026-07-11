// =========================
// ЭЛЕМЕНТЫ
// =========================

const welcome = document.getElementById("welcome");
const choose = document.getElementById("choose");
const instagram = document.getElementById("instagram");
const finish = document.getElementById("finish");

const startButton = document.getElementById("startButton");
const money = document.getElementById("money");
const friends = document.getElementById("friends");
const restart = document.getElementById("restart");
const hint = document.getElementById("hint");

let tries = 0;


// =========================
// ПЕРЕХОД НА ВЫБОР
// =========================

startButton.onclick = () => {

    welcome.classList.remove("active");

    setTimeout(() => {

        choose.classList.add("active");

    }, 600);

};


// =========================
// СЕРДЕЧКИ
// =========================

const particles = document.getElementById("particles");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (16 + Math.random() * 24) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    particles.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 350);


// =========================
// УБЕГАЮЩАЯ КНОПКА
// =========================

function runAway() {

    tries++;

    if (tries >= 3) {

        money.style.display = "none";

        hint.innerHTML = "😂 Выбор стал проще";

        return;

    }

    const box = document.querySelector(".chooseCard");

    const rect = box.getBoundingClientRect();

    const btnRect = money.getBoundingClientRect();

    const maxX = rect.width - btnRect.width - 20;

    const maxY = 180 - btnRect.height;

    const x = Math.random() * maxX;

    const y = Math.random() * maxY;

    money.style.left = x + "px";

    money.style.top = y + "px";

}

money.addEventListener("mouseenter", runAway);

money.addEventListener("touchstart", function (e) {

    e.preventDefault();

    runAway();

});


// =========================
// INSTAGRAM
// =========================

friends.onclick = function () {

    choose.classList.remove("active");

    setTimeout(() => {

        instagram.classList.add("active");

    }, 600);

};


// =========================
// ЛАЙКИ
// =========================

document.querySelectorAll(".likeButton").forEach(button => {

    button.onclick = function () {

        const post = this.closest(".post");

        const likes = post.querySelector(".likesNumber");

        let count = parseInt(likes.innerText);

        if (this.innerHTML === "🤍") {

            this.innerHTML = "❤️";

            likes.innerText = count + 1;

        } else {

            this.innerHTML = "🤍";

            likes.innerText = count - 1;

        }

    }

});


// =========================
// ДВОЙНОЙ ТАП
// =========================

document.querySelectorAll(".feedPhoto").forEach(photo => {

    photo.ondblclick = function () {

        const heart = this.parentElement.querySelector(".heartAnimation");

        heart.style.opacity = "1";

        heart.style.transform = "translate(-50%,-50%) scale(1)";

        setTimeout(() => {

            heart.style.opacity = "0";

            heart.style.transform = "translate(-50%,-50%) scale(.2)";

        }, 700);

        const btn = this.closest(".post").querySelector(".likeButton");

        if (btn.innerHTML === "🤍") {

            btn.click();

        }

    }

});


// =========================
// ПОЯВЛЕНИЕ ФИНАЛА
// =========================

window.addEventListener("scroll", () => {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {

        instagram.classList.remove("active");

        finish.classList.add("active");

    }

});


// =========================
// ПЕРЕЗАПУСК
// =========================

restart.onclick = function () {

    finish.classList.remove("active");

    instagram.classList.remove("active");

    choose.classList.remove("active");

    welcome.classList.add("active");

    money.style.display = "block";

    money.style.left = "0";

    money.style.top = "0";

    tries = 0;

    hint.innerHTML = "";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};