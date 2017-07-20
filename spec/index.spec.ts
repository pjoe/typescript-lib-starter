import * as lib from "../src/index"

describe("The sum function", () => {
    it("should add correctly", () => {
        expect(lib.add(2, 4)).toBe(6)
    })
})

describe("The toBeEven custom matcher", () => {
    it("should work for even numbers", () => {
        expect(0).toBeEven()
        expect(88).toBeEven()
        expect(-42).toBeEven()
    })
})
