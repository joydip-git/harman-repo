import React from 'react'
import ErrorDetail from './ErrorDetail';

type heroPropType = {
    heroName: string
}
const Hero = (props: heroPropType) => {

    let design;
    try {
        if (props.heroName === 'Joker') {
            throw new Error(`Joker is not a hero`)
        }
        design = <div>{props.heroName}</div>
    }
    catch (e: any) {
        design = <ErrorDetail message={e.message} info={e} />
    }

    return design
}

export default Hero