import { classes } from "./classes"

describe('Classes Service', () => {

    it('should returns concatenation of classes separated by " "', () => {
        const results = 'my classes concatenated'

        expect(classes('my', 'classes', 'concatenated')).toEqual(results)
    })

    it('should concatenate if the value of the key is true while object is passed', () => {
        const results = 'filtred class name'

        expect(classes({filtred: true}, {ignored: false}, 'class', 'name')).toEqual(results)
    })

})