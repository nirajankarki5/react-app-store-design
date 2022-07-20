import { sidebarList } from "../data/sidebar-list";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

import styles from "./sidebar.module.css";
import { useState } from "react";

const Sidebar = () => {
  // inititlize with window.location.pathname because when user reloades the page, active state remains on selected item on sidebar
  const [path, setPath] = useState(window.location.pathname);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <section className={styles["sidebar-heading"]}>
          <img
            src="/images/app-store.png"
            alt="app store logo"
            className={styles.img}
          />
          <h2>AppStore</h2>
        </section>

        <ul className={styles["sidebar-list"]}>
          {sidebarList.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  setPath(window.location.pathname);
                  console.log(path);
                }}
              >
                <Link
                  to={item.link}
                  className={`${styles["list-item"]} ${
                    item.link === path ? styles.active : ""
                  }`}
                >
                  <item.icon className={styles.icons} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.bottom}>
        <Link to="/">
          <img
            className={styles["apple-music-img"]}
            src="/images/apple-music.jpeg"
            alt="apple music"
          />
        </Link>
        <Link to="/" className={styles["list-item"]}>
          <IoLogOut className={styles.icons} /> <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
