import React from "react";
import styles from "./page.module.scss";
import { MdOutlineQuestionMark } from "react-icons/md";
import MenuButton from "@/components/MenuButton/MenuButton";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { HiOutlineFire } from "react-icons/hi";

const page = () => {
  return (
    <section className={styles.classic}>
      <div className="container">
        <img className={styles.logo} src="logo.png" alt="logo-overdle" />
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
            background={"#D73D3D"}
          />
          <MenuButton
            icon={<HiOutlineFire />}
            link={"/ability"}
            background={"#66DA30"}
          />
          <MenuButton
            icon={<FaRegSmile />}
            link={"/emoji"}
            background={"#BD2FD4"}
          />
        </div>
      </div>
    </section>
  );
};

export default page;