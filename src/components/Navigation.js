import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const aStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    outline: 'none'
  }
  return (
    <div>
      <nav className='navbar' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <li><a className='active' href='/'>Home</a></li>
          <li><a style={aStyle} href='#news'>News</a></li>
          <li><a style={aStyle} href='#about'>About</a></li>
          <li><a style={aStyle} href='../contact'>Contact</a></li>

          <div className='switch-button' style={{ position: 'absolute'}}>
            <a className='switch-mode' href='#' onClick={toggle}
              style={aStyle}
              data-testid="toggle-theme-btn"
            >
              Switch Nav to {!dark ? 'Dark' : 'Light'} mode
            </a>
          </div>
        </ul>
      </nav>
    </div>
  )
}
