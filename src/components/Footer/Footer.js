import React from 'react';
import fb from '../../img/fb.png';
import youtube from '../../img/youtube.png';
import instagram from '../../img/instagram.png';


import './Footer.css';

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    iconStyle = {
        display: "flex",
        alignItems: "center",
        margin: "0 10px",
        cursor: "pointer"
    }

    render() {
        return <div className="footer">
            <h3>Follow Us On</h3>
            <div className="footer-icons">
                <div style={this.iconStyle}>
                    <img style={{width: "35px"}} src={fb} alt="fb" />
                </div>
                <div style={this.iconStyle}>
                    <img style={{width: "35px"}} src={youtube} alt="youtube" />
                </div>
                <div style={this.iconStyle}>
                    <img style={{width: "35px"}} src={instagram} alt="instagram" />
                </div>
            </div>
        </div>
    }
}