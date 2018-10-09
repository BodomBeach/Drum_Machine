import React from 'react'
import Display from './Display'
import DrumPad from './DrumPad'
import { soundBanks } from '../drumBank'
import styled from 'styled-components';

const StyledDrumMachine = styled.div`
    text-align: center;
    width: 600px;
    margin: auto;
    margin-top: 200px;
    background-color: rgb(47, 41, 45);
    overflow: auto;
    border-radius: 3%;
`

const StyledPads = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 500px;
    margin: auto;
    padding-bottom: 20px;
`

// END OF CSS ========================================================

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            powerOn: true,
            soundBankNumber: 1,
            current_pad: 'Open-HH'
        })

        this.handlePadClick = this.handlePadClick.bind(this)
        this.playSound = this.playSound.bind(this)
        this.switchPower = this.switchPower.bind(this)
        this.updateSoundBank = this.updateSoundBank.bind(this)
    }

    playSound(pad) {
        console.log(pad)
        const sound = document.getElementById(pad.character)
        sound.play()
    }

    handlePadClick(pad) {
        if (this.state.powerOn) {
            this.playSound(pad);
            let newState = Object.assign({}, this.state, { current_pad: pad.name });
            this.setState(newState)
        }
    }

    switchPower() {
        if (this.state.powerOn) {
            let offState = Object.assign({}, this.state, {powerOn: false, current_pad: ''})
            this.setState(offState)
        } else {
            let onState = Object.assign({}, this.state, {powerOn: true})
            this.setState(onState)
        }
    }

    updateSoundBank() {
        console.log('yay')
        const nextBankNumber = this.state.soundBankNumber >= soundBanks.length ? 1 : this.state.soundBankNumber + 1
        let newState = Object.assign({}, this.state, {soundBankNumber: nextBankNumber})
        this.setState(newState)
    }

    render() {

        let soundBank = soundBanks[this.state.soundBankNumber - 1]
        const pads = soundBank.map((pad) => {

            return (<DrumPad key={pad.character} pad={pad} handlePadClick={this.handlePadClick}/>)
        })


        return(
            <StyledDrumMachine>
                <Display name={this.state.current_pad}
                    powerOn={this.state.powerOn}
                    switchPower={this.switchPower}
                    soundBankNumber={this.state.soundBankNumber}
                    updateSoundBank={this.updateSoundBank}/>
                <StyledPads handleKeyPress={this.handleKeyPress}>{pads}</StyledPads>
            </StyledDrumMachine>
        )
    }
}

export default DrumMachine;
