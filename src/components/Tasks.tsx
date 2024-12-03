type contentType = {
  title: string;
  tasks: Array<TasksType>;
  students: Array<string>;
};

type TasksType = {
  taskId: number;
  title: string;
  isDone: boolean;
};

type TasksPropsType = {
  content: contentType;
};

export const Tasks = (props: TasksPropsType) => {
  return (
    <div>
      <h1>{props.content.title}</h1>
      <ul>
        {props.content.tasks.map((task) => {
          return (
            <li key={task.taskId}>
              <span>{task.taskId}</span>
              <span>{task.title}</span>
              <span>{task.isDone}</span>
            </li>
          );
        })}
      </ul>
      <ul>
        {props.content.students.map((student, ind) => {
          return <li key={ind}>{student}</li>;
        })}
      </ul>
    </div>
  );
};
