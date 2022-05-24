import React from 'react'
import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button/Button'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar__container'>
        <img src={logo} alt="logo" />
        <Button  className='btn secondary' label='Request Beta Access'/>
    </div>
  )
}
