import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Posts.module.css";

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/fagnersro.png" />
          <div className={styles.authorInfo}>
            <strong>Fagner Henrique</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de mar 20:16" dataTime="2023-03-11 20:16:28">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seeu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
