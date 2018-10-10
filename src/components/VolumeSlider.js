import React from 'react'
import Slider from 'react-rangeslider'
import '../rangeslider.scss'
import styled from 'styled-components';


const SliderText = styled.div`
    color: rgb(208, 207, 213);
    padding-bottom: 4px;
`
const sliderStyle = {
    paddingTop: '20px'
}



class VolumeSlider extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 50
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    this.props.updateVolume(this.state.value)
  };

  render () {
    const { value } = this.state
    return (

      <div style={sliderStyle}>
          <SliderText className='slider-text'>VOLUME</SliderText>
          <Slider
              min={0}
              max={100}
              value={value}
              onChangeStart={this.handleChangeStart}
              onChange={this.handleChange}
              onChangeComplete={this.handleChangeComplete}
          />
      </div>
    )
  }
}

export default VolumeSlider
