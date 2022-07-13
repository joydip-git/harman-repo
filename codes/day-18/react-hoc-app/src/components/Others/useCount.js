import { useState } from "react"

const useCount = (initialValue) => {
    const [count, setCount] = useState(initialValue)
    const increase = () => {
        setCount(
            (oldCount) => {
                return oldCount + 1
            }
        )
    }

    return [count, increase]
}
export default useCount