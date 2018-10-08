import React from 'react'
import Display from './Display'
import DrumPad from './DrumPad'
import {padsList} from '../drumBank'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            padsList: padsList
        })
    }

    render() {

    const pads = this.state.padsList.map((pad) => {
        return (<DrumPad key={pad.name} character={pad.character} audio_clip={pad.audio_clip} />)
    })

        return(
            <div className='drum-machine'>
                <Display name={this.state.padsList.name}/>
                <div className='pads'>{pads}</div>
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
