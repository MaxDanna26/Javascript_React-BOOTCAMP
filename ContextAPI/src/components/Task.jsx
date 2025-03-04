import { useUserContext } from "../provider/UserProvider"
import { getTasksByUserId, updateItem } from "../services/api";
import { createTask } from "../services/auth";
import { useEffect, useState } from "react";
import { Card, Container, Button, Input, IconStyled } from "../styled";
import PopUp from "./PopUp";
import TaskContent from "./TaskContent/TaskContent";

function Task() {
  const { user } = useUserContext();

  const [visible, setVisible] = useState(false);
  const handleEdit = async () => {
    await setVisible(true);
    await setTaskId(task.id);
    await setEditTask(task.task);

    await updateList();
  }

  const [task, setTask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [taskId, setTaskId] = useState();

  const [list, setList] = useState([]);
  const updateList = () => getTasksByUserId(user.uid).then(setList);
  useEffect(() => {
    user && getTasksByUserId(user.uid).then(setList)
  }, [user])


  return (
    <Card>
      {list?.map(task =>
        <Container key={task.id}>
          <TaskContent id={task.id} uid={user.uid} content={task.task} reload={updateList} edit={handleEdit} />
        </Container>
      )
      }
      <PopUp visible={visible} setVisible={handleEdit} taskId={setTaskId} />
      <Container $direction='row' $bg='#A68E46'>
        <Input placeholder="Escriba su tarea" type="textarea" value={task} onChange={(e) => setTask(e.target.value)}>
        </Input>

        <Button $bg='rgb(78, 145, 11)' onClick={async () => (await createTask(user.uid, { 'task': task }), await updateList(user.uid), await setTask(''))}>
          <IconStyled /> Guardar
        </Button>
      </Container>
    </Card>
  )
}

export default Task
