import { Box, IconButton, Modal, StyledEngineProvider, Tooltip } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../store/users/slice";
import { onOpenModalDel } from "../../../store/modal/slice";
import styleModalDelete from "./ModalDelete.module.scss";
import { selectUsers } from "../../../store/users/selectors";
import { selectOpenModalDel, selectUserId } from "../../../store/modal/selectors";

export const ModalDelete: FC = () => {
  const users = useSelector(selectUsers);
  const openModalDel = useSelector(selectOpenModalDel);
  const userId = useSelector(selectUserId)
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    const userIndex = users.findIndex(item => item.id === userId);
    dispatch(deleteUser(userIndex));
    dispatch(onOpenModalDel({userId: 0, openModalDel: false}));
  };

  const handleClickCancel = () => {
    dispatch(onOpenModalDel({userId: 0, openModalDel: false}));
  };

  return (
    <StyledEngineProvider injectFirst>
      <Modal
        open={openModalDel!}
      >
        <Box 
          className={styleModalDelete.box}
        >
          <Tooltip title="Delete" placement="top">
            <IconButton onClick={handleClickDelete}>
              <DoneIcon color="primary" fontSize="large"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancel" placement="top">
            <IconButton onClick={handleClickCancel}>
              <CloseIcon color="error" fontSize="large"/>
            </IconButton>
          </Tooltip>
        </Box>
      </Modal>
    </StyledEngineProvider>
  );
};