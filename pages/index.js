import styles from '../styles/Home.module.css';
// import AnimatedCursor from 'react-animated-cursor';
import { useState, useEffect } from 'react';

export default function Home() {
  // const [cursorColor, setCursorColor] = useState({
  //   r: '218',
  //   g: '218',
  //   b: '218',
  // });
  const lightButton = () => {
    document.body.setAttribute('data-theme', 'light-theme');
    // setCursorColor({ r: '218', g: '218', b: '218' });
  };
  const darkButton = () => {
    document.body.setAttribute('data-theme', 'dark-theme');
    // setCursorColor({ r: '255', g: '255', b: '255' });
  };
  const greenButton = () => {
    document.body.setAttribute('data-theme', 'green-theme');
    // setCursorColor({ r: '255', g: '244', b: '212' });
  };
  const redButton = () => {
    document.body.setAttribute('data-theme', 'red-theme');
    // setCursorColor({ r: '255', g: '213', b: '213' });
  };
  // const Cursor = () => {
  //   return (
  //     <AnimatedCursor
  //       innerSize={16}
  //       outerSize={16}
  //       // color={`${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}`}
  //       outerAlpha={0.2}
  //       innerScale={0.7}
  //       outerScale={5}
  //       clickables={['h1', 'button']}
  //       innerStyle={{
  //         backgroundColor: 'var(--desc-color)',
  //       }}
  //     />
  //   );
  // };
  // useEffect(() => {
  //   Cursor();
  // }, [Cursor]);

  return (
    <div className={styles.container}>
      <h1>Click button to change Theme</h1>
      {/* <Cursor /> */}
      <div>
        <button onClick={lightButton}>Light</button>
        <button onClick={darkButton}> Dark </button>
        <button onClick={greenButton}>Green</button>
        <button onClick={redButton}> red </button>
      </div>
    </div>
  );
}
