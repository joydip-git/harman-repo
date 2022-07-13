import { useState } from "react"

const useStyle = (initialColor) => {
    const [backColor, setBackColor] = useState(initialColor)

    const applyStyle = (newColor) => {
        setBackColor(newColor)
    }

    return [backColor, applyStyle]
}
export default useStyle