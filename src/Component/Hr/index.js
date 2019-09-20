import React from 'react';
import styled from 'styled-components';


const Hr = styled.div`
    width: 200px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color:${props => props.color};
    &::after{
        position: absolute;
        content: '';
        height: 5px;
        top: 0px;
        bottom: 0px;
        left: 0px;
        width:40%;
        top: 50%;
        transform: translate(0%,  -50%);
        background-color:${props => props.color};
    }
    &::before{
        position: absolute;
        content: '';
        height: 5px;
        right: 0px;
        width:40%;
        top: 50%;
        transform: translate(0%,  -50%);
        background-color:${props => props.color};
    }
`;
const HrNew = ({color}) => {
    // console.log(color)
    return (
        <Hr color={color}><i className="fa fa-star" aria-hidden="true"></i></Hr>
    );
}

export default HrNew;