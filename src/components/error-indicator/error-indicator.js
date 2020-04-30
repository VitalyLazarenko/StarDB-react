import React, {Component} from "react";
import errorIcon from './death-star.png';
import './error-indecator.css';

export default class ErrorIndicator extends Component {
    render() {
        return (
            <div className='error-container'>
                <img src={errorIcon} alt='error icon'/>
                <span className='oops'>OOPS!</span>
                <span>We have a little problem!</span>
                <span>(but we already sent droids to fix it)</span>
            </div>
        )
    }
}
