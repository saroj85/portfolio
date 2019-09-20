import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../Modal'

const Protfolio_card = styled.div`
    width:calc(100%  /3);
    padding: 15px;
    height: 350px;
    box-sizing: border-box;
    &:hover{

    }
    position: relative;
    overflow: hidden;
    a{
        height: 100%;
        width: 100%;

        position: relative;
        background: ${(props) => props.color};

    }
    .on_hover{
        background:red;
        width: 100%;
        position: relative;
        z-index: 10;
        height: 100%;
    }
`;

class ProtfolioCard extends Component {
    render() {
        const { smallImg, name, dec, logo ,id } = this.props.project;
        console.log("props", this.props)

        return (
          
            <Protfolio_card onClick={() => this.props.getId(id) }> 
              <a href="#">
                    <img src={smallImg} />
                    <div className="on_hover"> </div>
              </a >
             
            </Protfolio_card>
        );
    }
}

export default ProtfolioCard;