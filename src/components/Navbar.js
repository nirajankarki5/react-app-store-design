import { IoNotifications, IoSearchOutline } from "react-icons/io5";

import styles from "./navbar.module.css";

const Navbar = ({ path }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.heading}>
        {/* MAKING FIRST LETTER CAPITAL */}
        {path === "/"
          ? "Overview"
          : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
      </h1>
      <div className={styles["nav-actions"]}>
        <button className={styles["icon-btn"]}>
          <IoNotifications className={styles.icon} />
        </button>
        <input type="text" placeholder="Search" className={styles.input} />
        <IoSearchOutline className={styles.search} />

        <img src="/images/user.jpg" alt="user" className={styles.user} />
      </div>
    </nav>
  );
};

export default Navbar;
