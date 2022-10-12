import styled from "styled-components"

import {ReactComponent as logo} from '../../images/Logo2.svg'

export const LoaderWrapper = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 100;
        background-color: black;


    
`
export const Logo = styled.h1`
    height: 100px;
    width:100px;
    color: pink;
    z-index: 1000;
   
`