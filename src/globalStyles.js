import styled, {createGlobalStyle, keyframes} from "styled-components";
import Font from './fonts/BasisGrotesqueArabicPro-Regular.ttf'
const GlobalStyle = createGlobalStyle`

:root {

    /*========== Colors ==========*/
    /* 
    H = Color
    S = Saturation (0% = gray to 100% = more colorful)
    L = Lightness (0% = black to 100% = white)
    */
    --title-color: #1E1E1E;
    --text-color-light: #F1EBE7;
    --text-color-dark: #1E1E1E;
    --body-color: #F1EBE7;
    --container-color: #fff;

     /*========== Font and typography ==========*/
     /*==================== GOOGLE FONTS ====================*/
    //@import url('');

    @font-face {
    font-family: 'Basis Grotesque', sans-serif;
    src: url(${Font}) format('truetype');
    font-weight: 300;
    font-style: normal;

    /*========== Font Size ==========*/
     /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
     /* clamp(min, preferred, max);*/

    --font-size-sm: clamp(0.8rem, 0.16vw + 0.76rem, 0.89rem);
    --font-size-base: clamp(1rem, 0.33vw + 0.92rem, 1.19rem);
    --font-size-md: clamp(1.25rem, 0.59vw + 1.1rem, 1.58rem);
    --font-size-lg: clamp(1.56rem, 0.97vw + 1.32rem, 2.11rem);
    --font-size-xl: clamp(1.95rem, 1.53vw + 1.57rem, 2.81rem);
    --font-size-xxl: clamp(2.44rem, 2.33vw + 1.86rem, 3.75rem);
    --font-size-xxxl: clamp(3.05rem, 3.46vw + 2.19rem, 5rem);

    /*========== Font weight ==========*/
    --font-regular: 300;
    --font-medium: 400;
    --font-medium-bold: 500;
    --font-bold: 700;

    /*========== Margin ==========*/
    /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
    --mb-0-25: .25rem;
    --mb-0-5: .5rem;
    --mb-0-75: .75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;

    /*========== Transition ==========*/
    --transition: all 400ms ease;

  }
}
/*==================== BASE ====================*/
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

html{
    scroll-behavior: smooth;
}
body{
  font-family: 'Basis Grotesque', sans-serif;
  background: var(--body-color);
  color: var(--text-color-light);
}
h1 {
  font-family: 'Red Hat Display', sans-serif;
  color: var(--text-color-light);
  font-size: var(--font-size-lg);
}
h2, h3, h4, h5 {
  font-family: 'Red Hat Display', sans-serif;
  color: var(--text-color-dark);
  font-weight: var(--font-regular);
}
p{
  font-family: 'Basis Grotesque', sans-serif;
}

img {
  /* display: block; */
  object-fit: cover;
  max-width: 100%;
  height: auto;
}

::-webkit-scrollbar{
    display: none;
}

/*General Style*/
/* .Loader{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1E1E1E;
  height: 100vh;
  
  transition: "all 0.25s ease-in-out";
  
    
}
.logimg{
      height: 100px;
      width: 7rem;
      display: block;
      fill: #F1EBE7;
    }
 */
 /* .btn-circle{
    content: '';
    display: block;
    position: absolute;
    top:130%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    opacity: 1;

  }   */
`
export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0 3.125rem; //50px
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
  
`;

export const Section = styled.div`
	color: #fff;
	padding: 100px 0;
`;

export const Heading = styled.h2`
	margin-bottom: 1.4rem;
	font-size: 3rem;
	text-align: center;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '1c2237')};
`;
const circle = keyframes`

        from{
            width: 40px;
            height: 40px;
            border-radius: 40px;
            padding:0
            
        }
        to{
          width: 150px;
          height: 40px;
          padding: 10px 30px;
          border-radius: 50px;
        }

`
const text = keyframes`

        0%{
           opacity: 0;
            
        }
        30%{
           opacity: 0;
            
        }
        50%{
           opacity: 0;
            
        }
        100%{
          opacity: 1;
        }

`
export const Button = styled.button`
	
  color: ${({ lightText }) => (lightText ? '#fff' : '#1E1E1E')};
	background: ${({ darkBg }) => (darkBg ? '#1E1E1E' : '#fff')};
	white-space: nowrap;
  font-weight: 700;
  cursor: pointer;
  width: 150px;
  height: 40px;
  padding: 10px 30px;
  border-radius: 50px;
  animation: ${circle} 1.5s alternate linear;
  position:relative;
  
 
  &:hover{
    color: ${({ lighthov }) => (lighthov ? '#fff' : '#1E1E1E')};
    background: ${({ darkhov }) => (darkhov ? '#1E1E1E' : '#fff')};
    transition: color 1s cubic-bezier(.19,1,.22,1),transform .6s ease;
  }
  .btn-text{
    animation: ${text} 3s linear; 
   
  }

  
`

export default GlobalStyle;