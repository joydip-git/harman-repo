import PropTypes from 'prop-types'
const Sample = (args) => {
    //console.log(this)
    /**
     * the object is a collection of read-only properties
     * args = {
 *    someValue:100,
 *    name: 'Joydip'
 *    someFnHandler:()=>{}
 * }
     */
    //args.someValue = 200
    const { someValue, name, someFnHandler, x } = args
    return (
        <div>
            Value: &nbsp; <span>{someValue} and {x}</span>
            <br />
            Name:&nbsp;<span>{name}</span>
            <br />
            <button onClick={someFnHandler}>Call</button>
        </div>
    )
}
Sample.propTypes = {
    someValue: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    someFnHandler: PropTypes.func.isRequired
}
export default Sample