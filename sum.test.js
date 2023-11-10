let sum = require('./sum')


describe("Add two numbers", () => {

    it("Add 2 + 3", ()=>{

        expect(sum(3,2)).toBe(5)
        expect(sum(10,10)).toBe(20)

    })

})

