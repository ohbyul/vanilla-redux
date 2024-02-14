const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


let count = 0;
number.innerText = count;


const undateInnerText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  count++;
  undateInnerText()
}

const handleMinus = () => {
  count--;
  undateInnerText()
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);