const { multiply, divide, fetchPost } = require('./index')
//arrange
//act
//assert

//test fixture/test case
describe(
    'testing multiply',
    () => {
        test(
            'mutiplying 2 by 2 to eual 4',
            () => {
                const actual = multiply(2, 2)
                const expected = 4
                //expect is a matcher
                expect(actual).toBe(expected)
            }
        )

        test(
            'mutiplying 2 by 3 to eual 6',
            () => {
                const actual = multiply(2, 3)
                const expected = 6
                expect(actual).toBe(expected)
            }
        )
    }
)

/*
//checking truthiness
test(
    'testing null', () => {
        const n = null
        expect(n).toBeNull()
        expect(n).toBeDefined()
        //expect(n).toBeUndefined()
    }
)

test(
    'testing multiply',
    () => {
        const actual = multiply(2, 3)
        expect(actual).toBeGreaterThan(5)
        expect(actual).toBeGreaterThanOrEqual(4)
        //expect(actual).toBeLessThan(5)
        //expect(actual).toBeLessThanOrEqual(5)
        expect(actual).toBe(6)
        expect(actual).toEqual(6)
    }
)

test(
    'testing string',
    () => {
        const str = 'team'
        expect(str).toMatch('ea')
    }
)

test(
    'testing array',
    () => {
        const values = ['dell xps', 'hp probook', 'i Phone']
        expect(values).toContain('hp probook')
    }
)

test(
    'testing exception',
    () => {
        expect(
            () => divide(12, 0)
        ).toThrow()
        expect(
            () => divide(12, 0)
        ).toThrow(Error)
        expect(
            () => divide(12, 0)
        ).toThrow('denominator can not be zero')
    }
)
*/

describe(
    'testing fetchPost async method',
    () => {

        let expectedTitle
        //is used to allocate resources required for every test case
        //it will run before every test case
        beforeEach(
            () => {
                expectedTitle = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                console.log('will run before every test case')
            }
        )

        //is used to de-allocate resources required for every test case
        //it will run after every test case
        afterEach(
            () => {
                expectedTitle = null
                console.log('will run after every test case')
            }
        )

        //is used to allocate resource (one time) required for every test case
        //it will run before all the test cases, but once
        //this will run even before beforeEach
        beforeAll(
            () => {
                console.log('will run before all test cases..one time ')
            }
        )

        //is used to de-allocate resource required for every test case, after all the test cases have finished running
        //it will run after all the test cases are completed, but once
        //this will run even after everything, even after afterEach
        afterAll(
            () => {
                console.log('will run after all test cases...one time')
            }
        )

        test(
            'testing whether getting post related to post id 1',
            async () => {
                const actualPost = await fetchPost('https://jsonplaceholder.typicode.com/posts/1')
                console.log(actualPost)
                expect(actualPost.title).toBe(expectedTitle)
            }
        )

        test(
            'testing whether getting exception with incorrect URL',
            async () => {
                try {
                    await fetchPost('https://jsonplaceholder.typicode.com/postss/1')
                } catch (e) {
                    // expect(e.message).toMatch('Request failed with status code 404')
                    expect(e.message).toMatch('wrong URL...can not fetch data')
                }
            }
        )
    }
)
/**
 * beforeEach, beforeAll <-- set up method
 * afterEach, afterAll <-- tear down method
 */