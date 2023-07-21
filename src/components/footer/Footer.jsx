import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import facebook from "/public/1 .png";
import instagram from "/public/2 .png";
import twitter from "/public/3 .png";
import youtube from "/public/4 .png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src={facebook}
          width={15}
          height={15}
          className={styles.icon}
          alt="Facebook Account"
        />
        <Image
          src={twitter}
          width={15}
          height={15}
          className={styles.icon}
          alt="twitter"
        />
        <Image
          src={youtube}
          width={15}
          height={15}
          className={styles.icon}
          alt="youtube"
        />
        <Image
          src={instagram}
          width={15}
          height={15}
          className={styles.icon}
          alt="instagram "
        />
      </div>
    </div>
  );
};

export default Footer;
