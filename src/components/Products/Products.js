import React from 'react'
import {ProductContainer, ProductText, ProductBtn, ProductName, ProductWrap,Projectitem,ProjectImageItem,ImageWrap,ProductImage} from './ProductsStyled'

import {product} from '../../data/productdata'
import { useState } from 'react'
import { useEffect } from 'react'
// import { useCallback } from 'react'
// import { useLayoutEffect } from 'react'

// const useMousePosition = ()=> {
//   const [mousePosition, setMousePosition] = useState({x:0, y:0})
    
//     useEffect( ()=>{
//       const updateMousePosition = event => {
//         setMousePosition({x: event.clientX, y: event.clientY})
//       }
//       window.addEventListener('mousemove', updateMousePosition)
//       return ()=> window.removeEventListener('mousemove',updateMousePosition)

//     },[])
//   return mousePosition
// }
// const getDimensionObject = (node)=>{
//   const rect = node.getBoundingClientRect()
//   return{
//     width: rect.width,
//     height: rect.height,
//   }
// }

//   const useSize = () => {
//   const [dimensions, setDimensions] = useState({})
//   const [node, setNode] = useState(null)

//   const ref = useCallback(node=>{
//     setNode(node)
//   },[])
  
//   useLayoutEffect( ()=>{
//     if (node){
//       const measure = () => setDimensions(getDimensionObject(node))
//       measure()
//     }
//   }, [node])
//   return [ref, dimensions]
// }
  

const Products = () => {
  const [active, setActive] = useState(-1)
  // const {x, y} = useMousePosition()
  // const [ref, { width, height }] = useSize()
  
  return (
    <>
        <ProductContainer >
            <ProductText>Our Product Essentials</ProductText>
            <ProductWrap >
               {product.map( ({title}, index) => (<Projectitem
               onMouseEnter={()=>setActive(index)}
               onMouseLeave={()=>setActive(-1)}
               
               >
                <ProductName classname='product-title'>{title}</ProductName> </Projectitem>
               ))}
            </ProductWrap>   
            

             <ImageWrap>
             {product.map( ({src, alt}, index) => {
                const isActive = index === active;
                // const xPos = isActive ? x:0
                // const yPos = isActive ? y:0
               
              return(
                <ProjectImageItem>
              <ProductImage className={isActive && 'is-active'} src={src} alt={alt}
              /> 
              </ProjectImageItem>
              )
              
             } )}
            
            </ImageWrap>
            <ProductBtn darkBg lightText>Shop Now</ProductBtn>
      </ProductContainer>
    </>
  )
}

export default Products