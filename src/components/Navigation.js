import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'
export default function Navigation() {

  return (
    <Navbar className='menu'
      alignLinks='right'
      brand={<span className='brand-logo'>Player Cards</span>}
      id='mobile-nav'
      menuIcon={<Icon>menu</Icon>}
    >
      <NavItem> <Link to='/'><Icon left>home</Icon>Home</Link></NavItem>
      <NavItem to='/about'><Link to='/about'><Icon left>info_outline</Icon>About</Link></NavItem>
      <NavItem to='/news'><Link to='/news'><Icon left>dvr</Icon>News</Link></NavItem>
      <NavItem href='/contact'><Link to='/contact'><Icon left>contacts</Icon>Contact</Link></NavItem>
    </Navbar>


  )



}
