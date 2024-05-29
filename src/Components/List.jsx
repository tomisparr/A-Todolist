import style from "./Todo.module.css";
import check from "../images/Group 1.svg";
import trash from "../images/TrashSimple.svg";

export const List = ({ task, setTask }) => {
  const handleDelete = (singleTask) => {
    const newTodo = task.filter((todo) => todo !== singleTask);
    setTask(newTodo);
  };
  return (
    <div className={style.task}>
      <p>{task}</p>
      <span>
        <img src={check} alt="" />{" "}
        <img
          className={style.trash}
          onClick={() => handleDelete(task)}
          src={trash}
          alt=""
        />
      </span>
    </div>
  );
};
