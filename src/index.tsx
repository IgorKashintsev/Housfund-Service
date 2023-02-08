import ReactDOM from 'react-dom/client';
import { App } from './App';

import style from './global.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className={style.container}>
    <App />
  </div>
);
