import React from "react";
const ElementList = () => {
    const numbers = [1, 2, 3, 4]
    const names = ['Huggin', 'Pavan', 'Prabhu', 'Yesu']
    return (
        <div>
            <ul>
                {
                    numbers.map(
                        (num) => {
                            return <li>{num}</li>
                        }
                    )
                }
            </ul>
            <br />
            <ol type='i'>
                {
                    names.map(
                        (name) => {
                            return <li>{name}</li>
                        }
                    )
                }
            </ol>
        </div>
    );
}
export default ElementList