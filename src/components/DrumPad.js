import React from 'react'
import styled from 'styled-components';

const Character = styled.h2`
    font-family: Audiowide;
    font-size: 20px;
    margin: auto;
    pointer-events: none;
    -webkit-user-select: none; /* Chrome/Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
`

class DrumPad extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            active: false
        })

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handlePadClick = this.handlePadClick.bind(this)
        this.getStyle = this.getStyle.bind(this)
        this.togglePad = this.togglePad.bind(this)
    }

    getStyle() {
        return {
            width: '150px',
            height: '150px',
            lineHeight: '150px',
            backgroundColor: this.state.active ? 'rgb(179, 179, 179)' : 'rgb(228, 217, 219)',
            boxShadow: this.state.active ? 'none' : '5px 5px 0px black',
            margin: '6px',
            borderRadius: '5%',
            transition: '0.1s'
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
        document.addEventListener('keyup', this.handleKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
        document.removeEventListener('keyup', this.handleKeyPress)
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.pad.character.charCodeAt(0)) {
            if (!this.state.active) {
                this.handlePadClick(this.props.pad)
            } else {
                this.setState({active: false})
            }
        }
    }

    togglePad() {
        this.setState({active: !this.state.active})
    }

    handlePadClick(pad) {
        this.togglePad()
        this.props.handlePadSound(pad)
    }

    render() {

        return (
            <div style={this.getStyle()} onMouseDown={() => this.handlePadClick(this.props.pad)} onMouseUp={() => this.setState({active: false})} className='DrumPad'>
                <audio src={this.props.pad.audio_clip} className='clip' id={this.props.pad.character}></audio>
                <Character>{this.props.pad.character}</Character>
            </div>
        )
    }
}

export default DrumPad;
