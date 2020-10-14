import Head from "next/head";
import RecordAudio from "../container/RecordAudio";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <RecordAudio />
    </div>
  );
}
