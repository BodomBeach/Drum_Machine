import React from 'react'

class DrumPad extends React.Component {
    constructor(props) {
        super(props)

        this.playSound = this.playSound.bind(this)
    }

    playSound(e) {
        const sound = document.getElementById(this.props.character)
        console.log(sound)
        console.log(this.props)
        sound.play()

    }

    render() {

        return (
            <div id='miel' className='drum-pad' onClick={this.playSound}>
                <audio src={this.props.audio_clip} className='clip' id={this.props.character}></audio>
                <h2>{this.props.character}</h2>
            </div>
        )
    }
}

export default DrumPad;
