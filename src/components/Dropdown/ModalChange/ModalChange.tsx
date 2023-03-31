import { Box, Button, Modal, StyledEngineProvider, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onOpenModalChange } from "../../../store/modal/slice";
import { editUser } from "../../../store/users/slice";
import styleModalChange from "./ModalChange.module.scss";
import { selectUsers } from "../../../store/users/selectors";
import { selectOpenModalChange, selectUserId } from "../../../store/modal/selectors";

export const ModalChange: FC = () => {
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorWebsite, setErrorWebsite] = useState(false);
  const [valueName, setValueName] = useState('');
  const [valueUserName, setValueUserName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueWebsite, setValueWebsite] = useState('');
  const users = useSelector(selectUsers);
  const openModalChange = useSelector(selectOpenModalChange);
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    if(users.find((item) => item.id === userId) !== undefined) {
      setValueName(users.find((item) => item.id === userId)!.name);
      setValueUserName(users.find((item) => item.id === userId)!.username);
      setValueEmail(users.find((item) => item.id === userId)!.email);
      setValuePhone(users.find((item) => item.id === userId)!.phone);
      setValueWebsite(users.find((item) => item.id === userId)!.website);
    }
  }, [openModalChange]);

  useEffect(() => {
    setErrorName(false);
    setErrorEmail(false);
    setErrorWebsite(false);
    if (!valueName.match(/^[a-zа-яА-ЯёЁ]+/gim)) {
      setErrorName(true);
    } 
    if (!valueEmail.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/gim)) {
      setErrorEmail(true);
    } 
    if (!valueWebsite.match(
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/gim
      )) {
        setErrorWebsite(true);
      }
  }, [valueName, valueEmail, valueWebsite]);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(editUser(
      {
        id: userId!,
        name: valueName,
        username: valueUserName,
        email: valueEmail,
        phone: valuePhone,
        website: valueWebsite,
      }
    ));
    dispatch(onOpenModalChange({userId: 0, openModalChange: false}));
  };

  const handleClickCancel = () => {
    dispatch(onOpenModalChange({userId: 0, openModalChange: false}));
  };

  return (
    <StyledEngineProvider injectFirst>
      <Modal
        open={openModalChange!}
      >
        <Box 
          className={styleModalChange.box}
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            className={styleModalChange.box__input}
            type="text"
            error={errorName}
            label="Name"
            defaultValue={
              users.length > 0 ?
              users.find((item) => item.id === userId)?.name :
              ''
            }
            helperText={errorName ? "Incorrect entry." : ""}
            variant="filled"
            multiline
            maxRows={3}
            onChange={(ev) => setValueName(ev.target.value)}
          />
          <TextField
            className={styleModalChange.box__input}
            type="text"
            label="Login"
            defaultValue={
              users.length > 0 ?
              users.find((item) => item.id === userId)?.username :
              ''
            }
            variant="filled"
            multiline
            maxRows={3}
            onChange={(ev) => setValueUserName(ev.target.value)}
          />
          <TextField
            className={styleModalChange.box__input}
            type="email"
            error={errorEmail}
            label="Email"
            defaultValue={
              users.length > 0 ?
              users.find((item) => item.id === userId)?.email :
              ''
            }
            helperText={errorEmail ? "Incorrect entry." : ""}
            variant="filled"
            multiline
            maxRows={3}
            onChange={(ev) => setValueEmail(ev.target.value)}
          />
          <TextField
            className={styleModalChange.box__input}
            type="tel"
            label="Phone"
            defaultValue={
              users.length > 0 ?
              users.find((item) => item.id === userId)?.phone :
              ''
            }
            variant="filled"
            multiline
            maxRows={3}
            onChange={(ev) => setValuePhone(ev.target.value)}
          />
          <TextField
            className={styleModalChange.box__input}
            type="text"
            error={errorWebsite}
            label="Website"
            defaultValue={
              users.length > 0 ?
              users.find((item) => item.id === userId)?.website :
              ''
            }
            helperText={errorWebsite ? "Incorrect entry." : ""}
            variant="filled"
            multiline
            maxRows={3}
            onChange={(ev) => setValueWebsite(ev.target.value)}
          />
          <div className={styleModalChange.box__buttons}>
            <Button 
              className={styleModalChange.box__buttons__confirm}
              type="submit"
              variant="contained"
              disabled={
                !(
                  valueName && 
                  valueUserName && 
                  valueEmail && 
                  valuePhone && 
                  valueWebsite &&
                  !errorName &&
                  !errorEmail &&
                  !errorWebsite
                )
              }
            >Save</Button>
            <Button 
              className={styleModalChange.box__buttons__cancel}
              type="button"
              variant="contained"
              onClick={handleClickCancel}
            >Cancel</Button>
          </div>
        </Box>
      </Modal>
    </StyledEngineProvider>
  );
};