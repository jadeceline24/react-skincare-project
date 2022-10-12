import React, { useState } from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon,NavMenu, NavLinks, NavItems,ShopIcon, MenuIcon, MenuContainer,NavSocial, MenuText} from './NavbarStyle.js'
import {AiOutlineMenu, AiOutlineClose, AiOutlineShopping,} from 'react-icons/ai'
import {FiInstagram,FiFacebook, FiYoutube} from 'react-icons/fi'
import {FaPinterestP} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {menuData} from '../../data/menu'
import { useRef, useEffect } from 'react'
import  gsap from "gsap";

const Navbar = () => {

  const [show, setShow] = useState(false)

  const ref = useRef();
  useEffect( ()=>{
      const el = ref.current;
    gsap.to(el, {
      duration: 1.8,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    })
  },[])

  return (
    <IconContext.Provider value={{size: '30px',  display: "flex", justifyContent: "center"}}>
    <Nav show={show} data-scroll-section>
      <NavbarContainer>
        
        <MenuIcon show={show} onClick={() => setShow(!show)}>
						{show ? <AiOutlineClose /> : <AiOutlineMenu />}
            <MenuText show={show}>MENU</MenuText>
        </MenuIcon>
        
        

      <MenuContainer show={show}>
      
        <NavMenu >  
        
        {menuData.map((data, index) => (
            <NavItems key={index}>
              <NavLinks  className='navlinks' onClick={() => setShow(!show)}>{data.text}</NavLinks>
            </NavItems>
        ))} 
        </NavMenu>

        <NavSocial>
          <FiFacebook />
          <FiInstagram />
          <FaPinterestP />
          <FiYoutube />
        </NavSocial>
      </MenuContainer>     
          
        

      <NavLogo to='/'>
            <NavIcon show={show}></NavIcon>
            
        </NavLogo>
        <ShopIcon show={show}>CART<AiOutlineShopping /></ShopIcon>

      </NavbarContainer>
    </Nav>
    </IconContext.Provider>
  )
}

export default Navbar