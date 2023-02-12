import { Button, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onOpenDropdown } from "../../store/dropdown/slice";
import { ModalDelete } from "./ModalDelete/ModalDelete";
import { onOpenModalChange, onOpenModalDel } from "../../store/modal/slice";
import { ModalChange } from "./ModalChange/ModalChange";
import style from "./Dropdown.module.scss";
import { selectLoading } from "../../store/loading/selectors";
import { selectAnchorEl, selectOpenDropdown } from "../../store/dropdown/selectors";
import { selectUsers } from "../../store/users/selectors";

export const Dropdown: FC = () => {
  const loading = useSelector(selectLoading);
  const anchorEl = useSelector(selectAnchorEl);
  const openDropdown = useSelector(selectOpenDropdown);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(users.length > 0) {
    dispatch(onOpenDropdown({anchorEl: event.currentTarget, openDropdown: true}));
    }
  };

  const handleClose = () => {
    dispatch(onOpenDropdown({anchorEl: null, openDropdown: false}));
  };

  const handleClickDelete = (userId: number) => {
    dispatch(onOpenModalDel({userId: userId, openModalDel: true}));
  };

  const handleClickEdit = (userId: number) => {
    dispatch(onOpenModalChange({userId: userId, openModalChange: true}));
  };

  useEffect(() => {
    if(users.length < 1) {
      dispatch(onOpenDropdown({anchorEl: null, openDropdown: false}));
    }
  }, [users]);

  return(
    <>
      <div className={style.button}>
        <Button 
          sx={{width: "100%"}}
          onClick={handleClickButton}
          variant="contained"
        >Users List
        </Button>
      </div>
      {(anchorEl && !loading) &&
        <Menu
          sx={{height: "250px"}}
          anchorEl={anchorEl}
          open={openDropdown}
          onClose={handleClose}
        >{users.map((item) => (
            <MenuItem
              sx={{
                maxWidth: "600px",
                whiteSpace: "normal",
              }}
              key={item.id}
              divider
              aria-rowcount={3}
            >{item.name}
              <Tooltip title="Delete" placement="left">
                <IconButton onClick={() => handleClickDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit" placement="right">
                <IconButton onClick={() => handleClickEdit(item.id)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </MenuItem>
          ))
        }
      </Menu>}
      <ModalDelete/>
      <ModalChange/>
    </>
  );
};