import styled from "styled-components"
import { Button, Container } from "../../globalStyles";

export const VideoBox = styled.div`
    position: relative;
    height:80vh;
    width: 100%;
    overflow: hidden;
    margin-top: 50px;

`
export const ContentVideo = styled.video`
    object-fit: cover;
	position: absolute;
    top: 0;
    left: 0;
	z-index: -1;
    width: 100%;
    height: 100%;
`
export const AboutContainer = styled(Container)`
    height: 50%;
    max-width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    text-align: center;
    padding: 50px;
    letter-spacing: 1.5px;
    background-color: #F1EBE7;
    @media (max-width: 30em){   
        padding:0;    
        
    }
`
export const AboutText = styled.h2`
    max-width: 1200px;
    font-size: clamp(3.05rem, 3.46vw + 2.19rem, 5rem);
    
    @media (max-width: 30em){   
        font-size: clamp(1.95rem, 1.53vw + 1.57rem, 2.81rem);    
        
    }

    
    .line img{
        display: inline-block;
        width:60px;
        height: 60px;
        border-radius: 50%;
        opacity: 0;
        transform: scale(.5);
        transition: opacity 1s ease,transform 1s ease;
        transition-delay: .1s;
        
        @media (max-width: 30em){   
         width:30px;
         height: 30px;
        }
    }
    
`
export const AboutBtn = styled(Button)`
     font-size:clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
        margin-top: 1rem;
        z-index: 1;
`