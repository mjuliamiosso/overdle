import React from "react";
import Image from "next/image";
import styles from "./AnswerClassic.module.scss";

interface AnswerClassicProps {
  hero: string;
  gender: string;
  role: string;
  affiliation: string;
  region: string;
  release: string;
  background: string;
}

const AnswerClassic: React.FC<AnswerClassicProps> = ({
  hero,
  gender,
  role,
  affiliation,
  region,
  release,
  background,
}) => {
  return (
    <div className={styles.heroInfo}>
      <Image
        src={hero}
        width={100}
        height={100}
        alt={"hero"}
        className={styles.box}
      />
      <div className={styles.box} style={{ background }}>
        {gender}
      </div>
      <div className={styles.box} style={{ background }}>
        {role}
      </div>
      <div className={styles.box} style={{ background }}>
        {affiliation}
      </div>
      <div className={styles.box} style={{ background }}>
        {region}
      </div>
      <div className={styles.box} style={{ background }}>
        {release}
      </div>
    </div>
  );
};

export default AnswerClassic;
