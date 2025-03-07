import { useUserContext } from '../../provider/UserProvider';
import { deleteItem } from '../../services/api';
import { TaskText, TaskButton, TaskBox } from './styles.js';
import { Botonera } from './../../styled.js';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { TbPoint } from 'react-icons/tb';
import PropTypes from 'prop-types';

const TaskContent = ({ id, content, reload, edit }) => {
  const { user } = useUserContext();

  return (

    <TaskBox>
      <TbPoint style={{ background: "#9BB1BF" }} size='20px' />
      <TaskText>{content}</TaskText>

      <Botonera $bg='#9BB1BF'>
        <TaskButton onClick={async () => (await deleteItem(user.uid, id), await reload())}>
          <FaTrashAlt size='25px' />
        </TaskButton>

        <TaskButton onClick={async () => edit(user.uid, id, { 'task': content }, await reload())}>
          <FaPencilAlt size='25px' />
        </TaskButton>

      </Botonera>
    </TaskBox>
  )


}
export default TaskContent;

TaskContent.propTypes = {
  updateList: PropTypes.func,
  edit: PropTypes.func,
  reload: PropTypes.func,
  id: PropTypes.string,
  content: PropTypes.string,

}
