import { Box, Button, Modal, StyledEngineProvider, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onOpenModalChange } from "../../../store/modal/actions";
import { StoreState } from "../../../store";
import { changeUser } from "../../../store/users/actions";
import styleModalChange from "./ModalChange.module.scss";

export const ModalChange: FC = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorWebsite, setErrorWebsite] = useState(false);
  const [valueName, setValueName] = useState('');
  const [valueUserName, setValueUserName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueWebsite, setValueWebsite] = useState('');
  const users = useSelector((state: StoreState) => state.users.users);
  const openModalChange = useSelector((state: StoreState) => state.modal.openModalChange);
  const userId = useSelector((state: StoreState) => state.modal.userId);
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
    setErrorEmail(false);
    setErrorWebsite(false);
    if (!valueEmail.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/gim)) {
      setErrorEmail(true);
    } 
    if (!valueWebsite.match(
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/gim
      )) {
        setErrorWebsite(true);
      }
  }, [valueEmail, valueWebsite]);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const editUser = {
      id: userId!,
      name: valueName,
      username: valueUserName,
      email: valueEmail,
      address: users.find((item) => item.id === userId)!.address,
      phone: valuePhone,
      website: valueWebsite,
      company: users.find((item) => item.id === userId)!.company,
    }
    const usersEditArr = users.map(item => item.id !== userId ? item : editUser)
    dispatch(changeUser(usersEditArr));
    dispatch(onOpenModalChange(0, false));
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
            label="Name"
            defaultValue={users.find((item) => item.id === userId)?.name}
            variant="filled"
            multiline
            maxRows={3}
            onChange={(ev) => setValueName(ev.target.value)}
          />
          <TextField
            className={styleModalChange.box__input}
            type="text"
            label="Login"
            defaultValue={users.find((item) => item.id === userId)?.username}
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
            defaultValue={users.find((item) => item.id === userId)?.email}
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
            defaultValue={users.find((item) => item.id === userId)?.phone}
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
            defaultValue={users.find((item) => item.id === userId)?.website}
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
                  !errorEmail &&
                  !errorWebsite
                )
              }
            >Save</Button>
            <Button 
              className={styleModalChange.box__buttons__cancel}
              type="button"
              variant="contained"
              onClick={() => dispatch(onOpenModalChange(0, false))}
            >Cancel</Button>
          </div>
        </Box>
      </Modal>
    </StyledEngineProvider>
  );
};