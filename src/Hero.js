import React, { Component } from 'react'
import { assoc } from 'ramda'
import classNames from 'classnames'

import heroes from './heroes/index'
import './Hero.css'

class Hero extends Component {
    state = {
        selectedTalents: {},
    }

    selectTalent(levelIndex, talentIndex) {
        return () => {
            this.setState(state => ({
                selectedTalents: assoc(levelIndex, talentIndex, state.selectedTalents),
            }))
        }
    }

    render() {
        const { name } = this.props
        const hero = heroes[name]
    
        const talents = hero.talents.map((levelTalents, levelIndex) => {
            const individualTalents = levelTalents.map((talent, talentIndex) => {
                return (
                    <div className='talent-level-group' key={talentIndex} onClick={this.selectTalent(levelIndex, talentIndex)}>
                        <div>{talent.name}</div>
                        <img className={classNames({
                            'talent-image': true,
                            'selected': this.state.selectedTalents[levelIndex] === talentIndex,
                            'not-selected': this.state.selectedTalents[levelIndex] === undefined ? false : this.state.selectedTalents[levelIndex] !== talentIndex,
                        })} src={talent.image} alt={talent.name} />
                    </div>
                )
            })
    
            return (
                <div key={levelIndex}>{individualTalents}</div>
            )
        })
    
        return (
            <div>
                <h1>{hero.name}</h1>
                <div>{talents}</div>
            </div>
        )
    }
}

export default Hero
