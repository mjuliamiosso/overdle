import React, { ReactNode } from "react";
import styles from "./QuestionBox.module.scss";

interface QuestionBoxProps {
  text: string;
  clue?: ReactNode;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ text, clue }) => {
  return (
    <div className={styles.questionBox}>
      <p className={styles.text}>{text}</p>
      <p className={styles.clue}>{clue}</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Digite o nome do personagem"
      />
    </div>
  );
};

export default QuestionBox;
