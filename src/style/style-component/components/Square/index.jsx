import {  SquareButton, SquareContainer, SquareLink } from "./style";


export default function Square (props){

        return(

          <SquareContainer borderStyle={props.borderStyle}>

            <SquareLink squad={props.squad} href="https://styled-components.com/" target="">teste</SquareLink>

            <SquareButton>Button</SquareButton>

          </SquareContainer>


        
        )



}