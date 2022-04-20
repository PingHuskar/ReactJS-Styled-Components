import React from 'react'
import { NavBar,NavLogo } from '../styles/styledElements'
function Nav() {
  return (
    <>
    <NavBar>
        <NavLogo to='/'>
            MyReactSite
        </NavLogo>
    </NavBar>
    </>
  )
}

export default Nav