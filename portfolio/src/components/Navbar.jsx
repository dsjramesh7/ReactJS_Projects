import React from 'react'

const Navbar = ({show}) => {
  return (
    <nav className={show ? 'nav mobile-nav': 'nav'}>Navbar</nav>
  )
}

export default Navbar