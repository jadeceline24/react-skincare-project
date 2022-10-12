import React from 'react'
import HeroImg from '../../images/HeroImg.jpg'
import {HeroSection, HeroContainer, HeroImage,HeroHeading,HeroPara,HeroBtn, HeroBox} from './HeroStyle'
import  gsap from "gsap";
import SplitText from '../../hook/SplitText3.min.js'
import { useEffect } from 'react'
import { useRef } from 'react';


const Hero = () => {
  let textItem = useRef(null)
  let conImage = useRef(null)

  useEffect( ()=>{
    const split = new SplitText('#header-text',{
      type: 'lines',
      linesClass: "lineChildren",
    })

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    let tl = gsap.timeline()
   
    gsap.set(conImage, {scale:1.3})
    tl.to(conImage, {
      duration: 2,
      scale:1,
      
      
  })
  gsap.to(split.lines, {
    duration: 1.8,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: "power2",
  })
  gsap.to(textItem, {
      duration: 1.8,
      opacity: 1,
      y: 0,
      ease: 'power3.Out',
      stagger: 1,
      delay:.4,
    })
    
    

    
  },[])
  return (
    <HeroSection>
        <HeroContainer>
          <HeroImage ref={el => {conImage = el}} src={HeroImg} alt="Skincare"></HeroImage>
            <HeroBox>
              <HeroHeading id="header-text">SKINCARE FOR BODY AND MIND</HeroHeading>
                <HeroPara ref={el => {textItem = el}}>We create pure, traceable and ultra-potent formulas for resilient, radiant skin and greater wellbeing. </HeroPara>
                <HeroBtn lightBg darkhov lighthov>
                  <span className='btn-text'>SHOP NOW</span>
                  
                </HeroBtn>
                
            </HeroBox>  
        </HeroContainer>
    </HeroSection>
  )
}

export default Hero