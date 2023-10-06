import { render, screen } from "@testing-library/react"
import { Table } from "../Table/Table"
import { TFoot } from "./TFoot"


describe('TFoot', () => {
    it('should be rendered', () => {
        render(<Table><TFoot data-testid="foot"></TFoot></Table>)

        const foot = screen.getByTestId('foot')

        expect(foot).toBeDefined()
    })

    it('should take classes pass in props', () => {
        render(<Table><TFoot className="my-class" data-testid="foot"></TFoot></Table>)

        const foot = screen.getByTestId('foot')

        expect(foot.className).toContain('my-class')
    })

    it('should take style passes in props', () => {
        render(<Table><TFoot style={{width: '700px'}} data-testid="foot"></TFoot></Table>)

        const foot = screen.getByTestId('foot')

        expect(foot.style.width).toEqual('700px')
    })
})