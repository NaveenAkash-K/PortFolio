// ProgressBar.tsx

import React from "react";
import styles from "../../styles/UI/ProgressBar.module.css";

const ProgressBar: React.FC<{ percentage: number; isLoading: boolean }> = (
  props
) => {
  return (
    <div className={styles.progressOutline}>
      {props.isLoading && <div className={styles.loading} />}
      <div
        className={styles.progress}
        style={{ width: props.percentage + "%" }}
        />
    </div>
  );
};

export default ProgressBar;
