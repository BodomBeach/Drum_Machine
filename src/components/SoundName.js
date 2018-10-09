import React from 'react'
import styled from 'styled-components'

const StyledSoundName = styled.div`
    color: white;
    background-color: rgb(120, 110, 233);
    height: 64px;
    margin: 30px 10px 0px 10px;
    border: 1px solid white;
    border-radius: 4%
`

const SoundName = (props) => (
    <StyledSoundName>
        <h3>{props.name}</h3>
    </StyledSoundName>
)

export default SoundName;
