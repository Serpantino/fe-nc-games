import styles from "./NewCommentModal.module.css";

export default function NewCommentModal({setShowModal}) {
  return (
    <section className={styles["container_new-comment"]}>
      <header className={styles["header_new-comment"]}>
          <h2 className={styles["title_new-comment"]}>New Comment</h2>
        <button
          aria-label="close new comment window"
          className={styles["button_close"]}
          onClick={(e)=> {e.preventDefault(); setShowModal(false)}}
        >
          X
        </button>
      </header>
      <form className={styles["form_new-comment"]}>
        <textarea placeholder="This is the greatest thing ever!" rows="10" />
        <button className={styles.button_submit}>Submit Comment</button>
      </form>
    </section>
  );
}
