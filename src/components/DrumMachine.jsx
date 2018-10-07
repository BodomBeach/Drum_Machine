import React from 'react'
import Display from './Display'
import DrumPad from './DrumPad'


let padsList = [
    {
        name: 'Heater 1',
        character: 'Q',
        audio_clip: ''
    },
    {
        name: 'Heater 2',
        character: 'W',
        audio_clip: ''
    },
    {
        name: 'Heater 3',
        character: 'E',
        audio_clip: ''
    },
    {
        name: 'Heater 4',
        character: 'A',
        audio_clip: ''
    },
    {
        name: 'Clap',
        character: 'S',
        audio_clip: ''
    },
    {
        name: 'Open HH',
        character: 'D',
        audio_clip: ''
    },
    {
        name: 'Kick n\' Hat',
        character: 'Z',
        audio_clip: ''
    },
    {
        name: 'Kick',
        character: 'X',
        audio_clip: ''
    },
    {
        name: 'Closed HH',
        character: 'C',
        audio_clip: ''
    },
]


class DrumMachine extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            padsList: padsList
        })
    }

    render() {

    const pads = this.state.padsList.map((pad) => <div className='drum-pad' id={pad.name}>{pad.character}</div>)

        return(
            <div className='drum-machine'>
                <h1>i am drum machine</h1>
                {pads}
                <Display />
            </div>
        )
    }
}

export default DrumMachine;


// <DrumPad id={'heater1'} />
// <DrumPad id={'heater2'} />
// <DrumPad id={'heater3'} />
// <DrumPad id={'heater4'} />
// <DrumPad id={'clap'} />
// <DrumPad id={'open-hh'} />
// <DrumPad id={'kick-n-hat'} />
// <DrumPad id={'kick'} />
// <DrumPad id={'closed-hh'} />
