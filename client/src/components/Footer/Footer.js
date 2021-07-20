import React from "react";
import styles from "./Footer.module.css";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin, SiPostgresql, SiRedux, SiCss3 } from "react-icons/si";
import { GrReactjs, GrNode } from "react-icons/gr";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_right}>
        <a href="https://www.linkedin.com/in/lucas-leguizamo-603117208/">
          <SiLinkedin />
        </a>
        <a href="https://github.com/Lucas-FullStackX">
          <GoMarkGithub />
        </a>
      </div>

      <div className={styles.footer_left}>
        <span>About Me</span>
        <p>My first Full Stack project about a dog app. You can contact me.</p>
        <br />
        <GrReactjs />
        <SiRedux />
        <GrNode />
        <SiPostgresql />
        <SiCss3 />
      </div>
    </div>
  );
}
