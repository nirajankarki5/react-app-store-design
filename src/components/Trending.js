import { trendingList } from "../data/trending-list";
import { Link } from "react-router-dom";
import styles from "./trending.module.css";

const Trending = () => {
  return (
    <aside className={styles.trending}>
      <div className={styles["trending-container"]}>
        <header className={styles.heading}>
          <h3>Trending</h3>
          <Link to="/">Show all</Link>
        </header>
        <ul>
          {trendingList.map((item) => {
            return (
              <li key={item.id}>
                <Link to="/" className={styles["trending-list"]}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                  />
                  <div className={styles.name}>
                    <h5>{item.name}</h5>
                    <p>{item.type}</p>
                  </div>
                  <button className={styles["download-btn"]}>Download</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles["bring-you-home-container"]}>
        <img
          src="/images/bring-you-home.jpg"
          alt="bring you home"
          className={styles["bring-you-home-img"]}
        />
        <h3>Bring You Home</h3>
        <p>Puzzle Game</p>
        <button>$21.50</button>
      </div>
    </aside>
  );
};

export default Trending;
