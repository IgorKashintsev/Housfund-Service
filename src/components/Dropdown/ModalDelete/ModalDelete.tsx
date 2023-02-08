import { Box, IconButton, Modal, StyledEngineProvider, Tooltip } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../store";
import { deleteUser } from "../../../store/users/actions";
import { onOpenModalDel } from "../../../store/modal/actions";
import styleModalDelete from "./ModalDelete.module.scss";

export const ModalDelete: FC = () => {
  const users = useSelector((state: StoreState) => state.users.users);
  const openModalDel = useSelector((state: StoreState) => state.modal.openModalDel);
  const userId = useSelector((state: StoreState) => state.modal.userId)
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    const filteredArr = users.filter(item => item.id != userId);
    dispatch(deleteUser(filteredArr));
    dispatch(onOpenModalDel(0, false));
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
            <IconButton onClick={() => dispatch(onOpenModalDel(0, false))}>
              <CloseIcon color="error" fontSize="large"/>
            </IconButton>
          </Tooltip>
        </Box>
      </Modal>
    </StyledEngineProvider>
  );
};