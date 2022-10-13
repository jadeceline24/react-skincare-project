import React, { useEffect } from 'react'
import {MovingText, ContentContainer, ContentImages1,ContentImages2,
    ContentText,MovingBox,Box, ContentOne, ContentTwo, ContentThree,ContentFour,TextWrap} from './ContentStyle'
import  gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from '../../images/Img1.jpg'
import Img2 from '../../images/Img2.jpg'
import Img3 from '../../images/Img3.jpg'
import Img4 from '../../images/Img4.jpg'
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Content = () => {

  let image1 = useRef(null)
  let image2 = useRef(null)
  let image3 = useRef(null)
  let image4 = useRef(null)
  let text = useRef(null)
  let content = useRef(null)

  
  
  useEffect ( () => {
    let mm = gsap.matchMedia()

      mm.add({isDesktop: "(min-width: 769px)",
              isMobile:"(max-width: 768px)",
    }, (context) => {

      let { isDesktop } = context.conditions

        let tl = gsap.timeline({scrollTrigger:{
          trigger: content,
          // toggleActions:"restart complete reverse reset",
          //toggleClass: 'red',
          scrub: true,
          start: 'top center',
          end: () => `${document.querySelector(".square").offsetHeight}`,
          duration: 3,
          ease: 'none',
    }});
    
    
        tl.to(image1, {
          y: isDesktop ? 350 : 0,
        },0).to(image2, {
          y: isDesktop ? -350 : 0,
        },0).to(image3, {
          y: isDesktop ? 350 : 0,
        },0).to(image4, {
          y: isDesktop ? -350 : 0,
        },0).to(text, {
          scale: 1,
          opacity: 1,
        },0)
        

      })
      

  }, [])

  return (
    <>
    <MovingBox>
      <Box>
        <MovingText>THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE.</MovingText>
      </Box>
      <Box>
        <MovingText>THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE. THE FUTURE OF NATURAL SKINCARE.</MovingText>
      </Box>

    </MovingBox>


    <ContentContainer ref={el => {content = el}}>
      <TextWrap>
        <ContentText ref={el => {text = el}}>We create pure, traceable and ultra-potent formulas for resilient, radiant skin and greater wellbeing.
          </ContentText>
        </TextWrap>

        
        <ContentOne>
          <ContentImages1 ref={el => {image1 = el}} src={Img3} data-scroll></ContentImages1>
        </ContentOne>
        <ContentTwo>
          <ContentImages2 ref={el => {image2 = el}} src={Img2} data-scroll></ContentImages2>
        </ContentTwo>
        
        
        <ContentThree>
          <ContentImages2 ref={el => {image3 = el}} src={Img4} data-scroll></ContentImages2>
        </ContentThree>
        <ContentFour>
          <ContentImages2 className='square' ref={el => {image4 = el}} src={Img1} data-scroll></ContentImages2>
        </ContentFour>
        
       

    </ContentContainer>



    </>
  )
}

export default Content