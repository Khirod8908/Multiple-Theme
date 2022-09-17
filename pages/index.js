import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Click button to change Theme</h1>
      <div>
        <button
          onClick={() =>
            document.body.setAttribute('data-theme', 'light-theme')
          }
        >
          Light
        </button>
        <button
          onClick={() => document.body.setAttribute('data-theme', 'dark-theme')}
        >
          Dark
        </button>
        <button
          onClick={() => document.body.setAttribute('data-theme', 'sea-theme')}
        >
          Sea Wave
        </button>
        <button
          onClick={() =>
            document.body.setAttribute('data-theme', 'sharp-theme')
          }
        >
          Sharp
        </button>
      </div>
    </div>
  );
}
