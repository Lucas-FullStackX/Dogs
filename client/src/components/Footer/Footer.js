import React from "react";
import styles from "./Footer.module.css";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_right}>
        <a href="https://www.linkedin.com/in/lucas-leguizamo-603117208/">
          <SiLinkedin></SiLinkedin>
        </a>
        <a href="https://github.com/Lucas-FullStackX">
          <GoMarkGithub></GoMarkGithub>
        </a>
      </div>

      <div className={styles.footer_left}>
        <span>About Me</span>
        <p>My first Full Stack project about a dog app. You can contact me.</p>
      </div>
    </div>
  );
}
