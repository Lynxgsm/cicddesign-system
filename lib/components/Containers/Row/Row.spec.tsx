import { render, screen } from "@testing-library/react"
import { Row } from "./Row"

describe('Row', () => {

    it('should be rendered', () => {
        render(<Row data-testid="row">Element</Row>)
        
        expect(screen.getByTestId('row')).toBeDefined()
    })

    it('should be rendered a div if element is not passed', () => {
        render(<Row data-testid="row">Element</Row>)
        
        expect(screen.getByTestId('row').nodeName).toEqual('DIV')
    })

    it('should be rendered the element passed as props', () => {
        render(<Row data-testid="row" element="section">Element</Row>)
        
        expect(screen.getByTestId('row').nodeName).toEqual('SECTION')
    })

    it('should be rendered the element passed as props', () => {
        render(<Row data-testid="row" element="section">Element</Row>)
        
        expect(screen.getByTestId('row').nodeName).toEqual('SECTION')
    })

    it('should set the className passed in props', () => {
        const className = 'my-class'
        render(<Row data-testid="row" className={className}>Element</Row>)
        
        expect(screen.getByTestId('row').className).toContain(className)
    })

    it('should take the breakpoint given in props', () => {
        const breakpoint = 'hide-on-s'
        render(<Row data-testid="row" breakpoints={breakpoint}>Element</Row>)
        
        expect(screen.getByTestId('row').className).toContain(breakpoint)
    })
})