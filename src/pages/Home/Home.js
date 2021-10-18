import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Cultures from "../Cultures/Cultures";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <SideBar />
      <Cultures />
    </div>
  );
}

export default Home;
