import React from 'react'
import Vid from '../../images/video1.mp4'
import ImageText1 from '../../images/imagetext1.jpg'
import ImageText2 from '../../images/imagetext2.jpg'
import ImageText3 from '../../images/imagetext3.jpg'
import ImageText4 from '../../images/imagetext4.jpg'
import ImageText5 from '../../images/imagetext5.jpg'
import {VideoBox, ContentVideo, AboutContainer,AboutText, AboutBtn,} from './VideoStyle'
import  gsap from "gsap";
import { useRef } from 'react'
import { useEffect } from 'react'

const Video = () => {

  let imageone = useRef(null)
  let imagetwo = useRef(null)
  let imagethree = useRef(null)
  let imagefour = useRef(null)
  let imagefive = useRef(null)
  let about = useRef(null)
  let vid = useRef(null)

  useEffect ( () => {
    
    gsap.timeline({scrollTrigger:{
        trigger: about,
        start: "20% center", 
        end: '80% center',
        pin: about, 
        pinSpacing: true, //not overlap
        ease:'power2',
        }});

    const tl2 = gsap.timeline({scrollTrigger:{
      trigger: vid,
      start: "top top", 
      end: 'bottom center',
      toggleActions:"restart complete reverse reset",
      ease:'power2',
      scrub: 1,
      }});   
        tl2.to([imageone,imagetwo,imagethree,imagefour,imagefive],{
            scale:1,
            opacity: 1,
        })    
   
  }, [])

  return (
    <>
        <VideoBox ref={el => {vid = el}}>
      <ContentVideo autostart autoPlay muted loop src={Vid} type="video/mp4" />
      </VideoBox>
    
      <AboutContainer  ref={el => {about = el}}>
        <AboutText  id='#headline' >WE craft SKINCARE 
        <span className='imageone line'><img ref={el => {imageone = el}} src={ImageText1} alt="" /></span> USING THE MOST 
        <span className='imageotwo line'><img ref={el => {imagetwo = el}} src={ImageText2} alt="" /></span>
         EXQUISITE ingredients FROM THE 
        <span className='imagethree line'><img ref={el => {imagethree = el}} src={ImageText3} alt="" /></span> plant , EARTH 
        <span className='imagefour line'><img ref={el => {imagefour = el}} src={ImageText4} alt="" /></span>, AND mineral 
        <span className='imagefive line'><img ref={el => {imagefive = el}} src={ImageText5} alt="" /></span> 
        REALMS.</AboutText>
        <AboutBtn darkBg lightText>About Us</AboutBtn>
      </AboutContainer>
    </>
  )
}

export default Video