import React, { Component } from 'react';
import styled from 'styled-components';

const ModalContent = styled.div`
    width: 80vw;
    /* height: 90vh; */
    overflow-x: auto;
    background-color: #fff;
    position: relative;
    z-index: 3;
`;


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='modal_overlay'>
                <ModalContent>
                    {this.props.children}
                </ModalContent>
            </div>
        );
    }
}

export default Modal;