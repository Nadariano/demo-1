import React from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'
export default function Navigation() {
  // const { theme, toggle, dark } = useContext(ThemeContext)
  // const aStyle = {
  //   backgroundColor: theme.backgroundColor,
  //   color: theme.color,
  //   outline: 'none'
  // }
  // return (
  //   <div>
  //     <nav className='navbar' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
  //       <ul>
  //         <li><a className='active' href='/'>Home</a></li>
  //         <li><a style={aStyle} href='#news'>News</a></li>
  //         <li><a style={aStyle} href='#about'>About</a></li>
  //         <li><a style={aStyle} href='../contact'>Contact</a></li>

  //         <div className='switch-button' style={{ position: 'absolute'}}>
  //           <a className='switch-mode' href='#' onClick={toggle}
  //             style={aStyle}
  //             data-testid="toggle-theme-btn"
  //           >
  //             Switch Nav to {!dark ? 'Dark' : 'Light'} mode
  //           </a>
  //         </div>
  //       </ul>
  //     </nav>
  //   </div>

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
