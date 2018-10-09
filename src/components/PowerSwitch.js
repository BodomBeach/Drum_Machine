import React from 'react'
import styled from 'styled-components';
import { TextStyle } from './theme.js'
import { SwitchStyle } from './theme.js'

const Led = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.powerOn ? 'red' : '#3c0b0b'}
    border-radius: 50%;
    border: 1px solid rgb(208, 207, 213);
`


const PowerSwitch = (props) => {
    return(
        <SwitchStyle>
            <TextStyle>
                <p>POWER</p>
            </TextStyle>
            <Led onClick={() => props.switchPower()} powerOn={props.powerOn}/>
        </SwitchStyle>
    )
}

export default PowerSwitch;
