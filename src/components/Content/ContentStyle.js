import styled, { keyframes } from "styled-components";
import { Container } from "../../globalStyles";

export const MovingBox = styled.section`
    position: relative;
    width: 100%;
    height: 8vh;
    overflow: hidden;
    display: flex;
    background-color: #E6CCB2;
    margin-bottom: 50px;
    
`
export const Box = styled.div`
    position: relative;
    width: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;

    &:nth-child(1) > p{
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: #1E1E1E;
        -webkit-text-fill-color: transparent;
        left: 100%
    }
    
    
`
const movetext = keyframes`

        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(-100%);
        }

`
export const MovingText = styled.p`
    color: #F1EBE7; 
    position: absolute;
    white-space: nowrap;
    font-size: clamp(1.95rem, 1.53vw + 1.57rem, 2.81rem);
    animation: ${movetext} 40s linear infinite;
    
`



export const ContentContainer = styled(Container)` 
    display: flex;
    justify-content: center;
    align-items: center ;     
    height: 100vh;
    position: relative;
   
    @media screen and (max-width:48em){
        height: 50vh;
    }
    @media screen and (max-width:30em){
        height: 100vh;
    }
    
    
    /* img{
        clip-path: inset(100% 0% 0% 0%);
        transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
    }
    .isReveal {
      clip-path: inset(0% 0% 0% 0%);
    } */
    
`
export const TextWrap = styled.div`   
    text-align: center;
    max-width: 40vw;
    padding: 2rem 0;
    @media screen and (max-width:30em){
        max-width: 70vw;
    }
    
` 
export const ContentOne = styled.div`
    position: absolute;
    top: 0;
    left: 3%;
    width: 20%;
    @media screen and (max-width:48em){
    top: -10%;
    left: 3%;
    width: 20%;
    }
    @media screen and (max-width:30em){
        top: -5%;
        left: 3%;
        width: 35%;
    }
`
    
export const ContentTwo = styled.div`
    position: absolute;
    bottom: 20%;
    left: 8%;
    width: 20%;
    @media screen and (max-width:48em){
        top: 40%;
        left: 8%;
        width: 20%;
    }
    @media screen and (max-width:30em){
        top: 8%;
        left: 35%;
        width: 30%;
    }
    
` 
export const ContentThree = styled.div`  
    position: absolute;
    top: 0;
    right: 3%;
    width: 20%;
    @media screen and (max-width:48em){
    top: -10%;
    right: 3%;
    width: 20%;
    }
    @media screen and (max-width:30em){
        top: 70%;
        right: 3%;
        width: 35%;
        
    }
` 
export const ContentFour = styled.div`  
    position: absolute;
    bottom: 20%;
    right: 8%;
    width: 20%;
    @media screen and (max-width:48em){
        top: 40%;
        right: 8%;
        width: 20%;
    }
    @media screen and (max-width:30em){
        top: 60%;
        right: 35%;
        width: 30%;
    }
    @media screen and (max-width:20em){
        top: 65%;
        right: 35%;
        width: 30%;
    }
` 

export const ContentImages1 = styled.img`
    border-radius: 20px;
    `
export const ContentImages2 = styled.img`
    border-radius: 20px;
    `
export const ContentImages3 = styled.img`
    border-radius: 20px;
    `
export const ContentImages4 = styled.img`
    border-radius: 20px;
    `
export const ContentText = styled.h2`
    font-size: clamp(1.95rem, 1.53vw + 1.57rem, 2.81rem);
    opacity: 0;
    transform: scale(.9);
    transition: opacity 1s ease,transform 1s ease;
   

    @media screen and (max-width:48em){
        font-size: clamp(1.56rem, 0.97vw + 1.32rem, 2.11rem);
    }
   
    
    `

