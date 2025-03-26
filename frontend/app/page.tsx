import React from "react";
import styles from "./page.module.scss";
import CardMode from "../components/CardMode/CardMode";
import MenuButton from "@/components/MenuButton/MenuButton";
import { HiQuestionMarkCircle, HiFire, HiOutlineFire } from "react-icons/hi";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaRegSmile, FaSmile } from "react-icons/fa";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <img className={styles.logo} src="logo.png" alt="logo-overdle" />
        <h2 className={styles.text}>Adivinhe os heróis de overwatch</h2>
        <div className={styles.header}>
          <MenuButton
            icon={<MdOutlineQuestionMark />}
            link={"/classic"}
            text={"Clássico"}
            background={"#12A1F1"}
            border="noRadius"
            show="block"
          />
          <MenuButton
            icon={<AiOutlineMessage />}
            link={"/quote"}
            text={"Falas"}
            background={"#D73D3D"}
            border="noRadius"
            show="block"
          />
          <MenuButton
            icon={<HiOutlineFire />}
            link={"/ability"}
            text={"Habilidades"}
            background={"#66DA30"}
            border="noRadius"
            show="block"
          />
          <MenuButton
            icon={<FaRegSmile />}
            link={"/emoji"}
            text={"Emoji"}
            background={"#BD2FD4"}
            border="noRadius"
            show="block"
          />
        </div>
        <div className={styles.cardGameModes}>
          <CardMode
            link="classic"
            background="tracer-card-filter.png"
            hoverBackground="tracer-card-no-filter.png"
            icon={<HiQuestionMarkCircle />}
            color="#12A1F1"
            title="Clássico"
            description="Consiga pistas a cada tentativa."
          />
          <CardMode
            link="quote"
            background="winston-card-filter.png"
            hoverBackground="winston-card-no-filter.png"
            icon={<AiFillMessage />}
            color="#D73D3D"
            title="Falas"
            description="Adivinhe com as falas do personagem."
          />
          <CardMode
            link="ability"
            background="dva-card-filter.png"
            hoverBackground="dva-card-no-filter.png"
            icon={<HiFire />}
            color="#66DA30"
            title="Habilidade"
            description="Uma habilidade, um herói."
          />
          <CardMode
            link="emoji"
            background="sombra-card-filter.png"
            hoverBackground="sombra-card-no-filter.png"
            icon={<FaSmile />}
            color="#BD2FD4"
            title="Emoji"
            description="Adivinhe com um conjunto de emojis."
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
