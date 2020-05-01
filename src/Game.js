import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: Array.from({ length: NUM_DICE }),
            locked: Array(NUM_DICE).fill(false),
            rollsLeft: NUM_ROLLS,
            rolling: false,
            highScore: 0,
            gameOver: false,
            scores: {
                ones: undefined,
                twos: undefined,
                threes: undefined,
                fours: undefined,
                fives: undefined,
                sixes: undefined,
                threeOfKind: undefined,
                fourOfKind: undefined,
                fullHouse: undefined,
                smallStraight: undefined,
                largeStraight: undefined,
                yahtzee: undefined,
                chance: undefined
            }
        };
        this.roll = this.roll.bind(this);
        this.doScore = this.doScore.bind(this);
        this.toggleLocked = this.toggleLocked.bind(this);
        this.animateRoll = this.animateRoll.bind(this);
        this.updateHighScore = this.updateHighScore.bind(this);
        this.startNewGame = this.startNewGame.bind(this);
    }
    componentDidMount() {
        const playerHighScore = JSON.parse(localStorage.getItem('highScore'));
        if (playerHighScore > 0) {
            this.setState({ highScore: playerHighScore });
        }
        this.animateRoll();
    }

    animateRoll() {
        this.setState({ rolling: true }, () => {
            setTimeout(this.roll, 1000);
        });
    }

    roll() {
        // roll dice whose indexes are in reroll
        this.setState((st) => ({
            dice: st.dice.map((d, i) => (st.locked[i] ? d : Math.ceil(Math.random() * 6))),
            locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
            rollsLeft: st.rollsLeft - 1,
            rolling: false
        }));
    }

    toggleLocked(idx) {
        // toggle whether idx is in locked or not
        if (this.state.rollsLeft > 0 && !this.state.rolling && !this.state.gameOver) {
            this.setState((st) => ({
                locked: [ ...st.locked.slice(0, idx), !st.locked[idx], ...st.locked.slice(idx + 1) ]
            }));
        }
    }

    doScore(rulename, ruleFn) {
        // evaluate this ruleFn with the dice and score this rulename
        this.setState(
            (st) => ({
                scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
                rollsLeft: NUM_ROLLS,
                locked: Array(NUM_DICE).fill(false)
            }),
            () => {
                this.checkGameOver();
            }
        );
    }

    updateHighScore(newScore) {
        if (newScore > this.state.highScore) {
            localStorage.setItem('highScore', JSON.stringify(newScore));
            this.setState({ highScore: newScore });
        }
    }

    checkGameOver() {
        for (const score in this.state.scores) {
            if (this.state.scores[score] === undefined) return this.animateRoll();
        }
        this.setState({ gameOver: true });
    }

    startNewGame() {
        this.setState((st) => ({
            locked: Array(NUM_DICE).fill(false),
            gameOver: false,
            scores: {
                ones: undefined,
                twos: undefined,
                threes: undefined,
                fours: undefined,
                fives: undefined,
                sixes: undefined,
                threeOfKind: undefined,
                fourOfKind: undefined,
                fullHouse: undefined,
                smallStraight: undefined,
                largeStraight: undefined,
                yahtzee: undefined,
                chance: undefined
            }
        }));
        this.animateRoll();
    }

    displayRollInfo() {
        const messages = [ '0 Rolls Left', '1 Roll Left', '2 Rolls Left', 'Starting Round', 'Play Again?' ];
        return this.state.gameOver ? messages[4] : messages[this.state.rollsLeft];
    }

    render() {
        const { dice, locked, rollsLeft, rolling, gameOver, scores, highScore } = this.state;
        return (
            <div className='Game'>
                <header className='Game-header'>
                    <h1 className='App-title'>Yahtzee!</h1>
                    <section className='Game-dice-section'>
                        <Dice dice={dice} locked={locked} toggleLocked={this.toggleLocked} disabled={rollsLeft === 0} rolling={rolling} />
                        <div className='Game-button-wrapper'>
                            <button
                                className='Game-reroll'
                                disabled={locked.every((x) => x) || rolling}
                                onClick={gameOver ? this.startNewGame : this.animateRoll}
                            >
                                {this.displayRollInfo()}
                            </button>
                        </div>
                    </section>
                </header>
                <ScoreTable
                    doScore={this.doScore}
                    scores={scores}
                    highScore={highScore}
                    updateHighScore={this.updateHighScore}
                    rolling={rolling}
                />
            </div>
        );
    }
}

export default Game;
