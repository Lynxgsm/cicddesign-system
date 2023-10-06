import { render, screen } from "@testing-library/react"
import { Column } from "./Column"

describe('Column', () => {

    it('should be rendered', () => {
        render(<Column data-testid="column">Element</Column>)
        
        expect(screen.getByTestId('column')).toBeDefined()
    })

    it('should be rendered a div if element is not passed', () => {
        render(<Column data-testid="column">Element</Column>)
        
        expect(screen.getByTestId('column').nodeName).toEqual('DIV')
    })

    it('should be rendered the element passed as props', () => {
        render(<Column data-testid="column" element="section">Element</Column>)
        
        expect(screen.getByTestId('column').nodeName).toEqual('SECTION')
    })

    it('should be rendered the element passed as props', () => {
        render(<Column data-testid="column" element="section">Element</Column>)
        
        expect(screen.getByTestId('column').nodeName).toEqual('SECTION')
    })

    it('should set the className passed in props', () => {
        const className = 'my-class'
        render(<Column data-testid="column" className={className}>Element</Column>)
        
        expect(screen.getByTestId('column').className).toContain(className)
    })

    it('should take the breakpoint given in props', () => {
        const breakpoint = 'hide-on-s'
        render(<Column data-testid="column" breakpoints={breakpoint}>Element</Column>)
        
        expect(screen.getByTestId('column').className).toContain(breakpoint)
    })

    it('should take the column that the element take in style if col is passed', () => {
        const col = 5
        render(<Column data-testid="column" col={col}>Element</Column>)
        
        expect(screen.getByTestId('column').className).toContain(`col-${5}`)
    })

    test('breakpoints should be undefined by default', () => {
        render(<Column data-testid="column" >Element</Column>)
        
        expect(screen.getByTestId('column').className.includes('col-xl')).toBeFalsy()
        expect(screen.getByTestId('column').className.includes('col-l')).toBeFalsy()
        expect(screen.getByTestId('column').className.includes('col-m')).toBeFalsy()
        expect(screen.getByTestId('column').className.includes('col-s')).toBeFalsy()
        expect(screen.getByTestId('column').className.includes('col-xs')).toBeFalsy()
    })

    test('breakpoints must be passed as className', () => {
        render(<Column data-testid="column" xl={6} l={5} m={4} s={3} xs={2}>Element</Column>)
        
        expect(screen.getByTestId('column').className).toContain('col-xl-6')
        expect(screen.getByTestId('column').className).toContain('col-l-5')
        expect(screen.getByTestId('column').className).toContain('col-m-4')
        expect(screen.getByTestId('column').className).toContain('col-s-3')
        expect(screen.getByTestId('column').className).toContain('col-xs-2')
    })

})