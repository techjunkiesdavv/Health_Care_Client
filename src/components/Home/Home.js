import React from "react";
import styles from "./Home.module.scss";
function Home() {
  return (
    <div className={styles.Home}>
     <div className={styles.description}>
     <p className={styles.title}>We are national Leaders in medicine</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button>Make Appointment</button>
     </div>
    </div>
  );
}

export default Home;
