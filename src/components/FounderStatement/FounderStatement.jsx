import React from "react";
import styles from "./FounderStatement.module.scss";

function FounderStatement(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Founder's Statement</h2>

      <blockquote className={styles.quote}>
        "Our goal is to simplify complex and traditionally opaque investment
        markets. By leveraging digital twins, tokenization, and interactive
        visualization, we transform intricate financial and asset data into
        clear, accessible, and user-friendly experiences. We make investment
        opportunities understandable and convenient for everyone, regardless of
        their background."
      </blockquote>

      <div className={styles.author}>
        <div className={styles.avatarWrapper}>
          <img
            src="/api/placeholder/48/48"
            alt="Founder"
            className={styles.avatar}
          />
        </div>
        <div className={styles.authorInfo}>
          <h3 className={styles.authorName}>Magomed Aliev</h3>
          <p className={styles.authorRole}>Founder</p>
        </div>
      </div>
    </div>
  );
}

export default FounderStatement;
