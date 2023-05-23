import React from 'react';

import Cart from '../static/Cart.svg'

const styles = {
  brand: `
    mb-12
  `
}

export default function Brand() {
  return (
    <img
      src={Cart}
      className={styles.brand}
      alt='BrandIcon' />
  )
}
