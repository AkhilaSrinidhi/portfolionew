import Logo from '../../assets/logo.jpg'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import {TfiPackage} from 'react-icons/tfi' 
import { IconName } from "react-icons/tfi";
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="lotx">Akhila Srinidhi </div>
        
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'><TfiPackage/></button>
      </div>
    </nav>
  )
}

export default Navbar