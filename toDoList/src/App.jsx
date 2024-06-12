import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };
  const deleteListItem = (key) => {
    let newListToDo = [...listTodo];
    newListToDo.splice(key, 1);
    setListTodo([...newListToDo]);
  };
  return (
    <>
      <div className="input-container">
        <div className="center-container">
          <ToDoInput addList={addList} />
          <h1 className="app-heading">ToDo</h1>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <ToDoList
                key={i}
                index={i}
                item={listItem}
                deleteListItem={deleteListItem}
              />
            )
          })
          }
        </div>
      </div>
    </>
  );
}

const ToDoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      // props.addList()
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add ToDo"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
};
const ToDoList = (props) => {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          class="fa-solid fa-trash icon-delete"
          onClick={(e) => {
            props.deleteListItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
};
export default App;
