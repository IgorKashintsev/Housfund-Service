import  LoadingButton  from "@mui/lab/LoadingButton";
import DownloadIcon from "@mui/icons-material/Download";
import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onError, onLoading } from "../../store/loading/slice";
import { addUsers } from "../../store/users/slice";
import style from "./Button.module.scss";
import { selectError, selectLoading } from "../../store/loading/selectors";
import { ColorButton, User } from "../../types";
import { selectUsers } from "../../store/users/selectors";

export const Button: FC = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [colorButton, setColor] = useState<ColorButton>('primary');

  const handleClick = async () => {
    dispatch(onError(''));
    dispatch(onLoading(true));

    await new Promise((resolve) => setTimeout(resolve, 1500))

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: User[] = await res.json();
      dispatch(addUsers(data));
    } catch(err) {
      if(err instanceof Error) {
        dispatch(onError(err.message));
      } else {
        dispatch(onError('error'));
      }
    } finally {
      dispatch(onLoading(false));
    }
  };

  useEffect(() => {
    if(error) {
      setColor('error');
    } else if(users.length > 0) {
      setColor('success');
    } else setColor('primary');
  }, [error, users.length])

  return(
    <div className={style.button}>
      <LoadingButton 
        sx={{width: "100%", }}
        size="large"
        variant="outlined"
        onClick={handleClick}
        loading={loading}
        disabled={false}
        color={colorButton}
        startIcon={<DownloadIcon />}
      ><span>Download</span>
      </LoadingButton>
    </div>
  );
};