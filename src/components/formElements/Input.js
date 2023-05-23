import React from 'react';

const styles = {
  textBox: `
    w-75
    h-11
    rounded
    border
    flex
    items-center
    mt-4
    px-1
  `,
  icon: `
    px-1
  `,
  input: `
    w-full
    font-light
    text-sm
    pr-1
    pl-3
    bg-transparent
    uppercase
    text-white
    outline-0
  `
}

export default function Input({ children, type, name, placeholder, value, handleChange }) {
  return (
    <>
      <div
        className={styles.textBox}>
        <div
          className={styles.icon}>
          {children}
        </div>
        <input
          className={styles.input}
          type={type || 'text'}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e)} />
      </div>
    </>
  )
}
