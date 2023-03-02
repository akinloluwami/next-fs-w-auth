import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <button className={styles.button}>Login with GitHub</button>
        <button className={styles.button}>Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
