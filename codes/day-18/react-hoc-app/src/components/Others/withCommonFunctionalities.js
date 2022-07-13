import { Component } from "react"

const withCommonFunctionalities = (OriginalComponent) => {

    class WithCommonFunctionalities extends Component {
        state = {
            count: 0,
            backgroundColor: 'blue'
        }
        increaseHandler = () => {
            this.setState(
                (oldState) => {
                    return {
                        count: oldState.count + 1
                    }
                }
            )
        }
        applyStyle = () => {
            this.setState({
                backgroundColor: 'yellow'
            })
        }

        render() {
            // console.log(this.props.x === undefined ? 'NA' : this.props.x)
            // console.log(this.props.y === undefined ? 'NA' : this.props.y)
            return <OriginalComponent
                increaseValue={this.increaseHandler}
                applyStyleHandler={this.applyStyle}
                backgroundColorValue={this.state.backgroundColor}
                countValue={this.state.count}
                {...this.props}
            />
        }
    }

    return WithCommonFunctionalities
}
export default withCommonFunctionalities