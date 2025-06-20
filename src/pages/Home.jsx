import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import financoLogo from "../public/img/financeco-logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const authContext = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.companyLogo}
          src={financoLogo}
          alt="Financeco Logo"
        />

        <div className={styles.accOptions}>
          <i className={`fa fa-user ${styles.accItem}`}></i>
          <i className={`fa fa-gear ${styles.accItem}`}></i>
          <i
            onClick={authContext.logout}
            id="logout"
            className={`fa-solid fa-right-from-bracket ${styles.accItem}`}
          ></i>
        </div>
      </header>

      <aside className={styles.aside}>
        <div className={styles.switchSections}></div>
      </aside>

      <main className={styles.main}>
        <h1>Olá</h1>
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.card1}`}>
            <canvas id="meuGrafico"></canvas>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <canvas id="meuGrafico"></canvas>
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <canvas id="meuGrafico"></canvas>
          </div>
          <div className={`${styles.card} ${styles.card4}`}>
            <canvas id="meuGrafico"></canvas>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
