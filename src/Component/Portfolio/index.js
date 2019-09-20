import Gap from '../Gap';
import Hr from '../Hr';
import PortfolioCard from '../ProtfolioCard';
import React, { Component } from 'react';
import Modal from '../Modal'
import Slider from '../Slider';

const project = [
    {
        id: 1,
        name: "Flypur",
        url: 'flypur.com',
        dec: 'I Developed This site using Html, Css, Bootstrap,Javascript,Jquery and Vuejs working with senior Developer',
        smallImg: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png',
        bigImg: [
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/boggling-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/shoddingbig.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/parkspacebig.png',
        ],
        color: 'red',
    },
    {
        id: 2,
        name: "BooglingShop",
        url: 'bogglingshop.com',
        dec: 'I Developed This site using Html, Css, Bootstrap,Javascript,Jquery and Vuejs working with senior Developer',
        smallImg: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png',
        bigImg: [
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
        ],
        color: 'blue',
    },
    {
        id: 3,
        name: "Shodding",
        url: 'Shodding.com',
        dec: 'I Developed This site using Html, Css, Bootstrap,Javascript,Jquery and Vuejs working with senior Developer',
        smallImg: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png',
        bigImg: [
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
        ],
        color: '',
    },
    {
        id: 4,
        name: "ParkSpace.in",
        url: 'parkspace.in',
        dec: 'I Developed This site using Html, Css, Bootstrap,Javascript,Jquery and Vuejs working with senior Developer',
        smallImg: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png',
        bigImg: [
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
        ],
        color: '',
    },
    {
        id: 5,
        name: "TheBigStack",
        url: 'TheBigStack.com',
        dec: 'I Developed This site using Html, Css, Bootstrap,Javascript,Jquery and Vuejs working with senior Developer',
        smallImg: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png',
        bigImg: [
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
        ],
        color: '',
    },
    {
        id: 6,
        name: "stockearing",
        url: 'stockearing.com',
        dec: 'I Developed This site using Html, Css, Bootstrap,Javascript,Jquery and Vuejs working with senior Developer',
        smallImg: 'https://stocksearning.com/images/svg/logo.svg',
        bigImg: [
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
        ],
        color: '',
    },
    {
        id: 7,
        name: "Flypur",
        url: 'flypur.com',
        dec: 'I Developed This site using Html, Css, Bootstrap,Javascript,Jquery and Vuejs working with senior Developer',
        smallImg: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png',
        bigImg: [
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
            'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
        ],
        color: '',
    }
]
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id: null
        }
    }


    getId = id => {
        this.setState({
            id: id,
            modal: true
        })
    }
    modalClose = () => {
        this.setState({
            modal: false
        })
    }
    render() {
        return (
            <div className='protfolio_wapper'>

                <h1 className='heading'>PORTFOLIO</h1>
                <Hr color="#2c3e50" />
                <div className='project_flex'>
                    {
                        this.state.modal &&
                        project.length > 0 && project.map((item, index) => {
                            if (item.id === this.state.id) return (
                                <Modal className='modal_content'>
                                   <span className="close" onClick={this.modalClose}><i class="fa fa-times" aria-hidden="true"></i></span>
                                    <h1 className="titel">{item.name}</h1>
                                    <Slider items={item.bigImg} />
                                    <p class='dec'>{item.dec}</p>
                                    <button className='modal_close' onClick={this.modalClose}>Close</button>
                                </Modal>
                            )
                        })
                    }

                    {
                        project.length > 0 && project.map((item, index) => {
                            return (<PortfolioCard project={item} getId={this.getId} />)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Portfolio;