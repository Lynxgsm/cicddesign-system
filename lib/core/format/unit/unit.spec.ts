import { unitFormatter } from "./unit"

describe('Unit Service', () => {

    it('should returns 0px by default', () => {
        expect(unitFormatter()).toEqual('0px')
    })

    it('should set unit to px if it is not passed', () => {
        expect(unitFormatter(45)).toEqual('45px')
    })

    it('should returns concatenate with unit if unit is passed', () => {
        expect(unitFormatter(45, '%')).toEqual('45%')
    })

    it('should returns directly the string value if string is passed', () => {
        expect(unitFormatter('45%')).toEqual('45%')
    })

})