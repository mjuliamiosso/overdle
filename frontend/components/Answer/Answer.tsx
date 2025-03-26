import React from "react";
import Image from "next/image";
import styles from "./Answer.module.scss";

interface AnswerProps {
  hero: string;
  name: string;
  background: string;
}

const Answer: React.FC<AnswerProps> = ({ hero, name, background }) => {
  return (
    <div className={styles.heroInfo}>
      <div>
        <Image
          src={hero}
          width={100}
          height={100}
          alt={"hero"}
          className={styles.hero}
        />
      </div>
      <div>
        <p className={styles.name} style={{ background }}>{name}</p>
      </div>
    </div>
  );
};

export default Answer;
