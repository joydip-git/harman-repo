import React from 'react'
import ErrorDetail from './ErrorDetail';

type heroPropType = {
    heroName: string
}
const SimpleHero = (props: heroPropType) => {

    if (props.heroName === 'Joker') {
        throw new Error(`Joker is not a hero`)
    }
    let design = <div>{props.heroName}</div>
    return design
}

export default SimpleHero