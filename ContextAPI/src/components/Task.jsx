import { useUserContext } from "../provider/UserProvider";
import { getTasksByUserId } from "../services/api";
import { createTask } from "../services/auth";
import { useEffect, useState } from "react";
import { Card, Container, Button, Input, IconStyled } from "../styled";
import PopUp from "./PopUp";
import TaskContent from "./TaskContent/TaskContent";

function Task() {
  const { user } = useUserContext();
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [taskId, setTaskId] = useState(null);
  const [list, setList] = useState([]);

  const updateList = () => {
    if (user) {
      getTasksByUserId(user.uid).then(setList);
    }
  };

  useEffect(() => {
    updateList();
  }, [updateList]);


  const handleEdit = (task) => {
    setVisible(true);
    setTaskId(task.id);
    setEditTask(task.task);
  };

  return (
    <Card>
      {list?.map(task => (
        <Container key={task.id}>
          <TaskContent id={task.id} content={task.task} reload={updateList} edit={() => handleEdit(task)} />
        </Container>
      ))}

      <PopUp visible={visible} setVisible={setVisible} taskId={taskId} content={editTask} />

      <Container $direction='row' $bg='#A68E46'>
        <Input
          placeholder="Escriba su tarea"
          type="textarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <Button
          $bg='rgb(78, 145, 11)'
          onClick={async () => {
            await createTask(user.uid, { task });
            updateList();
            setTask('');
          }}
        >
          <IconStyled /> Guardar
        </Button>
      </Container>
    </Card>
  );
}

export default Task;
