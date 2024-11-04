'use client'

import React, { useState } from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import styles from './CardMode.module.scss';

interface CardModeProps {
  background: string;
  hoverBackground: string;
  color: string;
  title: string;
  description: string;
}

const CardMode: React.FC<CardModeProps> = ({ background, hoverBackground, color, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${isHovered ? hoverBackground : background})`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HiQuestionMarkCircle style={{ color }} className={styles.icon} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CardMode;