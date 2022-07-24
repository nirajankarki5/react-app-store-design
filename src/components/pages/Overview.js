import { Link } from "react-router-dom";
import { menuList } from "../../data/menu-list";
import { topGamesApp } from "../../data/top-games-app";

import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

import styles from "./overview.module.css";

const Overview = () => {
  // SLIDE LEFT OR RIGHT BY CLICKING ICON
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <section className="main-container">
      <header className={styles.cover}>
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
      </header>
      <div className={styles.heading}>
        <h3>Categories</h3>
        <Link to="/">Show all</Link>
      </div>
      <menu className={styles["menu-container"]}>
        {menuList.map((menu) => {
          return (
            <Link to={menu.link} className={styles.menu} key={menu.id}>
              <menu.icon className={styles["menu-icon"]} />
              <p className={styles["menu-text"]}>{menu.name}</p>
            </Link>
          );
        })}
      </menu>

      <div className={styles.heading}>
        <h3>Top Games & Apps</h3>
        <Link to="/">Show all</Link>
      </div>

      <IoChevronBackOutline
        onClick={slideLeft}
        className={styles["slide-icon-left"]}
      />
      <div className={styles.app} id="slider">
        {topGamesApp.map((item) => {
          return (
            <div className={styles.card}>
              <img
                className={styles["card-img"]}
                src={item.image}
                alt={item.name}
              />
              <h4>{item.name}</h4>
              <div className={styles.details}>
                <p>{item.category}</p>
                <button>{item.price}</button>
              </div>
            </div>
          );
        })}
      </div>
      <IoChevronForwardOutline
        onClick={slideRight}
        className={styles["slide-icon-right"]}
      />
    </section>
  );
};

export default Overview;
