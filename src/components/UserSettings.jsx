import styles from "./UserSettings.module.css";

export default function UserSettings() {
  return (
    <section
    className={styles['portal_user-settings']}
    >
      <img src="https://media.wbur.org/wp/2018/12/1203_knopfler-1000x667.jpg" alt="userImg" className={styles['image_user-nav']}/>
      <section className="hidden container_user-settings">
        <h3>UserName</h3>
        <ul>
          <li>placeholder Setting</li>
          <li>placeholder Setting</li>
          <li>placeholder Setting</li>
          <li>placeholder Setting</li>
          <li>placeholder Setting</li>
        </ul>
      </section>
    </section>
  );
}
