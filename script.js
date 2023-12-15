const www = document.querySelector(".main-con");
const question = document.querySelector(".qut");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");
const wapperReact = www.getBoundingClientRect();
const react = nobtn.getBoundingClientRect();


yesbtn.addEventListener('click', () => {
    question.innerHTML = "YES I AM MAD..."
})

nobtn.addEventListener('mouseover', () => {
    question.innerHTML = "ARE YOU MAD???"
    const i = Math.floor(Math.random() * (wapperReact.width - react.width)) + 1;
    const j = Math.floor(Math.random() * (wapperReact.height - react.height)) + 1

    nobtn.style.left = i + "px";
    nobtn.style.top = j + "px"
})
nobtn.addEventListener('click', () => {
    question.innerHTML = "Tab v tu pagal hai"
})