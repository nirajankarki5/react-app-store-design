import { sidebarList } from "../data/sidebar-list";
import { IoLogOut } from "react-icons/io5";

import styles from "./sidebar.module.css";

const Sidebar = () => {
  console.log(sidebarList);
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
              <li>
                <a href={item.link} className={styles["list-item"]}>
                  <item.icon className={styles.icons} />{" "}
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.bottom}>
        <a href="/">
          <img
            className={styles["apple-music-img"]}
            src="/images/apple-music.jpeg"
            alt="apple music"
          />
        </a>
        <a href="/" className={styles["list-item"]}>
          <IoLogOut className={styles.icons} /> <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
