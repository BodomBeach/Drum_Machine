import React from 'react'

class DrumPad extends React.Component {
    constructor(props) {
        super(props)

        this.playSound = this.playSound.bind(this)
    }

    playSound(e) {
        const sound = document.getElementById(this.props.character)
        sound.play()
    }

    render() {

        return (
            <div className='drum-pad' onClick={this.playSound}>
                <audio src={this.props.audio_clip} className='clip' id={this.props.character} ></audio>
                <h2>{this.props.character}</h2>
            </div>
        )
    }
}

export default DrumPad;
