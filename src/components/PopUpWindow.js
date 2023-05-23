import React from 'react';

const styles = {
  popUpContainer: `
    absolute
    flex
    w-screen
    h-screen
    justify-center
    items-center
  `,
  popUp: `
    h-fit
    bg-white
    rounded
    p-4
    text-red-500
  `
}

export default function PopUpWindow({ setShowOverlay }) {
  return (
    <div
      className={styles.popUpContainer}
      onClick={() => setShowOverlay(false)}
    >
      <div className={styles.popUp}>
        The provided password is wrong!
      </div>
    </div>
  )
}
