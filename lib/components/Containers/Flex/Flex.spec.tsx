import { render, screen } from "@testing-library/react"
import { Flex } from "./Flex"

describe('Flex', () => {

    it('should be rendered', () => {
        render(<Flex data-testid="flex">Element</Flex>)
        
        expect(screen.getByTestId('flex')).toBeDefined()
    })

    it('should be rendered a div if element is not passed', () => {
        render(<Flex data-testid="flex">Element</Flex>)
        
        expect(screen.getByTestId('flex').nodeName).toEqual('DIV')
    })

    it('should be rendered the element passed as props', () => {
        render(<Flex data-testid="flex" element="section">Element</Flex>)
        
        expect(screen.getByTestId('flex').nodeName).toEqual('SECTION')
    })

    it('should set the className passed in props', () => {
        const className = 'my-class'
        render(<Flex data-testid="flex" className={className}>Element</Flex>)
        
        expect(screen.getByTestId('flex').className).toContain(className)
    })

    it('should take the breakpoint given in props', () => {
        const breakpoint = 'hide-on-s'
        render(<Flex data-testid="flex" breakpoints={breakpoint}>Element</Flex>)
        
        expect(screen.getByTestId('flex').className).toContain(breakpoint)
    })

    it('should put the flex properties if it\'s passed', () => {
        const [align, direction, wrap] = ['center', 'column', 'wrap']

        render(
            <Flex data-testid="flex" justifyContent="center" 
                alignItems="center" 
                flexDirection="column" 
                flexWrap="wrap"
            >
                Element
            </Flex>
        )

        const flex = screen.getByTestId('flex')
        
        expect(flex.style.flexDirection).toEqual(direction)
        expect(flex.style.flexWrap).toEqual(wrap)
        expect(flex.style.justifyContent).toEqual(align)
        expect(flex.style.alignItems).toEqual(align)
    })

    it('should put gap to px if gap is passed as number', () => {
        const gap = 50

        render(<Flex data-testid="flex" gap={gap}>Element</Flex>)

        expect(screen.getByTestId('flex').style.gap).toEqual(`${gap}px`)
    })

    it('should put gap if gap is passed as string', () => {
        const gap = '50px'

        render(<Flex data-testid="flex" gap={gap}>Element</Flex>)

        expect(screen.getByTestId('flex').style.gap).toEqual(gap)
    })

})