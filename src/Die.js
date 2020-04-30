import React, { Component } from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

class Die extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleLocked(this.props.idx);
    }

    render() {
        let dIcon;
        switch (this.props.val) {
            case 1:
                dIcon = faDiceOne;
                break;
            case 2:
                dIcon = faDiceTwo;
                break;
            case 3:
                dIcon = faDiceThree;
                break;
            case 4:
                dIcon = faDiceFour;
                break;
            case 5:
                dIcon = faDiceFive;
                break;
            case 6:
                dIcon = faDiceSix;
                break;
        }
        return (
            <FontAwesomeIcon
                icon={dIcon}
                className={'Die'}
                style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
                onClick={this.handleClick}
            />
        );
    }
}

export default Die;
