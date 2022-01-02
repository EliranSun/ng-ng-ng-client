import React from "react";
import { GameThumbnail } from "../GameThumbnail";

import styles from "./GameCategories.module.scss";

const GameCategories = ({ categories = [] }) => {
  return (
    <div className={styles.categories}>
      {categories.map(({ id, name, items }) => (
        <div key={id} className={styles.category}>
          <h1>{name}</h1>
          <div className={styles["game-thumbnails"]}>
            {items.map(GameThumbnail)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCategories;
