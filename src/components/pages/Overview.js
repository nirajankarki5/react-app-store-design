import { Link } from "react-router-dom";
import styles from "./overview.module.css";

const Overview = () => {
  return (
    <section className="main-container">
      <div className={styles.cover}>
        <div className={styles["cover-details"]}>
          <div>
            <Link to="/">GRAPHICS AND DESIGN</Link>
            <h4>Vectornator: Design Software</h4>
            <p>
              Create designs, interfaces and beautiful illustrations with this
              tool
            </p>
          </div>
          <Link to="/" className={styles["download-btn"]}>
            Download
          </Link>
        </div>

        <img
          className={styles["cover-img"]}
          src="/images/vectornator.png"
          alt="Vectornator: Design Software"
        />
      </div>
    </section>
  );
};

export default Overview;
