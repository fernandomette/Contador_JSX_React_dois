import "./index.css";
import { React, useState, useEffect } from "react";
import { TiDelete, TiEdit } from "react-icons/ti";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Tarefas() {
  let [TextList, setTextList] = useState([]);
  let [taskInput, settaskInput] = useState("");
  
  const [togleSubmit, setTogleSubmit] = useState(false);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    const TextAdd = localStorage.getItem("TextList");
    const LoadText = TextAdd.parse(TextAdd);
    if (LoadText) {
      setTextList(LoadText);
    }
  }, []);

  useEffect(() => {
    const TextAdd = TextAdd.stringify(TextList);
    localStorage.setItem("TextList", TextAdd);
  }, [TextList]);

  function AddNewTask() {
    if (!taskInput) {
      alert("Escreava uma Tarefa📝");
    } else if (taskInput && togleSubmit) {
      setTextList(
        TextList.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: taskInput };
          }
          return elem;
        })
      );
      setTogleSubmit(false);
      settaskInput("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: taskInput,
        conpleted: false,
      };
      setTextList([...TextList, allInputData]);
      settaskInput("");
    }
  }

  function DelList(index) {
    const updateTodo = TextList.filter((elem) => {
      return index !== elem.id;
    });

    setTextList(updateTodo);
  }

  const inputKeyDown = (e) => {
    if (e.keyCode === 13) AddNewTask();
  };

  const edititem = (id) => {
    const newEditItem = TextList.find((elem) => {
      return elem.id === id;
    });

    setTogleSubmit(true);
    settaskInput(newEditItem.name);
    setIsEditItem(id);
  };

  function concluida(taskId) {
    const newTasks = TextList.map(task => {
      if(task.id === taskId)
      return {
        ...task, completed: !task.completed
      };
      return task;
    })
    setTextList(newTasks)
    console.log(TextList.completed)
  }

  return (
      <div>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <div className="app">
                  <h1>Lista de Tarefas</h1>
                  <div className="label-float">
                  <input
                    placeholder=" "
                    onKeyDown={inputKeyDown}
                    value={taskInput}
                    onChange={(value) => settaskInput(value.target.value)}
                  />
                  <label>Escreva uma Tarefa</label>
                  </div>
                  {togleSubmit ? (
                    <button
                      className="btnEdit"
                      onClick={() => AddNewTask()}
                    >
                      Editar
                    </button>
                  ) : (
                    <button onClick={() => AddNewTask()}>
                      Adicionar
                    </button>
                  )}
                  <div className="div2">
                    <ul>
                      
                      { TextList?.length ? (
                          TextList.map((elem) => (
                            <div className="li" key={elem.id}>
                            
                              <li onClick={() => concluida(elem.id)}
                              style={elem.completed ? {background: 'green', borderRadius: '5px'} : { }}
                              >{elem.name}</li>

                              <TiEdit onClick={() => edititem(elem.id)}></TiEdit>
                              
                              <TiDelete
                                className="delete"
                                onClick={() => DelList(elem.id)}>
                                Delete
                              </TiDelete>
                              
                            </div>
                          )
                          )
                       ) 
                      }

                    </ul>
                  </div>
                  
                  <Link className="link" to="/Boa">
                    <button className="btnBoa">Clique Aqui!</button>
                  </Link>
                
                </div>
              </>
            );
          }}
        />
      </div>
  );
}
export default Tarefas;


