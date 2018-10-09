import React from 'react'
import styled from 'styled-components';

const StyledDrumPad = styled.div`
    width: 150px;
    height: 150px;
    line-height: 150px;
    background-color: rgb(228, 217, 219);
    margin: 6px;
    border-radius: 5%
`
const Character = styled.h2`
    margin: auto;
`


class DrumPad extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <StyledDrumPad onMouseDown={() => this.props.handlePadClick(this.props.pad)}>
                <audio src={this.props.pad.audio_clip} className='clip' id={this.props.pad.character}></audio>
                <Character>{this.props.pad.character}</Character>
            </StyledDrumPad>
        )
    }
}

export default DrumPad;
