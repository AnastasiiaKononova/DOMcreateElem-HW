//3


const uName = prompt("Введите ваше имя:");
const greetingElem = document.createElement('h1');
greetingElem.textContent = `Здравствуйте, ${uName}`;
document.body.append(greetingElem);