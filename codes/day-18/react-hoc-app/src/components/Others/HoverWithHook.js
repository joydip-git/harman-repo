import useCount from "./useCount"
import useStyle from "./useStyle"

const HoverWithHook = (props) => {
    const { y } = props
    const [countValue, increaseValue] = useCount(10)
    const [backgroundColorValue, applyStyleHandler] = useStyle('lime')
    return (
        <div
            className='divStyle'
            onMouseOver={() => applyStyleHandler('grey')}
            onClick={increaseValue}
            style={{ backgroundColor: backgroundColorValue }}
        >
            Y:&nbsp;{y === undefined ? 'NA' : y}
            <br />
            Hover Count:&nbsp;{countValue}
        </div>
    )
}
export default HoverWithHook