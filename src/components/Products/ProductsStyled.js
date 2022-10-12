import styled from "styled-components";

import { Button, Container } from "../../globalStyles";

export const ProductContainer = styled(Container)`
    height: 150vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    text-align: center;
    position: relative;
    width: 100%;
    color: #1E1E1E;

`
export const ProductName = styled.span`
    transition: opacity 0.35s cubic-bezier(0.77, 0, 0.175, 1);
    font-size:  clamp(3.05rem, 3.46vw + 2.19rem, 5rem);
    color: #eee;
    cursor:pointer;
    z-index: 2;
  `
export const ProductWrap = styled.div`
    mix-blend-mode: difference;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
    &:hover{
        ${ProductName}{
            opacity: 0.1;
        }
    }

`
export const Projectitem = styled.div`
    padding: 1rem 0;
    &:hover{
        ${ProductName}{
            opacity: 1;
        }
    }
`
export const ProductText = styled.div`
    font-size: clamp(1.25rem, 0.59vw + 1.1rem, 1.58rem);
    

`

export const ProductBtn = styled(Button)`
z-index: 2;
`
export const ProjectImageItem = styled.div`

`
export const ImageWrap = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    z-index: -1;

`
export const ProductImage = styled.img`
    opacity:0;
    position:absolute;
    width: auto;
    height:auto;
    max-height:70%;
    max-width:80%;
    object-fit: contain;
    pointer-events: none;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &.is-active {
        opacity: 1;
    }
`