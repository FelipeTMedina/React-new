import { AcoordionButton, AcoordionContainer, AcoordionContent, AcoordionImage, AcoordionText, AcoordionWrapper, ContentText } from "./style";
import { useState } from "react";

export default function Accordion(){

    const [ visible, setVisible] = useState(false)

    function HandleAccordion(){
        return setVisible(!visible)
    }
    return(

        <AcoordionWrapper>

        <AcoordionContainer>

            <AcoordionText> what is an acoordion component?</AcoordionText>

            <AcoordionButton onClick={HandleAccordion}>
                    <AcoordionImage/>
            </AcoordionButton>



        </AcoordionContainer>


      {
        visible && (
        <AcoordionContent>
            <ContentText>
            what is an acoordion component?
            </ContentText>
        </AcoordionContent>

      )}

    </AcoordionWrapper>

    );
}