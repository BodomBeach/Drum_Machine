import React from 'react'
import styled from 'styled-components';
import { TextStyle } from './theme.js'
import { SwitchStyle } from './theme.js'

const Number = styled.div`
    width: 40px;
    line-height: 30px;
    height: 30px;
    background-color: rgb(208, 207, 213);
    border-radius: 5%;

    h3 {
        margin: auto;
    }
`

const BankSwitch = (props) => {
    return(
        <SwitchStyle>
            <TextStyle>
                <p>SOUND BANK</p>
            </TextStyle>
            <Number>
                <h3>1</h3>
            </Number>
        </SwitchStyle>
    )
}

export default BankSwitch;
