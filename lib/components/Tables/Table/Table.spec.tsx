import { render, screen } from "@testing-library/react"
import { Table } from "./Table"


describe('Table', () => {
    it('should be rendered', () => {
        render(<Table></Table>)

        const table = screen.getByRole('table')

        expect(table).toBeDefined()
    })

    it('should take classes pass in props', () => {
        render(<Table className="my-class"></Table>)

        const table = screen.getByRole('table')

        expect(table.className).toContain('my-class')
    })

    it('should take style passes in props', () => {
        render(<Table style={{width: '700px'}}></Table>)

        const table = screen.getByRole('table')

        expect(table.style.width).toEqual('700px')
    })
})