import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="name">Home</h1>
      <p>this is home</p>
    </div>
  );
}