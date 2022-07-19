import { IoGridSharp } from "react-icons/io5";
import { SiApplearcade } from "react-icons/si";
import { RiBarChart2Fill, RiSettings5Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import styles from "./sidebar.module.css";

const Sidebar = () => {
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
          <li>
            <a href="/" className={styles["list-item"]}>
              <IoGridSharp className={styles.icons} /> <span>Overview</span>
            </a>
          </li>

          <li>
            <a href="/" className={styles["list-item"]}>
              <SiApplearcade className={styles.icons} /> <span>Arcade</span>
            </a>
          </li>

          <li>
            <a href="/" className={styles["list-item"]}>
              <RiBarChart2Fill className={styles.icons} /> <span>Charts</span>
            </a>
          </li>

          <li>
            <a href="/" className={styles["list-item"]}>
              <FaDownload className={styles.icons} /> <span>Updates</span>
            </a>
          </li>

          <li>
            <a href="/" className={styles["list-item"]}>
              <RiSettings5Fill className={styles.icons} /> <span>Settings</span>
            </a>
          </li>
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
