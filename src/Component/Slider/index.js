import React, { Component } from 'react';
import styled from 'styled-components';
import SliderItem from './SliderItem';


const SliderWapper = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    position: relative;
`;


const DotWapper = styled.div`
    width: auto;
    overflow: hidden;
    display: flex;  
    background: #f5eaea80;
    position: relative;
    height: 30px;
    justify-content: center;
    align-items: center;
    top: -30px;
    left: 0px;
    right: 0px;
    /* transform: translate(-50%, 0%); */
    margin: auto;
`;


const ItemDot = styled.div`
    width: 8px;
    height: 8px;
    border: 1px solid #ccc;
    background-color:${props => props.stateIndex === props.itemIndex ? '#fff' : '#000'};
    margin-right: 10px;
    border-radius: 50%;
`;


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            Items: this.props.items,
            nextDisable: false,
            prevDisable: false,
        }
    }

    // slide next item

    // set setInterval

    // abc = () => {
    //     const ab = setInterval(this.slideNext, 3000);
    // }


    slideNext = () => {
        this.setState({ prevDisable: false })
        let len = - this.state.Items.length + 1;
        if (this.state.currentIndex > len) this.setState({ currentIndex: this.state.currentIndex - 1 })
        if (this.state.currentIndex === len) this.setState({ nextDisable: true })
    }

    // slide prev items

    slidePrev = () => {
        this.setState({ nextDisable: false })
        let temValue = this.state.currentIndex;
        if (temValue < 0) this.setState({ currentIndex: this.state.currentIndex + 1 })
        if (this.state.currentIndex === 0) this.setState({ prevDisable: true })
    }

    currenTUpdate = id => {
        this.setState({
            currentIndex: -id
        }, console.log(this.state.currentIndex))

    }
    render() {
        const SlideItems = this.state.Items;
        console.log(this.state.currentIndex);
        const MinusIndex = - this.state.currentIndex;

        return (
            <div>
                <button onClick={this.slidePrev} disabled={this.state.prevDisable}>prev</button>
                <button onClick={this.slideNext} disabled={this.state.nextDisable}>Next</button>
                <SliderWapper>
                    {
                        SlideItems.length > 0 && SlideItems.map((item, index) => {
                            return <SliderItem item={item} currentIndex={this.state.currentIndex} />
                        })
                    }
                </SliderWapper>
                <DotWapper>
                    {
                        SlideItems.length > 0 && SlideItems.map((item, index) => {
                            return <ItemDot stateIndex={MinusIndex} itemIndex={index} key={item.id} onClick={() => this.currenTUpdate(index)} currentIndex={this.state.currentIndex}></ItemDot>
                        })
                    }
                </DotWapper>
            </div>
        );
    }
}

export default Slider;