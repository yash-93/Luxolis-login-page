import React from 'react';

const styles = {
  button: `
    w-75
    bg-white
    h-11
    rounded
    font-montserrat
    text-luxolis-blue
    font-semibold
    text-base
    shadow-luxolis-shadow
    mt-8
  `
}

export default function Button({ type }) {
  return (
    <button
      className={styles.button}
      type={type || 'button'}>
      LOGIN
    </button>
  )
}
