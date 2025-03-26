import React from "react";
import Image from "next/image";
import styles from "./AnswerClassic.module.scss";
import clsx from "clsx";

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
        width={50}
        height={50}
        alt={"hero"}
        className={clsx(styles.box, styles.box)}
      />
      <div className={clsx(styles.box, styles.box)} style={{ background }}>
        {gender}
      </div>
      <div className={clsx(styles.box, styles.box)} style={{ background }}>
        {role}
      </div>
      <div className={clsx(styles.box, styles.box)} style={{ background }}>
        {affiliation}
      </div>
      <div className={clsx(styles.box, styles.box)} style={{ background }}>
        {region}
      </div>
      <div className={clsx(styles.box, styles.box)} style={{ background }}>
        {release}
      </div>
    </div>
  );
};

export default AnswerClassic;
