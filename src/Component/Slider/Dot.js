import React, { Component } from 'react';
import styled from 'styled-components';


const ItemDot = styled.div`
    width: 8px;
    height: 8px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 10px;
`;


class Dot extends Component {
    render() {
        return (
            <ItemDot/>
        );
    }
}

export default Dot;