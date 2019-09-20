import React, { Component } from 'react';
import styled from 'styled-components';


const Slide = styled.div`
      width: 100%;
      flex: 0 0  auto;
      transition: all 0.2s ease-in;
      transform: ${props => props.currentIndex ? `translateX(${props.currentIndex}00%)` : `translateX(0%)`};
`;




class SliderItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <Slide currentIndex={this.props.currentIndex}> <img src={item} /></Slide>
        );
    }
}

export default SliderItem;