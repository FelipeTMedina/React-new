import styled from "styled-components";

export const container = styled.div`
width: 368px;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
border: 1px solid black;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 padding: 24px ;
`
export const content = styled.div`
    display: flex;
    padding: 8px 0;
    width: 320px;
    gap: 12px;
`
export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
`

export const image = styled.img`
    width: 24px;
    height: 24px;
`
export const title = styled.h1`
font-size: 16px;
font-weight: 600;
    
`
export const Description = styled.p`
margin-top: -10px;
font-size: 14px;
font-weight: 400;
    
`