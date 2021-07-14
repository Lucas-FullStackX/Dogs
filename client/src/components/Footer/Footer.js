import React from "react";
import styles from "./Footer.module.css";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
export default function Footer() {
  return (
    <div className={styles.card}>
      <p>About Me</p>
      <a href="https://github.com/Lucas-FullStackX">
        <GoMarkGithub></GoMarkGithub>
      </a>
    </div>
  );
}
