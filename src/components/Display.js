import React from 'react'
import PowerSwitch from './PowerSwitch'
import BankSwitch from './BankSwitch'
import VolumeSlider from './VolumeSlider'
import SoundName from './SoundName'
import styled from 'styled-components'

const StyledDisplay = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
    margin: 6px;
    border-radius: 5%
    margin: auto;
    width: 500px;

    > div {
        width: 150px;
    }
`


const Display = (props) => (
    <StyledDisplay>
        <PowerSwitch switchPower={props.switchPower} powerOn={props.powerOn}/>
        <BankSwitch soundBankNumber={props.soundBankNumber} updateSoundBank={props.updateSoundBank}/>
        <SoundName name={props.name} powerOn={props.powerOn}/>
        <VolumeSlider updateVolume={props.updateVolume}/>
    </StyledDisplay>
)

export default Display;
