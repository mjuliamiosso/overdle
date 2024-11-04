'use client'

import React, { useState } from 'react';
import styles from './CardMode.module.scss';
import Link from 'next/link';

interface CardModeProps {
  link: string;
  background: string;
  hoverBackground: string;
  icon: string;
  color: string;
  title: string;
  description: string;
}

const CardMode: React.FC<CardModeProps> = ({ link, background, hoverBackground, icon, color, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} >
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${isHovered ? hoverBackground : background})`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p style={{ color }} className={styles.icon}>
          {icon}
        </p>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>

  );
};

export default CardMode;