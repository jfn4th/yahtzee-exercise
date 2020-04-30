import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
    render() {
        const active = this.props.score === undefined;
        const classes = `RuleRow ${active ? 'RuleRow-active' : 'RuleRow-disabled'}`;
        return (
            <tr className={classes} onClick={active ? this.props.doScore : ''}>
                <td className='RuleRow-name'>{this.props.name}</td>
                <td className='RuleRow-score'>{active ? this.props.description : this.props.score}</td>
            </tr>
        );
    }
}

export default RuleRow;
