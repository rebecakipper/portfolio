import { fancyUtil } from './utils';
import styles from './loginButton.module.css';

export const LoginButton = () => {
  return (
    <button onClick={fancyUtil} className={styles.btn}>
      loginButton
    </button>
  );
};
