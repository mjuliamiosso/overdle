import React from 'react'
import styles from './page.module.scss'
import CardMode from '../components/CardMode/CardMode'
import { HiQuestionMarkCircle, HiFire } from 'react-icons/hi';
import { AiFillMessage } from "react-icons/ai";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className='container'>
        <img
          className={styles.logo}
          src="logo.png"
          alt="logo-overdle"
        />
        <h2 className={styles.text}>
          Adivinhe os heróis de overwatch
        </h2>
        <div className={styles.gameModes}>
          <CardMode
            link='classic'
            background='tracer-card-filter.png'
            hoverBackground='tracer-card-no-filter.png'
            icon={<HiQuestionMarkCircle />}
            color='#12A1F1'
            title='Clássico'
            description='Consiga pistas a cada tentativa.'
          />
          <CardMode
            link='quote'
            background='winston-card-filter.png'
            hoverBackground='winston-card-no-filter.png'
            icon={<AiFillMessage />}
            color='#D73D3D'
            title='Falas'
            description='Adivinhe com as falas do personagem.'
          />
          <CardMode
            link='ability'
            background='dva-card-filter.png'
            hoverBackground='dva-card-no-filter.png'
            icon={<HiFire />}
            color='#66DA30'
            title='Habilidade'
            description='Uma habilidade, um herói.'
          />
          <CardMode
            link='emoji'
            background='sombra-card-filter.png'
            hoverBackground='sombra-card-no-filter.png'
            icon={<BsFillEmojiSmileFill />}
            color='#BD2FD4'
            title='Emoji'
            description='Adivinhe com um conjunto de emojis.'
          />
        </div>
      </div>
    </section>
  )
}

export default Home