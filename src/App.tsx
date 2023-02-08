import { FC } from "react";
import { Provider } from "react-redux";
import { Button } from "./components/Button/Button";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { store } from "./store";

export const App: FC = () => {
  return(
    <>
      <Provider store={store}>
        <Button />
        <Dropdown />
      </Provider>
    </>  
  );
};