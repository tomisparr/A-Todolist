import style from "./Todo.module.css";
import plus from "../images/Plus.svg";
import check from "../images/Group 1.svg";
import trash from "../images/TrashSimple.svg";

export const Todo = ({ addList, onChangeList, tasks }) => {
  return (
    <div className={style.container}>
      <div className={style.det}>
        <h2>Todo App</h2>
        <p>Lucas Viga</p>
      </div>
      <div className={style.taskslist}>
        <div className={style.add}>
          <input
            type="text"
            onChange={onChangeList}
            placeholder="Add a new task"
          />
          <button onClick={addList}>
            <img src={plus} alt="Add button" />
          </button>
        </div>

        <div className={style.list}>
          <h2>
            Tasks to do - <span>4</span>{" "}
          </h2>
          {tasks?.map((task) => {
            return <Task task={task.title} />;
          })}
        </div>

        <div className={style.taskdone}>
          <h2>
            Done - <span>1</span>
          </h2>
          <div className={style.listdone}>
            <p>To study React Fundamentals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Task = ({ task, setTodo }) => {
  const handleDelete = (singleTodo) => {
    const newTodo = task.filter((todo) => todo !== singleTodo)
    setTodo(newTodo)
  }
  return (
    <div className={style.task}>
      <p>{task}</p>
      <span>
        <img src={check} alt="" /> <img onClick={() => handleDelete(task)} src={trash} alt="" />
      </span>
    </div>
  );
};
