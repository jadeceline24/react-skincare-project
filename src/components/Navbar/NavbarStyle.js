import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";
import {ReactComponent as logo} from '../../images/Logo2.svg'

export const Nav = styled.nav `
    margin-bottom: -80px;
    height: 70px;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    background-color: ${({ show }) => (show ? '#1E1E1E' : 'transparent')};
    transition: all 0.6s ease-in-out;
    
`

export const NavbarContainer = styled(Container)`
    display: flex;
	justify-content: space-between;
    align-items: center;
`
export const NavLogo = styled(Link)`
    display: flex;
	z-index: 99;
    cursor: pointer;
    
`
export const NavIcon = styled(logo)`
  height: 100%;
  width: 7rem;
  display: inline-block;
  fill: ${({ show }) => (show ? '#F1EBE7' : '#1E1E1E')};
    
`
export const MenuIcon = styled.div`
        color: ${({ show }) => (show ? '#F1EBE7' : '#1E1E1E')};
		font-size: clamp(1.25rem, 0.59vw + 1.1rem, 1.58rem);
		cursor: pointer;
        display: flex;
        align-items:center;
        justify-content:center;
        
        
`
export const MenuText = styled.p`
        color: ${({ show }) => (show ? '#F1EBE7' : '#1E1E1E')};
		font-size: clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
        margin-left: 2px ;
		
`
export const ShopIcon = styled.div`
		font-size: clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
		cursor: pointer;
        color: ${({ show }) => (show ? '#F1EBE7' : '#1E1E1E')};
        display: flex;
        align-items:flex-end;
`
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    position: absolute;
    top:70px;
    left: 0;
    width: 500px;
    height: 100vh;
    background-color:#1E1E1E;
    z-index: -10;
    opacity: ${({ show }) => (show ? 1 : 0)};
	visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
	transform: translateY(${({ show }) => (show ? '0' : '-10px')});
    transition: opacity 0.4s ease;
    
    @media (max-width: 30em){
        width: 100%;
    }
`
export const NavMenu = styled.ul`  
    
    padding-top: 20rem;
    @media (max-width: 48em){
        padding-top: 5rem;

    }
    @media (max-width: 30em){
        padding-top: 5rem;
    }
`
export const NavItems = styled.li`
    height: 80px;
    cursor: pointer;
    
`
export const NavLinks = styled(Link)`
    font-size: clamp(3.05rem, 3.46vw + 2.19rem, 5rem);
    color: #F1EBE7;
    position: relative;

   

    &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #F1EBE7;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.4s ease-in-out;
    }
    &:hover:before{
        visibility: visible;
        transform: scaleX(1);
    }
   

`
export const NavSocial = styled.div`
    padding: 5rem;
    display: flex;
    align-items:center;
    justify-content: space-around;
    cursor: pointer;
    width: 100%;

   
`