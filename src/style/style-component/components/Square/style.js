
import styled from "styled-components";

export const SquareContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px ${props => props.borderStyle = "dotted" ?  "solid" : "dotted"} blue;
width: 200px;
height: 200px;
gap: 10px;
background-color: ${props => props.squad = 'palmeiras' ? "green" : 'red'};
`


export const SquareLink = styled.a`
text-decoration: none;
display: flex;
font-size: 30px;
color: dark;
`

export const SquareButton = styled.button`
    
`
