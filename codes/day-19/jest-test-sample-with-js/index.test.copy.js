const { multiply, divide, fetchPost } = require('./index')
//arrange
//act
//assert

describe(
    'Testing multiply method',

    () => {

        it(
            'testing multiply: 2 by 2 equal to 4',
            () => {
                const actual = multiply(2, 2)
                expect(actual).toBe(4)
            }
        )

        it(
            'testing multiply: 2 by 3 equal to 6',
            () => {
                const actual = multiply(2, 3)
                expect(actual).toBe(6)
            }
        )
    }
)