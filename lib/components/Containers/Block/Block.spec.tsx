import { render, screen } from "@testing-library/react"
import { Block } from "./Block"

describe('Block', () => {

    it('should be rendered', () => {
        render(<Block data-testid="box">Element</Block>)
        
        expect(screen.getByTestId('box')).toBeDefined()
    })

    it('should be rendered a div if element is not passed', () => {
        render(<Block data-testid="box">Element</Block>)
        
        expect(screen.getByTestId('box').nodeName).toEqual('DIV')
    })

    it('should be rendered the element passed as props', () => {
        render(<Block data-testid="box" element="section">Element</Block>)
        
        expect(screen.getByTestId('box').nodeName).toEqual('SECTION')
    })

    it('should set the className passed in props', () => {
        const className = 'my-class'
        render(<Block data-testid="box" className={className}>Element</Block>)
        
        expect(screen.getByTestId('box').className).toContain(className)
    })

    it('should take the breakpoint given in props', () => {
        const breakpoint = 'hide-on-s'
        render(<Block data-testid="box" breakpoints={breakpoint}>Element</Block>)
        
        expect(screen.getByTestId('box').className).toContain(breakpoint)
    })

})