import Image from 'next/image'
import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button
} from 'react-bootstrap'
import { FiMenu } from "react-icons/fi"

import styles from '../../styles/Header.module.css'
import logo from '../../public/logo.png'

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.Container}>
      <Navbar.Brand href="#home">
        <Image
          src={logo}
          alt="Baxe Logo"
          height={43.94}
          width={158}
        />
      </Navbar.Brand>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <a href="#action" className={styles.Menu}>
          <FiMenu />
        </a>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header