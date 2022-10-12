import styled from "styled-components";
import {Container, Button } from "../../globalStyles";


export const HeroSection = styled(Container)`   
    padding: 100px 50px 50px 50px; 
    @media (max-width: 30em){
    padding: 100px 0;
    }
`
export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end ;
    text-align: center;
    
    position: relative;  
    height: 85vh;
    z-index: 1;

    @media (max-width: 30em){
        align-items: center;
    }
`
export const HeroImage = styled.img`
	position: absolute;
    top: 0;
    left: 0;
	z-index: -1;
    border-radius: 20px;
    width: 100%;
    height: 100%;
`
export const HeroBox = styled.div`
    max-width: 500px;
    margin: 2rem 0;
    letter-spacing: 2px;

    @media (max-width: 64em){
        margin: 1rem ;
        max-width: 400px;
    }
    @media (max-width: 48em){
        max-width: 300px;
  
        
    }
    
    .lineParent{
    overflow: hidden;
        .lineChildren{
        transform: translate(0, 500px);
    }
    }
    
   
    
`
export const HeroHeading = styled.h1`
    font-size: clamp(3.05rem, 3.46vw + 2.19rem, 5rem);
    color: #fff;
    
    @media (max-width: 48em){
        font-size: clamp(2.44rem, 2.33vw + 1.86rem, 3.75rem);
  
        
    }
    @media (max-width: 30em){
        margin: 0;
    }
    
`
export const HeroPara = styled.p`
    font-size: clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
    color: #fff;
    line-height: 1.5;
    letter-spacing: 1.5;
    padding: 1rem;
    opacity: 0;
    transform: translate(0, 200px);
    overflow: hidden;
    
`
export const HeroBtn = styled(Button)`


`

