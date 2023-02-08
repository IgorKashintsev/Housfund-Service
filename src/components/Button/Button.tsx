import  LoadingButton  from "@mui/lab/LoadingButton";
import DownloadIcon from "@mui/icons-material/Download";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store";
import { onError, onLoading } from "../../store/loading/actions";
import { addUsers } from "../../store/users/actions";
import style from "./Button.module.scss";

export const Button: FC = () => {
  const loading = useSelector((state: StoreState) => state.loading.loading);
  const error = useSelector((state: StoreState) => state.loading.error);
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