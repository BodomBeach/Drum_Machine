import React from 'react'
import Display from './Display'
import DrumPad from './DrumPad'
import {padsList} from '../drumBank'
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
            padsList: padsList,
            current_pad: 'Open-HH'
        })

        this.handlePadClick = this.handlePadClick.bind(this)
        this.playSound = this.playSound.bind(this)
        this.switchPower = this.switchPower.bind(this)
    }

    playSound(pad) {
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

    render() {

    const pads = this.state.padsList.map((pad) => {
        return (<DrumPad key={pad.character} pad={pad} handlePadClick={this.handlePadClick}/>)
    })

        return(
            <StyledDrumMachine>
                <Display name={this.state.current_pad} switchPower={this.switchPower} powerOn={this.state.powerOn}/>
                <StyledPads handleKeyPress={this.handleKeyPress}>{pads}</StyledPads>
            </StyledDrumMachine>
        )
    }
}

export default DrumMachine;
