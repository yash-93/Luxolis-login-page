import React from 'react';

const styles = {
  overlay: `
    absolute
    w-screen
    h-screen
    bg-black
    opacity-60
  `
}

export default function Overlay() {
  return (
    <div className={styles.overlay}></div>
  )
}
