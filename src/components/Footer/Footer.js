import React from 'react'
import {FooterContainer, SubscribeForm, Social, SubscribeText,SubscribeInput,SubscribeLogo, SubscribeBtn, Copyright,Navigation, NavLink, Form,SocialWrap, CopyCon, FooterWrap, SocialIcon} from './FooterStyle'
import {FiInstagram,FiFacebook, FiYoutube, FiArrowRight} from 'react-icons/fi'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
            <SubscribeForm>
                <SubscribeLogo />

                <SubscribeText>Subscribe to our Newsletter for 20%off</SubscribeText>
                 <Form>
                <SubscribeInput type='text' placeholder="Your Email"></SubscribeInput>
               
                <SubscribeBtn className='btn'><FiArrowRight />
                </SubscribeBtn>
                </Form>   
            </SubscribeForm>

            <Navigation>
                <NavLink>Cart</NavLink>
                <NavLink>Login</NavLink>
                <NavLink>Products</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Newsletter</NavLink>
            </Navigation>

            <Social>
                
                <SocialWrap>
            
                    <SocialIcon><FiFacebook /> <span>Facebook</span></SocialIcon>
                    <SocialIcon><FiInstagram /> <span>Instagram</span></SocialIcon>
                    <SocialIcon><FaPinterestP /> <span>Pinterest</span></SocialIcon>
                    <SocialIcon><FiYoutube /> <span>YouTube</span></SocialIcon>
                    
                </SocialWrap>  
            </Social>
            </FooterWrap>

            <CopyCon>
                <Copyright>2022 Lapize©. All Right Reserve</Copyright>
                <Copyright>Designed & Developed by xCelinex</Copyright>
    
            </CopyCon>
            
        </FooterContainer>
        
    </>
  )
}

export default Footer