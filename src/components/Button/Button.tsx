import  LoadingButton  from "@mui/lab/LoadingButton";
import DownloadIcon from "@mui/icons-material/Download";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onError, onLoading } from "../../store/loading/slice";
import { addUsers } from "../../store/users/slice";
import style from "./Button.module.scss";
import { selectError, selectLoading } from "../../store/loading/selectors";

export const Button: FC = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(onLoading(true));
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(addUsers(data)))
      .catch((err: Error) => dispatch(onError(err.message)))
      .finally(() => dispatch(onLoading(false)));
  };

  return(
    <div className={style.button}>
      <LoadingButton 
        sx={{width: "100%", }}
        size="large"
        variant="outlined"
        onClick={handleClick}
        loading={loading}
        disabled={false}
        color={!error ? "primary" : "error"}
        startIcon={<DownloadIcon />}
      ><span>Download</span>
      </LoadingButton>
    </div>
  );
};