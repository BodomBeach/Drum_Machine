import React from 'react'
import styled from 'styled-components'

const StyledSoundName = styled.div`
    color: white;
    background-color: ${props => props.powerOn ? 'rgba(35, 171, 8, 0.62)' : 'rgba(20, 80, 14, 0.54)'};
    height: 64px;
    margin: 30px 30px 8px 10px;
    border: 1px solid white;
    border-radius: 4%;
    transition: 0.5s;
    text-transform: uppercase;

    > h3 {
        font-family: Audiowide;
        font-size: 16px;
        margin-top: 21px;
    }
`

const SoundName = (props) => (
    <StyledSoundName style={{width: '180px'}} powerOn={props.powerOn}>
        <h3>{props.name}</h3>
    </StyledSoundName>
)

export default SoundName;
