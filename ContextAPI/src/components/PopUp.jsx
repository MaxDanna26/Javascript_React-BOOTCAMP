import { Back, Overlay, Relative, CloseButton, Button, Input, IconStyled } from '../styled';
import PropTypes from 'prop-types';
import { updateItem } from '../services/api';
import { useState } from 'react';
import { useUserContext } from '../provider/UserProvider';

const PopUp = ({ visible, setVisible, children, taskId, updateList }) => {
  const handleClose = () => {
    setVisible(!visible);
  };
  const [editData, setEditData] = useState('');
  const { user } = useUserContext();


  return (
    <Overlay $visible={visible} onClick={handleClose}>
      <Back onClick={(e) => e.stopPropagation()}>
        <Relative>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <Input defaultValue={editData} onChange={(e) => setEditData(e.target.value)}></Input>
          <Button onClick={async () => (
            await updateItem(user.uid, taskId, { 'task': editData }),
            await updateList(user.uid),
            setVisible(false)
          )}>
            <IconStyled />
          </Button>
        </Relative>
        {children}
      </Back>
    </Overlay>
  );
};

export default PopUp;

PopUp.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  children: PropTypes.node,
  taskId: PropTypes.string,
  updateList: PropTypes.func,
};
