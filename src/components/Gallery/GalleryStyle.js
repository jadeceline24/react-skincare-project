import styled from "styled-components";

export const GalleryCon = styled.section`
        width: 80vw;
        height: 80vh;
        z-index:3;
        
        
            .scroll {
            width: 80vw;
            height: 80vh;
            /*   overflow: auto; */
            }
         
   
`
export const Wrap = styled.div`
    width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
    
  `

export const ImageCon = styled.div`
    width: 400%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    margin-left: 2rem;
    
  
`
export const GalleryWrap = styled.div`
    aspect-ratio: 16/9;
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 3rem; 
    width: 50vw;
    height: 70vh;
    
   
    @media (max-width: 48em){
        padding: 1rem;
    }
    @media (max-width: 30em){
        padding: 10px;
    }

`
export const GalleryItem = styled.div`
     width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;
    position:relative;

    

    
`
export const GalleryImage = styled.div`
    margin-top: 10rem;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    width: 100%;
    height: 100%;
    will-change: transform;
    border-radius: 1rem;
    
    
    
        &:hover{
            .gallery-image{
        transform: scale(0.9);
        transition: transform 2s ease-in-out;

    }
    }
    
    
`
export const GalleryText = styled.div`
    opacity:0;
    position:absolute;
    font-size: clamp(1.25rem, 0.59vw + 1.1rem, 1.58rem);
    pointer-events: none;
    color:#1E1E1E;
    padding: 2rem;
    border: 1px solid #1E1E1E;
    border-radius: 50%;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &.hover-text{
        opacity:1;
        transition: opacity 0.25s cubic-bezier(0.77, 0, 0.175, 1);
    }
`
export const GalleryTitle = styled.div`
    
    font-size: clamp(2.44rem, 2.33vw + 1.86rem, 3.75rem);  
    color: #1E1E1E;
    z-index: 50;
    text-align: center;

    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;

`