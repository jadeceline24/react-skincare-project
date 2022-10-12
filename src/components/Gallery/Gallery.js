import React, { useRef, useState } from 'react'
import {GalleryCon, ImageCon, GalleryWrap, GalleryItem, GalleryImage, GalleryText,GalleryTitle,Wrap} from './GalleryStyle'
import {photos} from '../../data/photos'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);



const Gallery = () => {
    const [active, setActive] = useState(-1)

    const ref = useRef(null)

    useEffect(() => {
    let sections = gsap.utils.toArray(".scroll .panel");
    let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    duration: 6,
    scrollTrigger: {
        trigger: ".scroll",
        pin: true,
        scrub: true,
        // markers: true,
        end: () => `+=${ref.current.offsetWidth}`
    }
    });
    }, []);

  return (
    <>
        <GalleryCon className='scroll'>
        {/* <GalleryTitle>Daily <br/>Skincare</GalleryTitle> */}
            <Wrap>
            <ImageCon className='container' ref= {ref}>
            
                {photos.map( ({id,src,title})=> {
                    const isActive = id === active;
                    return(
                    <GalleryWrap key={id} >
                    <GalleryItem className="gallery-item">
                          
                        <GalleryImage className="gallery-image panel"
                         onMouseEnter={()=>setActive(id)}
                         onMouseLeave={()=>setActive(-1)}
                        style={{backgroundImage: `url(${src})`}}>
                         
                            <GalleryText className={isActive && 'hover-text'}>
                                {title}
                            </GalleryText>
                                 
                        </GalleryImage>

                    </GalleryItem>
                    </GalleryWrap>
                    )
                })}
            </ImageCon>
            </Wrap>
        </GalleryCon>
    </>
  )
}

export default Gallery