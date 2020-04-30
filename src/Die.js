import React, { Component } from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

class Die extends Component {
    static defaultProps = {
        dieIcons: new Map([
            [ 1, faDiceOne ],
            [ 2, faDiceTwo ],
            [ 3, faDiceThree ],
            [ 4, faDiceFour ],
            [ 5, faDiceFive ],
            [ 6, faDiceSix ]
        ]),
        val: 5
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleLocked(this.props.idx);
    }

    render() {
        const { dieIcons, locked, val, disabled, rolling } = this.props;
        const classes = `Die ${locked ? 'Die-locked' : ''} ${rolling ? 'Die-rolling' : ''}`;

        return <FontAwesomeIcon icon={dieIcons.get(val)} size='5x' className={classes} onClick={this.handleClick} disabled={disabled} />;
    }
}

export default Die;
