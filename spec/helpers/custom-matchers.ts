const EPSILON = 0.00001

beforeEach(() => {
    jasmine.addMatchers({
        toBeEven() {
            return {
                compare: (actual: number) => {
                    return { pass: actual % 2 % 2 === 0 }
                }
            }
        }
    })
})

// tslint:disable-next-line:no-namespace
declare namespace jasmine {
    // tslint:disable-next-line:interface-name
    interface Matchers<T> {
        toBeEven(): boolean
    }
}
