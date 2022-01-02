import React from "react";

import styles from "./GameThumbnail.module.scss";

const GameThumbnail = ({ imageUrl }) => {
  return (
    <div className={styles.thumbnail}>
      <img src={imageUrl} />
    </div>
  );
};

export default GameThumbnail;
