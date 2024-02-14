import { legacy_createStore } from 'redux'

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


const ADD = "ADD"
const MINUS = "MINUS"

const reducer = (count = 0, action) => {
  console.log(action, count);
  switch (action.type) {
    case ADD:
      return count + 1;
      break;
    case MINUS:
      return count - 1;
      break;
    default:
      return count;
  }
}
const store = legacy_createStore(reducer);

/***********
✅ Store >>> 데이터를 담는 저장소
✅ CreateStore는 Reducer를 요구함.
✅ Reducer >>>  데이터를 modify 하는 function
*************/

const onChange = () => {
  number.innerText = store.getState();
}
store.subscribe(onChange);

add.addEventListener("click", () => store.dispatch({ type: ADD }))
minus.addEventListener("click", () => store.dispatch({ type: MINUS }))