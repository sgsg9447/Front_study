import logo from "./logo.svg";
// import './App.css';
// import './App.scss';
import styles from "./App.module.css";
import Button from "./components/Button";

console.log(styles);
// {
//   App: "App_App__B2Ebb"
// App-link: "App_App-link__XPeK4"
// App-logo-spin: "App_App-logo-spin__1up6W"
// header: "App_header__fhC8n"
// logo: "App_logo__7Edbg"
// }
function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
