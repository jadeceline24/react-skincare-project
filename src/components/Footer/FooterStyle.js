import { Link } from "react-router-dom"
import styled from "styled-components"
import { Container } from "../../globalStyles"
import {ReactComponent as logo} from '../../images/Logo2.svg'

export const FooterContainer = styled(Container)`
    height: auto;
    display: flex ;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    background: #1E1E1E;
    gap: 100px;
    
    @media screen and (max-width:30em){
        
        gap: 50px;

    }
    
`
export const FooterWrap = styled.div`
    
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-content: center;
    width: 100%;
    gap: 100px;
    padding-top: 2rem;
    color: #F1EBE7;
    font-family: 'Red Hat Display', sans-serif;
    
    @media screen and (max-width:48em){
        grid-template-areas: 'one one one'
                             'two three three'   ;
        gap: 50px;
        justify-items:center;
        align-items: center;
    }
`

export const SubscribeForm = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 30px;
    position: relative;
    @media screen and (max-width:48em){
        grid-area: one;
        width: 100%
    }
    
`


export const SubscribeLogo = styled(logo)`
  height: auto;
  width: 7rem;
  fill: #F1EBE7;
`
export const SubscribeText = styled.h3`
    color: #F1EBE7;
`
export const SubscribeInput = styled.input`
    width: 100%;
    background: #1E1E1E;
    border-bottom: 1px solid #F1EBE7;
    color: #F1EBE7;
    padding: 15px 0;
    font-size: 1rem;
`
export const SubscribeBtn = styled.div`
    cursor: pointer;
    position: relative;
    font-size: 1.2rem;
    padding-top: 13px;

    &:after{
        content: "Join";
        position: absolute;
        top:15px;
        right: 25px;
        color: #F1EBE7;
        font-size: 1rem;
    }
` 

export const NavLink = styled(Link)`
    display: inline-block; 
	text-align: left; 
    color: #F1EBE7;

`
export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
    font-size: clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
    cursor: pointer;
    @media screen and (max-width:48em){
        grid-area: two;
    }
`
export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Social = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
    cursor: pointer;
    position: relative;

    h3{
        color: #F1EBE7;
        font-size: clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
    }
    @media screen and (max-width:48em){
        grid-area: three;
    }
      
`
export const SocialWrap = styled.div`
 display: flex;
 flex-direction:column ;
vertical-align: bottom;

    

    

`
export const SocialIcon = styled.div`
    padding: 10px 5px;
    display: flex;
    justify-content: center;
    & > span{
        margin-left: 20px;
    }
    
`

export const CopyCon = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    @media screen and (max-width:30em){
        flex-direction: column;
        justify-content:center;
        align-items: center;
        gap: 30px;

    }

`
export const Copyright = styled.p`
       font-size: clamp(0.8rem, 0.16vw + 0.76rem, 0.89rem);
`